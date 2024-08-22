import './Select.scss';
import { useState, useContext, useRef } from 'react';
import Option from '../Option';
import AddItem from '../../AddItem';
import notesServices from '../../../services/notes';
import { v4 as uuidv4 } from 'uuid';
import {
  WorkspacesProviderContextValue,
  WorkspacesContext,
  Workspace,
} from '../../../NotesProvider';

export default function Select() {
  const [selectedOption, setSelectedOption] = useState<null | string>('Notes');
  const [searchValue, setSearchValue] = useState<string>('');
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [shouldExpandInput, setShouldExpandInput] = useState(false);
  const [addWorkspaceContent, setAddWorkspaceContent] = useState('');
  const dropdownRef = useRef(null);
  const { workspaces, setWorkspaces, activeWorkspaceId, setActiveWorkspaceId } =
    useContext<WorkspacesProviderContextValue>(WorkspacesContext);

  const isFocus = () => {
    setDropdownIsOpen((wasOpen) => !wasOpen);
  };

  const toggleAddInput = () => {
    setShouldExpandInput((wasAddInput) => !wasAddInput);
    setAddWorkspaceContent('');
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement, HTMLElement>) => {
    const {
      relatedTarget,
    }: { relatedTarget: (EventTarget & HTMLElement) | null } = event;

    if (relatedTarget?.classList.contains('option__btn')) {
      const workspaceName = relatedTarget.textContent;
      const selectedWorkspaceId = relatedTarget.dataset.workspaceId;
      setSelectedOption(workspaceName);
      setSearchValue('');

      // lets find the workspace that was selected first
      const _workspaces = workspaces.map((workspace: Workspace): Workspace => {
        // I found the new selected workspace
        if (workspace.id === activeWorkspaceId) {
          // lets check the new notes here;
          const newNotes = notesServices
            .getCurrentWorkspaceNotes()
            .map((note) => {
              const noteXPosition = note.node?.dataset.x;
              const noteYPosition = note.node?.dataset.y;
              console.log(
                'notes new positions: ',
                noteXPosition,
                noteYPosition
              );
              return {
                id: note.id,
                color: note.color,
                content: note.noteInstance.getContents(),
                dataX: noteXPosition,
                dataY: noteYPosition,
              };
            });

          return {
            id: workspace.id,
            name: workspace.name,
            notes: newNotes,
          };
        }
        return workspace;
      });

      setWorkspaces(_workspaces);
      // NOTE: this sets a new workspaceId and call react.setState and change the context value
      setActiveWorkspaceId(selectedWorkspaceId as string);

      // NOTE: Makes sure that there not active currentActiveWorkspace notes in notesServices
      // to save and manage next workspaceId notes in canvas
      notesServices.disposeCurrentWorkspaceNotes();
    }

    setDropdownIsOpen((wasOpen) => !wasOpen);
  };

  return (
    <div className="select" data-is-dropdown-open={dropdownIsOpen}>
      <span className="select__aria-describe" id="select-describe">
        <span>
          <span id="aria-results"></span>
          <span id="aria-guidance"></span>
        </span>
      </span>

      <div className="select__view-add">
        <div className="select__wrapper">
          <p className="select__selected-option">
            {!searchValue && selectedOption}
          </p>
          <div className="select__dropdown" data-value={searchValue}>
            <input
              onChange={(event) => {
                setSearchValue(event.target.value);
                setSelectedOption(null);
              }}
              onFocus={isFocus}
              onBlur={onBlur}
              className="select__search"
              value={searchValue}
            />
          </div>
        </div>
        <AddItem
          shouldAnimate={shouldExpandInput}
          toggle={toggleAddInput}
          className="notes-button__btn--workspaces btn"
        />
        <input
          className={
            shouldExpandInput
              ? 'select__search--add'
              : 'select__search--add hidden'
          }
          placeholder="Add a workspace"
          onChange={(event) => {
            setAddWorkspaceContent(event.target.value);
          }}
          type="text"
          data-value={addWorkspaceContent}
          value={addWorkspaceContent}
          onKeyDown={(event) => {
            if (event.code === 'Enter') {
              // setWorkspaces([...workspaces, {
              //   id: uuidv4(),
              //   name:
              // }])
              setShouldExpandInput((wasAddInput) => !wasAddInput);
              setWorkspaces([
                ...workspaces,
                {
                  id: uuidv4(),
                  name: event.target.dataset.value,
                  notes: [],
                },
              ]);
              return;
            }
          }}
        />
      </div>
      {dropdownIsOpen && (
        <div className="select__options">
          <ul ref={dropdownRef} className="select__options-list">
            {workspaces.map(({ id, name }: Workspace) => {
              return <Option key={id} id={id} name={name} />;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

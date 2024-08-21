import './NotesPaletteItem.scss';
import { v4 as uuidv4 } from 'uuid';
import {
  WorkspacesContext,
  Note,
  Workspace,
  WorkspacesProviderContextValue,
} from '../../NotesProvider';
import { useContext } from 'react';

interface NotesPaletteItemProps {
  variant: 'ocean' | 'teal' | 'mint' | 'sand' | 'golden';
  togglePalette: () => void;
}

export default function NotesPaletteItem({
  togglePalette,
  variant,
}: NotesPaletteItemProps) {
  const { workspaces, activeWorkspaceId, setWorkspaces } =
    useContext<WorkspacesProviderContextValue>(WorkspacesContext);

  return (
    <button
      onClick={() => {
        // FIX: Move this to its own helper function ?
        const newNote: Note = {
          id: uuidv4(),
          color: variant,
          content: '',
          dataX: '0',
          dataY: '0',
        };

        const _workspaces = workspaces.map(
          (workspace: Workspace): Workspace => {
            if (workspace.id === activeWorkspaceId) {
              console.log(
                'found the selected current workspace id: ',
                workspace.id
              );

              return {
                id: workspace.id,
                name: workspace.name,
                notes: [...workspace.notes, newNote],
              };
            }

            return workspace;
          }
        );
        setWorkspaces(_workspaces);
        togglePalette();
      }}
      className={`palette-item--${variant}`}
    ></button>
  );
}

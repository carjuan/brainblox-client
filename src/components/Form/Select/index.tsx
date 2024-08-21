import './Select.scss';
import { useState, useRef } from 'react';
import Option from '../Option';
import AddItem from '../../AddItem';
import type WorkspacesSelectProps from '../../WorkspacesSelection/WorkspacesSelection.d.ts';

export default function Select({
  workspaces,
}: WorkspacesSelectProps.Workspaces) {
  const [selectedOption, setSelectedOption] = useState<null | string>('Notes');
  const [searchValue, setSearchValue] = useState<string>('');
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [shouldExpandInput, setShouldExpandInput] = useState(false);
  const dropdownRef = useRef(null);

  const isFocus = () => {
    setDropdownIsOpen((wasOpen) => !wasOpen);
  };

  const toggleAddInput = () => {
    setShouldExpandInput((wasAddInput) => !wasAddInput);
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement, HTMLElement>) => {
    const {
      relatedTarget,
    }: { relatedTarget: (EventTarget & HTMLElement) | null } = event;

    if (relatedTarget?.classList.contains('option__btn')) {
      setSelectedOption(relatedTarget.textContent);
      setSearchValue('');
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
          type="text"
        />
      </div>
      {dropdownIsOpen && (
        <div className="select__options">
          <ul ref={dropdownRef} className="select__options-list">
            {workspaces.map(({ id, name }: WorkspacesSelectProps.Workspace) => (
              <Option key={id} name={name} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

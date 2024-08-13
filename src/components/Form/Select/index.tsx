import './Select.scss';
import { useState, useRef } from 'react';
import Option from '../Option';
import type HeaderProps from '../../Header/Header.d.ts';

export default function Select({ workspaces }: HeaderProps.Workspaces) {
  const [selectedOption, setSelectedOption] = useState<null | string>('Notes');
  const [searchValue, setSearchValue] = useState<string>('');
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isFocus = () => {
    setDropdownIsOpen((wasOpen) => !wasOpen);
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement, HTMLElement>) => {
    const { relatedTarget } = event;

    if (relatedTarget?.classList.contains('option__btn')) {
      setSelectedOption(relatedTarget.textContent);
      setSearchValue('');
    }

    setDropdownIsOpen((wasOpen) => !wasOpen);
  };

  return (
    <div className="select">
      <span className="select__aria-describe" id="select-describe">
        <span>
          <span id="aria-results"></span>
          <span id="aria-guidance"></span>
        </span>
      </span>

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
            className="select__input"
            value={searchValue}
          />
        </div>
      </div>
      {dropdownIsOpen && (
        <div className="select__options">
          <ul ref={dropdownRef} className="select__options-list">
            {workspaces.map(({ id, name }: HeaderProps.Workspace) => (
              <Option key={id} name={name} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

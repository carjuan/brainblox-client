import './NotesMenu.scss';
import NotesPalette from '../NotesPalette';
import NotesPaletteToggler from '../NotesPaletteToggler';
import { useState } from 'react';

export default function NotesMenu() {
  const [isPaletteOpen, setIsPaletteOpen] = useState<boolean>(false);
  const togglePalette = (isOpen: boolean): boolean => !isOpen;

  const togglePaletteMenu = () => {
    setIsPaletteOpen(togglePalette);
  };

  return (
    <section className="menu">
      <h2 className="visually-hidden">Notes Menu</h2>
      <div className="menu__wrapper">
        <NotesPalette
          togglePalette={togglePaletteMenu}
          isOpen={isPaletteOpen}
        />
        <NotesPaletteToggler
          shouldAnimate={isPaletteOpen}
          togglePalette={togglePaletteMenu}
        />
        <div className="menu__items">
          <button
            aria-label="see finished tasks and notes"
            className="menu__btn menu__btn--finished"
          >
            <svg
              role="presentation"
              aria-hidden="true"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="menu__icon-path"
                d="M12.7071 17.9596C12.3165 17.569 11.6834 17.569 11.2929 17.9596C10.9023 18.3501 10.9023 18.9832 11.2929 19.3738L12.7071 17.9596ZM14.6666 21.3333L13.9595 22.0404C14.35 22.431 14.9832 22.431 15.3737 22.0404L14.6666 21.3333ZM20.7071 16.7071C21.0976 16.3166 21.0976 15.6834 20.7071 15.2929C20.3165 14.9024 19.6834 14.9024 19.2929 15.2929L20.7071 16.7071ZM24.3333 9.33333V25.3333H26.3333V9.33333H24.3333ZM22.6666 27H9.33329V29H22.6666V27ZM7.66663 25.3333V9.33333H5.66663V25.3333H7.66663ZM9.33329 7.66667H12V5.66667H9.33329V7.66667ZM20 7.66667H22.6666V5.66667H20V7.66667ZM9.33329 27C8.41282 27 7.66663 26.2538 7.66663 25.3333H5.66663C5.66663 27.3584 7.30825 29 9.33329 29V27ZM24.3333 25.3333C24.3333 26.2538 23.5871 27 22.6666 27V29C24.6917 29 26.3333 27.3584 26.3333 25.3333H24.3333ZM26.3333 9.33333C26.3333 7.30829 24.6917 5.66667 22.6666 5.66667V7.66667C23.5871 7.66667 24.3333 8.41286 24.3333 9.33333H26.3333ZM7.66663 9.33333C7.66663 8.41286 8.41282 7.66667 9.33329 7.66667V5.66667C7.30825 5.66667 5.66663 7.30829 5.66663 9.33333H7.66663ZM11.2929 19.3738L13.9595 22.0404L15.3737 20.6262L12.7071 17.9596L11.2929 19.3738ZM15.3737 22.0404L20.7071 16.7071L19.2929 15.2929L13.9595 20.6262L15.3737 22.0404ZM14.6666 5H17.3333V3H14.6666V5ZM17.3333 8.33333H14.6666V10.3333H17.3333V8.33333ZM14.6666 8.33333C13.7462 8.33333 13 7.58714 13 6.66667H11C11 8.69171 12.6416 10.3333 14.6666 10.3333V8.33333ZM19 6.66667C19 7.58714 18.2538 8.33333 17.3333 8.33333V10.3333C19.3583 10.3333 21 8.69171 21 6.66667H19ZM17.3333 5C18.2538 5 19 5.74619 19 6.66667H21C21 4.64162 19.3583 3 17.3333 3V5ZM14.6666 3C12.6416 3 11 4.64162 11 6.66667H13C13 5.74619 13.7462 5 14.6666 5V3Z"
                fill="#E9D8A6"
              />
            </svg>
            Finished
          </button>
          <button
            aria-label="search in notes"
            className="menu__btn menu__btn--search"
          >
            <svg
              role="presentation"
              aria-hidden="true"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="menu__search-icon"
                d="M28 28L20 20M22.6667 13.3333C22.6667 18.488 18.488 22.6667 13.3333 22.6667C8.17868 22.6667 4 18.488 4 13.3333C4 8.17868 8.17868 4 13.3333 4C18.488 4 22.6667 8.17868 22.6667 13.3333Z"
                stroke="#E9D8A6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

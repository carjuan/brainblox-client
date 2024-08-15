import './NotesPaletteToggler.scss';

interface NotesButtonProps {
  togglePalette: () => void;
  shouldAnimate: boolean;
}

export default function NotesPaletteToggler({
  shouldAnimate,
  togglePalette,
}: NotesButtonProps) {
  return (
    <div className="notes-button">
      <button
        onClick={() => togglePalette()}
        aria-label="open notes palette"
        className="notes-button__btn btn"
      >
        <svg
          className="notes-button__add-icon"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`notes-button__add-path${shouldAnimate ? '--horizontal-animate' : ''}`}
            d="M26.6665 16.0092H5.33325"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className={`notes-button__add-path${shouldAnimate ? '--vertical-animate' : ''}`}
            d="M16 26.3333L16 5"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

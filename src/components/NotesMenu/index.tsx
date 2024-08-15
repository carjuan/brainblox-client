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
        <NotesPalette isOpen={isPaletteOpen} />
        <NotesPaletteToggler
          shouldAnimate={isPaletteOpen}
          togglePalette={togglePaletteMenu}
        />
      </div>
    </section>
  );
}

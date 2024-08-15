import './NotesMenu.scss';
import NotesPaletteToggler from '../NotesPaletteToggler';
import { useState } from 'react';
export default function NotesMenu() {
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);

  const togglePaletteMenu = () => {
    setShouldAnimate((shouldAnimate: boolean): boolean => !shouldAnimate);
  };

  return (
    <section className="menu">
      <h2 className="visually-hidden">Notes Menu</h2>
      <div className="menu__wrapper">
        <NotesPaletteToggler
          shouldAnimate={shouldAnimate}
          togglePalette={togglePaletteMenu}
        />
      </div>
    </section>
  );
}

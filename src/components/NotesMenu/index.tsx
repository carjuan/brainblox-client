import './NotesMenu.scss';
import NotesPalette from '../NotesPalette';
import NotesPaletteToggler from '../NotesPaletteToggler';
import { useState } from 'react';

export default function NotesMenu() {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);

  const togglePaletteMenu = () => {
    setIsHidden((wasHidden: boolean): boolean => {
      return !wasHidden;
    });
    setShouldAnimate((shouldAnimate: boolean): boolean => !shouldAnimate);
  };

  return (
    <section className="menu">
      <h2 className="visually-hidden">Notes Menu</h2>
      <div className="menu__wrapper">
        <NotesPalette isHidden={isHidden} />
        <NotesPaletteToggler
          shouldAnimate={shouldAnimate}
          togglePalette={togglePaletteMenu}
        />
      </div>
    </section>
  );
}

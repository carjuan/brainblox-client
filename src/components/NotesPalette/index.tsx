import './NotesPalette.scss';
import NotesPaletteItem from '../NotesPaletteItem';

interface NotesPaletteProps {
  isOpen: boolean;
  togglePalette: () => void;
}

export default function NotesPalette({
  togglePalette,
  isOpen,
}: NotesPaletteProps) {
  return (
    <div className={`notes-palette${!isOpen ? '--hidden' : ''}`}>
      <NotesPaletteItem togglePalette={togglePalette} variant="ocean" />
      <NotesPaletteItem togglePalette={togglePalette} variant="teal" />
      <NotesPaletteItem togglePalette={togglePalette} variant="mint" />
      <NotesPaletteItem togglePalette={togglePalette} variant="sand" />
      <NotesPaletteItem togglePalette={togglePalette} variant="golden" />
    </div>
  );
}

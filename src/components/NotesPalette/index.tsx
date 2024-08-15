import './NotesPalette.scss';
import NotesPaletteItem from '../NotesPaletteItem';

interface NotesPaletteProps {
  isOpen: boolean;
}

export default function NotesPalette({ isOpen }: NotesPaletteProps) {
  return (
    <div className={`notes-palette${!isOpen ? '--hidden' : ''}`}>
      <NotesPaletteItem variant="ocean" />
      <NotesPaletteItem variant="teal" />
      <NotesPaletteItem variant="mint" />
      <NotesPaletteItem variant="sand" />
      <NotesPaletteItem variant="golden" />
    </div>
  );
}

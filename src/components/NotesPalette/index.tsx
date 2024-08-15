import './NotesPalette.scss';
import NotesPaletteItem from '../NotesPaletteItem';

interface NotesPaletteProps {
  isHidden: boolean;
}

export default function NotesPalette({ isHidden }: NotesPaletteProps) {
  return (
    <div className={`notes-palette${isHidden ? '--hidden' : ''}`}>
      <NotesPaletteItem variant="ocean" />
      <NotesPaletteItem variant="teal" />
      <NotesPaletteItem variant="mint" />
      <NotesPaletteItem variant="sand" />
      <NotesPaletteItem variant="golden" />
    </div>
  );
}

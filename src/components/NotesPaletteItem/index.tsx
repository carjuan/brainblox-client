import './NotesPaletteItem.scss';
import {
  NotesContext,
  Note,
  useNoteFactory,
  Factory,
} from '../../NotesProvider';
import { useContext } from 'react';

interface NotesPaletteItemProps {
  variant: 'ocean' | 'teal' | 'mint' | 'sand' | 'golden';
  togglePalette: () => void;
}

export default function NotesPaletteItem({
  togglePalette,
  variant,
}: NotesPaletteItemProps) {
  const ctx = useContext(NotesContext);
  const noteFactory: Factory = useNoteFactory();

  return (
    <button
      onClick={() => {
        const newNote: Note = {
          noteFactory,
          color: variant,
        };
        ctx.setNotes((notes: Array<Note>): Array<Note> => [...notes, newNote]);
        togglePalette();
      }}
      className={`palette-item--${variant}`}
    ></button>
  );
}

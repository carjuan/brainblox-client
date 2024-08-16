import 'quill/dist/quill.snow.css';
import './NoteItem.scss';
import noteManager from '../../NotesManager';
import { Note as NoteProps } from '../../NotesProvider';
import { useEffect, useRef } from 'react';

export default function NoteItem({ noteFactory, color }: NoteProps) {
  const noteRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (noteRef.current) {
      const note = new noteFactory(noteRef.current, {
        theme: 'snow',
      });
    }
  }, []);

  return (
    <div className={`note--${color}`}>
      <div className="note__container" ref={noteRef}></div>
    </div>
  );
}

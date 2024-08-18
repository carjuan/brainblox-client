import 'quill/dist/quill.snow.css';
import './NoteItem.scss';
import notesServices from '../../services/notes';
import { Note as NoteProps } from '../../NotesProvider';
import { useEffect, useRef } from 'react';

export default function NoteItem({ noteFactory, color }: NoteProps) {
  const draggableRef = useRef<HTMLDivElement | null>(null);
  const noteRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (noteRef.current) {
      new noteFactory(noteRef.current, {
        theme: 'snow',
      });
    }

    if (draggableRef.current) {
      notesServices.makeDraggable(draggableRef.current);
    }
  }, []);

  return (
    <div ref={draggableRef} className={`note--${color}`}>
      <div className="note__container" ref={noteRef}></div>
    </div>
  );
}

import 'quill/dist/quill.snow.css';
import './NoteItem.scss';
import notesServices from '../../services/notes';
import { Note } from '../../NotesProvider';
import { useEffect, useRef } from 'react';

export default function NoteItem({ color, content, id, dataX, dataY }: Note) {
  const draggableRef = useRef<HTMLDivElement | null>(null);
  const noteRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (noteRef.current) {
      // FIX:1. Here I should quill api to add note content
      // Fore performance. loop over current set of notes and see if there an instace of noteFactory?
      // if there is, i should not instantiate more?
      const noteFactory = notesServices.getNoteFactory();

      const newNote = new noteFactory(noteRef.current, {
        theme: 'snow',
      });

      // FIX understand the type of Quill contents and Delta type
      if (typeof content === 'string') {
        newNote.insertText(0, content);
      } else {
        newNote.setContents(content);
      }

      console.log(content);
      notesServices.registerNote({
        id,
        color,
        noteInstance: newNote,
        node: draggableRef.current,
        content: content,
      });
    }

    if (draggableRef.current) {
      notesServices.makeDraggable(draggableRef.current);
    }
  }, []);

  return (
    <div
      ref={draggableRef}
      className={`note--${color}`}
      data-id={id}
      style={{
        transform: `translate(${dataX}px, ${dataY}px)`,
      }}
      data-x={dataX}
      data-y={dataY}
    >
      <div className="note__container" ref={noteRef}></div>
    </div>
  );
}

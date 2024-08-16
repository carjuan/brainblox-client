import './NotesCanvas.scss';
import { NotesContext, Note } from '../../NotesProvider';
import { useContext } from 'react';
import NoteItem from '../NoteItem';

export default function NotesCanvas() {
  const { notes } = useContext(NotesContext);
  return (
    <section className="canvas wrapper">
      <h2 className="visually-hidden">Notes Canvas</h2>
      <div className="canvas__wrapper">
        <div className="canvas__notes">
          {notes.length
            ? notes.map(({ noteFactory, color }: Note, i: number) => {
                return (
                  <NoteItem key={i} noteFactory={noteFactory} color={color} />
                );
              })
            : ''}
        </div>
      </div>
    </section>
  );
}

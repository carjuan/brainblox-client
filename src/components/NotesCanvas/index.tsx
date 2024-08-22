import './NotesCanvas.scss';
import {
  WorkspacesContext,
  WorkspacesProviderContextValue,
  Workspace,
  Note,
} from '../../NotesProvider';
import { useContext } from 'react';
import NoteItem from '../NoteItem';

export default function NotesCanvas() {
  const { workspaces, activeWorkspaceId } =
    useContext<WorkspacesProviderContextValue>(WorkspacesContext);
  const { notes } = workspaces.find(
    (workspace: Workspace) => workspace.id === activeWorkspaceId
  ) as Workspace;
  return (
    <section className="canvas wrapper">
      <h2 className="visually-hidden">Notes Canvas</h2>
      <div className="canvas__wrapper">
        <div className="canvas__notes">
          {notes.length
            ? notes.map(({ id, color, content, dataX, dataY }: Note) => {
                return (
                  <NoteItem
                    key={id}
                    id={id}
                    content={content}
                    color={color}
                    dataX={dataX}
                    dataY={dataY}
                  />
                );
              })
            : ''}
        </div>
      </div>
    </section>
  );
}

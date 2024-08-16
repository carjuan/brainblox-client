import './Workspace.scss';
import WorkspaceSelection from '../../components/WorkspacesSelection';
import NotesCanvas from '../../components/NotesCanvas';
import NotesMenu from '../../components/NotesMenu';
import type WorkspacesSelectProps from '../../components/WorkspacesSelection/WorkspacesSelection.d.ts';
import { NotesProvider } from '../../NotesProvider';

export default function Workspace({
  workspaces,
}: WorkspacesSelectProps.Workspaces) {
  return (
    <section className="workspace">
      <h2 className="visually-hidden">workspaces</h2>
      <div className="workspace__wrapper">
        <NotesProvider>
          <WorkspaceSelection workspaces={workspaces} />
          <NotesCanvas />
          <NotesMenu />
        </NotesProvider>
      </div>
    </section>
  );
}

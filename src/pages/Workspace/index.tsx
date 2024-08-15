import './Workspace.scss';
import WorkspaceSelection from '../../components/WorkspacesSelection';
import NotesMenu from '../../components/NotesMenu';
import type WorkspacesSelectProps from '../../components/WorkspacesSelection/WorkspacesSelection.d.ts';

export default function Workspace({
  workspaces,
}: WorkspacesSelectProps.Workspaces) {
  return (
    <section className="workspace">
      <h2 className="visually-hidden">workspaces</h2>
      <div className="workspace__wrapper">
        <WorkspaceSelection workspaces={workspaces} />
        <NotesMenu />
      </div>
    </section>
  );
}

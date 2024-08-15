import './Workspace.scss';
import Header from '../../components/Header';
import NotesMenu from '../../components/NotesMenu';
import type HeaderProps from '../../components/Header/Header.d.ts';

export default function Workspace({ workspaces }: HeaderProps.Workspaces) {
  return (
    <section className="workspace">
      <h2 className="visually-hidden">workspaces</h2>
      <div className="workspace__wrapper">
        <Header workspaces={workspaces} />
        <NotesMenu />
      </div>
    </section>
  );
}

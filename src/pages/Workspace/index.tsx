import Header from '../../components/Header';
import type HeaderProps from '../../components/Header/Header.d.ts';

export default function Workspace({ workspaces }: HeaderProps.Workspaces) {
  return (
    <section>
      <Header workspaces={workspaces} />
    </section>
  );
}

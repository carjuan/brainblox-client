import Select from '../Form/Select';
import type HeaderProps from './Header.d.ts';

export default function Header({ workspaces }: HeaderProps.Workspaces) {
  return (
    <header>
      <Select workspaces={workspaces} />
    </header>
  );
}

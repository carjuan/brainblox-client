import Select from '../Form/Select';
import type WorkspacesSelectProps from './WorkspacesSelection.d.ts';

export default function WorkspaceSelection({
  workspaces,
}: WorkspacesSelectProps.Workspaces) {
  return (
    <header className="wrapper">
      <Select workspaces={workspaces} />
    </header>
  );
}

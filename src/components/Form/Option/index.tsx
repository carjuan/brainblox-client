import './Option.scss';
import type WorkspacesSelectProps from '../../WorkspacesSelection/WorkspacesSelection.d.ts';

export default function Option({ name }: WorkspacesSelectProps.Option) {
  return (
    <li className="option">
      <button tabIndex={0} className="option__btn">
        {name}
      </button>
    </li>
  );
}

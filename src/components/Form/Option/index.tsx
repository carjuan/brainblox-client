import './Option.scss';
import type HeaderProps from '../../Header/Header.d.ts';

export default function Option({ name }: HeaderProps.Option) {
  return (
    <li className="option">
      <button tabIndex={0} className="option__btn">
        {name}
      </button>
    </li>
  );
}

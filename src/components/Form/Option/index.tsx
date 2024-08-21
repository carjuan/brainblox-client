import './Option.scss';
import type WorkspacesSelectProps from '../../WorkspacesSelection/WorkspacesSelection.d.ts';

export default function Option({ name }: WorkspacesSelectProps.Option) {
  return (
    <li className="option">
      <button tabIndex={0} className="option__btn">
        {name}
      </button>
      <div
        className={name === 'Notes' ? 'option__edit--hidden' : 'option__edit'}
      >
        <button
          aria-label="edit workspace"
          title="edit workspace"
          className="option__edit-icon btn"
        >
          <svg
            role="presentation"
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0984 3.80369H5.4119C3.52756 3.80369 2 5.3312 2 7.21548V18.5882C2 20.4725 3.52756 22 5.4119 22H16.7849C18.6692 22 20.1968 20.4725 20.1968 18.5882L20.1968 12.9018M7.68649 16.3136L11.8244 15.4799C12.044 15.4356 12.2457 15.3274 12.4041 15.1689L21.6671 5.90116C22.1112 5.45682 22.1109 4.73657 21.6664 4.2926L19.7042 2.33264C19.2599 1.88886 18.54 1.88916 18.0961 2.33332L8.8321 11.6021C8.674 11.7602 8.56605 11.9615 8.52175 12.1807L7.68649 16.3136Z"
              stroke="#999999"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          aria-label="remove workspace"
          title="remove workspace"
          className="option__edit-icon btn"
        >
          <svg
            role="presentation"
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 3.99998H17.9C17.4215 1.67358 15.3751 0.003 13 0H11C8.62484 0.003 6.57837 1.67358 6.09997 3.99998H2.99998C2.4477 3.99998 2 4.44769 2 4.99997C2 5.55225 2.4477 6 2.99998 6H3.99997V19C4.0033 21.76 6.23994 23.9967 8.99998 24H15C17.76 23.9967 19.9967 21.76 20 19V6H21C21.5523 6 22 5.5523 22 5.00002C22 4.44773 21.5523 3.99998 21 3.99998ZM11 17C11 17.5523 10.5523 18 10 18C9.44769 18 8.99998 17.5523 8.99998 17V11C8.99998 10.4477 9.44769 10 9.99997 10C10.5522 10 11 10.4477 11 11V17H11ZM15 17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V11C13 10.4477 13.4477 10 14 10C14.5523 10 15 10.4477 15 11V17ZM8.171 3.99998C8.59634 2.80228 9.72903 2.00152 11 1.99997H13C14.271 2.00152 15.4037 2.80228 15.829 3.99998H8.171Z"
              fill="#999999"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}

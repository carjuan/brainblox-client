import './Workspace.scss';
import WorkspaceSelection from '../../components/WorkspacesSelection';
import NotesCanvas from '../../components/NotesCanvas';
import NotesMenu from '../../components/NotesMenu';
import appTour from '../../lib/appTour.ts';
import { NotesProvider } from '../../NotesProvider';
import { useEffect, useRef } from 'react';

export default function Workspace() {
  const workspaceRef = useRef(null);

  useEffect(() => {
    if (workspaceRef.current) {
      appTour
        .registerTourGuides([
          {
            element: '.select__wrapper',
            popover: {
              title: 'Select Workspace',
              description:
                "Choose a workspace to view notes. Default is 'Notes'",
            },
          },
          {
            element: '.notes-button__btn',
            popover: {
              title: 'Open the notes palette',
              description:
                'Notes are divided into colors, Choose your favorite and start collecting ideas. More palettes to come soon!',
            },
          },
          {
            element: '.menu__btn--finished',
            popover: {
              title: 'See your finished tasks and notes',
              description: 'see all the notes you have marked as finished.',
            },
          },
          {
            element: '.menu__btn--search',
            popover: {
              title: 'Search thourgh your notes',
              description:
                'Sometimes, you just need to find the right note quickly. Use the search button to find it.',
            },
          },
          {
            element: '.theme-toggle__inner-moon',
            popover: {
              title: 'Fits your style',
              description:
                'Switch between light and dark mode to fit your preference. More themes coming soon!',
            },
          },
          {
            element: '.header__nav-list',
            popover: {
              title: 'Make sure to create an account',
              description:
                'Everything is saved locally. By creating an account you access to more features. Like synching, Setting Reminders, and more!',
            },
          },
        ])
        .startTour();
    }
  }, []);

  return (
    <section ref={workspaceRef} className="workspace">
      <h2 className="visually-hidden">workspaces</h2>
      <div className="workspace__wrapper">
        <NotesProvider>
          <WorkspaceSelection />
          <NotesCanvas />
          <NotesMenu />
        </NotesProvider>
      </div>
    </section>
  );
}

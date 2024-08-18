import interact from 'interactjs';
import { InteractEvent } from '@interactjs/core/InteractEvent';
import { Note } from '../NotesProvider';

interface INotesServices {
  makeDraggable: (noteNode: HTMLElement) => void;
  handleDragMovement: (event: InteractEvent) => void;
}

class NotesServices implements INotesServices {
  notes: Array<Note>;
  constructor() {
    this.notes = [];
    console.log('somebody instatiated me');
  }

  handleDragMovement(event: InteractEvent) {
    const target = event.target as HTMLElement;
    // keep the dragged position in the data-x/data-y attributes
    const x =
      (parseFloat(target.getAttribute('data-x') || '0') || 0) + event.dx;
    const y =
      (parseFloat(target.getAttribute('data-y') || '0') || 0) + event.dy;

    // translate the element
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x.toString());
    target.setAttribute('data-y', y.toString());
  }

  makeDraggable(noteNode: HTMLElement) {
    interact(noteNode).draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true,
        }),
      ],
      autoScroll: false,
      listeners: {
        move: this.handleDragMovement,
      },
    });
  }
}

const notesService = Object.freeze(new NotesServices());

export default notesService;

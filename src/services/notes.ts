import interact from 'interactjs';
import Quill from 'quill';
import { InteractEvent } from '@interactjs/core/InteractEvent';
import { Factory, Note } from '../NotesProvider';

interface INote extends Note {
  noteInstance: Quill;
  node: HTMLDivElement | null;
}

interface INotesServices {
  makeDraggable: (noteNode: HTMLElement) => void;
  handleDragMovement: (event: InteractEvent) => void;
  registerNote: (note: INote) => void;
  getCurrentWorkspaceNotes: () => Array<INote>;
  findContentById: (noteId: string) => string;
  getNoteFactory: () => Factory;
  disposeCurrentWorkspaceNotes: () => void;
}

class NotesServices implements INotesServices {
  notes: Array<INote>;
  factory: Factory;

  constructor(factory: Factory) {
    this.notes = [];
    this.factory = factory;
  }

  getNoteFactory(): Factory {
    return this.factory;
  }

  registerNote(note: INote) {
    this.notes.push(note);
  }

  getCurrentWorkspaceNotes(): Array<INote> {
    return this.notes;
  }

  findContentById(noteId: string) {
    const note = this.notes.find((note) => note.id === noteId);
    return note?.content as string;
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

  disposeCurrentWorkspaceNotes() {
    this.notes = [];
  }
}

const notesService = new NotesServices(Quill);

export default notesService;

declare namespace WorkspacesSelectProps {
  export interface Workspaces {
    workspaces: Array<Workspace>;
  }

  export interface Workspace {
    id: string;
    name: string;
    notes: Array<Note>;
  }

  export interface Note {
    id: string;
    content: string;
  }

  export interface Option {
    name: string;
  }
}

export default WorkspacesSelectProps;

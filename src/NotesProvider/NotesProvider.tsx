import Quill from 'quill';
import { workspaces as workspacesData } from '../assets/workspaces.json';
import { createContext, useState } from 'react';

export type Factory = typeof Quill;

export interface Workspace {
  id: string;
  name: string;
  notes: Array<Note>;
}

export type NoteInstance = {
  instance: Quill | null;
};

export type Note = {
  id: string;
  color: string;
  content?: Quill['getContents'] | string;
  dataX?: string;
  dataY?: string;
};

export interface WorkspacesProviderContextValue {
  workspaces: Array<Workspace>;
  activeWorkspaceId: string | null;
  setWorkspaces: React.Dispatch<React.SetStateAction<Array<Workspace>>>;
  setActiveWorkspaceId: React.Dispatch<React.SetStateAction<string>>;
}

export const WorkspacesContext = createContext<WorkspacesProviderContextValue>({
  workspaces: workspacesData,
  activeWorkspaceId: null,
  setWorkspaces: () => {},
  setActiveWorkspaceId: () => {},
});

export interface NotesProviderProps {
  children: React.ReactNode;
}

export function NotesProvider({ children }: NotesProviderProps) {
  // FIX: This is hardcoded, this info should  come from localStorage or fetching data
  const selectedWorkspaceId = '6dc0e94e-9938-484b-9e22-e112e328ce7b';
  const [workspaces, setWorkspaces] =
    useState<Array<Workspace>>(workspacesData);
  const [activeWorkspaceId, setActiveWorkspaceId] =
    useState(selectedWorkspaceId);
  const contextValue: WorkspacesProviderContextValue = {
    workspaces,
    activeWorkspaceId,
    setWorkspaces,
    setActiveWorkspaceId,
  };

  return (
    <WorkspacesContext.Provider value={contextValue}>
      {children}
    </WorkspacesContext.Provider>
  );
}

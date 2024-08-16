import Quill from 'quill';
import { createContext, useState } from 'react';

export type Factory = typeof Quill;

export type Note = {
  noteFactory: Factory;
  color: string;
};

export interface NoteProviderContextValue {
  notes: Array<Note>;
  setNotes: React.Dispatch<React.SetStateAction<Array<Note>>>;
}

export const NotesContext = createContext<NoteProviderContextValue>({
  notes: [],
  setNotes: () => {},
});

export interface NotesProviderProps {
  children: React.ReactNode;
}

export function useNoteFactory(): Factory {
  return Quill;
}
export function NotesProvider({ children }: NotesProviderProps) {
  const [notes, setNotes] = useState<Array<Note>>([]);
  const contextValue: NoteProviderContextValue = {
    notes,
    setNotes,
  };

  return (
    <NotesContext.Provider value={contextValue}>
      {children}
    </NotesContext.Provider>
  );
}

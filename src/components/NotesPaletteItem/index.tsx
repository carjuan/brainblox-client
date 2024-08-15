import './NotesPaletteItem.scss';

interface NotesPaletteItemProps {
  variant: 'ocean' | 'teal' | 'mint' | 'sand' | 'golden';
}
export default function NotesPaletteItem({ variant }: NotesPaletteItemProps) {
  return <button className={`palette-item--${variant}`}></button>;
}

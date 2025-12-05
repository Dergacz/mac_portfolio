export type NavLinkType = 'finder' | 'contact' | 'resume';

export interface NavLink {
  id: number;
  name: string;
  type: NavLinkType;
}

export interface NavIcon {
  id: number;
  img: string;
}

export type DockAppId =
  | 'finder'
  | 'safari'
  | 'photos'
  | 'contact'
  | 'terminal'
  | 'trash';

export interface DockApp {
  id: DockAppId;
  name: string;
  icon: string;
  canOpen: boolean;
}

export interface BlogPost {
  id: number;
  date: string;
  title: string;
  image: string;
  link: string;
}

export interface TechStack {
  category: string;
  items: string[];
}

export interface Social {
  id: number;
  text: string;
  icon: string;
  bg: string;
  link: string;
}

export interface PhotosLink {
  id: number;
  icon: string;
  title: string;
}

export interface GalleryItem {
  id: number;
  img: string;
}

export type FileType = 'txt' | 'url' | 'img' | 'fig' | 'pdf';

export type ItemKind = 'file' | 'folder';

export type LocationType = 'work' | 'about' | 'resume' | 'trash';

export interface FileItem {
  id: number;
  name: string;
  icon: string;
  kind: 'file';
  fileType: FileType;
  position?: string;
  description?: string[];
  href?: string;
  imageUrl?: string;
  subtitle?: string;
  image?: string;
}

export interface FolderItem {
  id: number;
  name: string;
  icon: string;
  kind: 'folder';
  type?: LocationType;
  position?: string;
  windowPosition?: string;
  children: (FileItem | FolderItem)[];
}

export type LocationItem = FileItem | FolderItem;

export interface Location {
  id: number;
  type: LocationType;
  name: string;
  icon: string;
  kind: 'folder';
  children: LocationItem[];
}

export interface Locations {
  work: Location;
  about: Location;
  resume: Location;
  trash: Location;
}

export type WindowKey =
  | 'finder'
  | 'contact'
  | 'resume'
  | 'safari'
  | 'photos'
  | 'terminal'
  | 'txtfile'
  | 'imgfile';

export interface WindowState {
  isOpen: boolean;
  zIndex: number;
  data: unknown;
}

export type WindowConfig = Record<WindowKey, WindowState>;

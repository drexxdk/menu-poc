
export interface ChapterMenu {
    chapters: Chapter[];
}

export interface CombinedMenu {
    items: NavigationMenuItem[];
}

interface MenuItemBase {
    id: string;
    heading: string;
    type: NavigationLinkItemType;
  }
  
  type NavigationLinkItemType =
    | 'chapter'
    | 'course'
    | 'activity'
    | 'page'
    | 'page-panel'
    | 'page-panel-standalone'
    | 'text-grid'
    | 'question-group'
    | 'section-group'
    | 'grid-group';

  
  export type NavigationMenuItem =
  | Chapter
  | Page
  | PagePanel
  | QuestionGroup
  | SectionGroup
  | GridGroup;

  interface Chapter extends MenuItemBase {
    type: 'chapter';
    path: string;
    items: ChapterItems[];
    index: number;
  }

  type ChapterItems = Page | SectionGroup;

  interface Page extends MenuItemBase {
    type: 'page';
    path: string;
    items: PageItems[];
  }

  type PageItems = PagePanel | QuestionGroup;
  
  export interface PagePanel extends MenuItemBase {
    type: 'page-panel';
    path: string;
  }
  
  export interface QuestionGroup extends MenuItemBase {
    type: 'question-group';
    items: PagePanel[];
  }
  
  interface SectionGroup extends MenuItemBase {
    type: 'section-group';
    items: SectionGroupItems[];
  }

  type SectionGroupItems = Page | PagePanel;
  
  interface GridGroup extends MenuItemBase {
    type: 'grid-group';
    items: TextGrid[];
  }
  
  interface TextGrid extends MenuItemBase {
    type: 'text-grid';
    path: string;
    items: Page[] | PagePanel[];
  }
  
interface MenuBase {
  type: "course" | "activity";
  heading: string;
  path: string;
  mode: MenuMode;
}
export type MenuMode = "default" | "edit";

export interface CourseMenuModel extends MenuBase {
  type: "course";
  chapters: ChapterModel[];
}

export interface ChapterModel extends MenuItemBase {
  type: "chapter";
  path: string;
  items: MenuItemModel[];
  index: number;
}

export interface ActivityMenuModel extends MenuBase {
  type: "activity";
  items: MenuItemModel[];
}
export type MenuItemModel =
  | PageModel
  | AssignmentModel
  | SectionGroupModel
  | GridGroupModel
  | AssignmentGroupModel;

interface MenuItemBase {
  id: string;
  heading: string;
  isEnabled?: boolean;
}

export interface PageModel extends MenuItemBase {
  type: "page";
  path: string;
  items: PageItemModel[];
}
export type PageItemModel = AssignmentModel | AssignmentGroupModel;

export interface AssignmentModel extends MenuItemBase {
  type: "assignment";
  path: string;
}

export interface AssignmentGroupModel extends MenuItemBase {
  type: "assignment-group";
  items: AssignmentModel[];
}

export interface SectionGroupModel extends MenuItemBase {
  type: "section-group";
  items: SectionGroupItemModel[];
}
export type SectionGroupItemModel =
  | PageModel
  | AssignmentModel
  | AssignmentGroupModel
  | GridGroupModel;

export interface GridGroupModel extends MenuItemBase {
  type: "grid-group";
  items: GridGroupTrackModel[];
  path: string;
}

export interface GridGroupTrackModel extends MenuItemBase {
  type: "grid-group-track";
  items: AssignmentModel[];
}

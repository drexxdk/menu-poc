import { ChapterModel, PageItemModel } from "../menu.interfaces";

const handlePageModel = ({
  pageItem,
  isEnabled,
}: {
  pageItem: PageItemModel;
  isEnabled: boolean;
}) => {
  pageItem.isEnabled = isEnabled;
  switch (pageItem.type) {
    case "assignment-group":
      pageItem.items.forEach((assignment) => {
        assignment.isEnabled = isEnabled;
      });
      break;
    case "assignment":
      break;
    default:
      const _exhaustiveCheck: never = pageItem;
      break;
  }
};

export const setIsEnabled = ({
  chapter,
  isEnabled,
}: {
  chapter: ChapterModel;
  isEnabled: boolean;
}) => {
  const copy = { ...chapter };
  copy.isEnabled = isEnabled;
  copy.items.forEach((menuItem) => {
    menuItem.isEnabled = isEnabled;
    switch (menuItem.type) {
      case "grid-group":
        menuItem.items.forEach((gridGroupTrack) => {
          gridGroupTrack.isEnabled = isEnabled;
          gridGroupTrack.items.forEach((assignment) => {
            assignment.isEnabled = isEnabled;
          });
        });
        break;
      case "page":
        menuItem.items.forEach((pageItem) => {
          handlePageModel({ pageItem, isEnabled });
        });
        break;
      case "assignment":
        break;
      case "assignment-group":
        menuItem.items.forEach((assignment) => {
          assignment.isEnabled = isEnabled;
        });
        break;
      case "section-group":
        menuItem.items.forEach((sectionGroupItem) => {
          sectionGroupItem.isEnabled = isEnabled;
          switch (sectionGroupItem.type) {
            case "page":
              sectionGroupItem.items.forEach((pageItem) => {
                handlePageModel({ pageItem, isEnabled });
              });
              break;
            case "assignment":
              break;
            case "assignment-group":
              sectionGroupItem.items.forEach((assignment) => {
                assignment.isEnabled = isEnabled;
              });
              break;
            case "grid-group":
              sectionGroupItem.items.forEach((gridGroupTrack) => {
                gridGroupTrack.isEnabled = isEnabled;
                gridGroupTrack.items.forEach((assignment) => {
                  assignment.isEnabled = isEnabled;
                });
              });
              break;
            default:
              const _exhaustiveCheck: never = sectionGroupItem;
              break;
          }
        });
        break;
      default:
        const _exhaustiveCheck: never = menuItem;
        break;
    }
  });
  return copy;
};

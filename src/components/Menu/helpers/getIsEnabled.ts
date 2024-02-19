import { MenuItemModel, PageItemModel } from "../menu.interfaces";

const handlePageModel = ({ pageItem }: { pageItem: PageItemModel }) => {
  let count = 0;
  pageItem.isEnabled && count++;
  switch (pageItem.type) {
    case "assignment-group":
      pageItem.items.forEach((assignment) => {
        assignment.isEnabled && count++;
      });
      break;
    case "assignment":
      break;
    default:
      const _exhaustiveCheck: never = pageItem;
      break;
  }
  return count;
};
export const getIsEnabled = ({ menuItems }: { menuItems: MenuItemModel[] }) => {
  let count = 0;
  menuItems.forEach((menuItem) => {
    menuItem.isEnabled && count++;
    switch (menuItem.type) {
      case "grid-group":
        menuItem.items.forEach((gridGroupTrack) => {
          gridGroupTrack.isEnabled && count++;
          gridGroupTrack.items.forEach((assignment) => {
            assignment.isEnabled && count++;
          });
        });
        break;
      case "page":
        menuItem.items.forEach((pageItem) => {
          count = count + handlePageModel({ pageItem });
        });
        break;
      case "assignment":
        break;
      case "assignment-group":
        menuItem.items.forEach((assignment) => {
          assignment.isEnabled && count++;
        });
        break;
      case "section-group":
        menuItem.items.forEach((sectionGroupItem) => {
          sectionGroupItem.isEnabled && count++;
          switch (sectionGroupItem.type) {
            case "page":
              sectionGroupItem.items.forEach((pageItem) => {
                count = count + handlePageModel({ pageItem });
              });
              break;
            case "assignment":
              break;
            case "assignment-group":
              sectionGroupItem.items.forEach((assignment) => {
                assignment.isEnabled && count++;
              });
              break;
            case "grid-group":
              sectionGroupItem.items.forEach((gridGroupTrack) => {
                gridGroupTrack.isEnabled && count++;
                gridGroupTrack.items.forEach((assignment) => {
                  assignment.isEnabled && count++;
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
  return count;
};

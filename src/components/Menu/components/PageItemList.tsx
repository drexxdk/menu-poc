import { MenuMode, PageItemModel } from "../menu.interfaces";
import Assignment from "./Assignment";
import AssignmentGroup from "./AssignmentGroup";

const PageItemsList = ({
  pageItems,
  mode,
  onChange,
}: {
  pageItems: PageItemModel[];
  mode: MenuMode;
  onChange?: ({
    pageItems,
    isEnabled,
  }: {
    pageItems: PageItemModel[];
    isEnabled: boolean;
  }) => void;
}) => {
  return pageItems.length ? (
    <ul>
      {pageItems.map((pageItem, i) => {
        switch (pageItem.type) {
          case "assignment":
            return (
              <li key={i}>
                <Assignment
                  assignment={pageItem}
                  mode={mode}
                  onChange={({ assignment, isEnabled }) => {
                    onChange?.({
                      pageItems: [
                        ...pageItems.map((u) =>
                          u.id !== assignment.id ? u : assignment
                        ),
                      ],
                      isEnabled,
                    });
                  }}
                />
              </li>
            );
          case "assignment-group":
            return (
              <li key={i}>
                <AssignmentGroup
                  assignmentGroup={pageItem}
                  isIndented={true}
                  mode={mode}
                  onChange={({ assignmentGroup, isEnabled }) => {
                    onChange?.({
                      pageItems: [
                        ...pageItems.map((u) =>
                          u.id !== assignmentGroup.id ? u : assignmentGroup
                        ),
                      ],
                      isEnabled,
                    });
                  }}
                />
              </li>
            );
          default:
            const _exhaustiveCheck: never = pageItem;
            return _exhaustiveCheck;
        }
      })}
    </ul>
  ) : null;
};
export default PageItemsList;

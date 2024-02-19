import { MenuItemModel, MenuMode } from "@/components/Menu/menu.interfaces";
import Assignment from "./Assignment";
import AssignmentGroup from "./AssignmentGroup";
import GridGroup from "./GridGroup";
import Page from "./Page";
import SectionGroup from "./SectionGroup";

const MenuItem = ({
  item,
  onChange,
  mode,
}: {
  item: MenuItemModel;
  onChange?: ({
    item,
    isEnabled,
  }: {
    item: MenuItemModel;
    isEnabled: boolean;
  }) => void;
  mode: MenuMode;
}) => {
  switch (item.type) {
    case "section-group":
      return (
        <SectionGroup
          sectionGroup={item}
          mode={mode}
          onChange={({ sectionGroup, isEnabled }) => {
            onChange?.({ item: { ...sectionGroup }, isEnabled });
          }}
        />
      );
    case "page":
      return (
        <Page
          page={item}
          mode={mode}
          onChange={({ page, isEnabled }) => {
            onChange?.({ item: { ...page }, isEnabled });
          }}
        />
      );
    case "assignment":
      return (
        <Assignment
          assignment={item}
          mode={mode}
          onChange={({ assignment, isEnabled }) => {
            onChange?.({ item: { ...assignment }, isEnabled });
          }}
        />
      );
    case "assignment-group":
      return (
        <AssignmentGroup
          assignmentGroup={item}
          isIndented={false}
          mode={mode}
          onChange={({ assignmentGroup, isEnabled }) => {
            onChange?.({ item: { ...assignmentGroup }, isEnabled });
          }}
        />
      );
    case "grid-group":
      return (
        <GridGroup
          gridGroup={item}
          mode={mode}
          onChange={({ gridGroup, isEnabled }) => {
            onChange?.({ item: { ...gridGroup }, isEnabled });
          }}
        />
      );
    default:
      const _exhaustiveCheck: never = item;
      return <div className="bg-red-500">Not implemented</div>;
  }
};
export default MenuItem;

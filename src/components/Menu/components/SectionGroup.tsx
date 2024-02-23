import { MenuMode, SectionGroupModel } from "@/components/Menu/menu.interfaces";
import classNames from "classnames";
import MenuItemRow from "./MenuItemRow";
import SectionGroupItemList from "./SectionGroupItemList";

const SectionGroup = ({
  sectionGroup,
  onChange,
  mode,
}: {
  sectionGroup: SectionGroupModel;
  onChange?: ({
    sectionGroup,
    isEnabled,
  }: {
    sectionGroup: SectionGroupModel;
    isEnabled: boolean;
  }) => void;
  mode: MenuMode;
}) => {
  return (
    <>
      <MenuItemRow
        mode={mode}
        isEnabled={!!sectionGroup.isEnabled}
        onChange={(isEnabled) => {
          onChange?.({
            sectionGroup: { ...sectionGroup, isEnabled },
            isEnabled,
          });
        }}
      >
        <h2
          className={classNames(
            "text-black flex gap-2 items-center p-2 font-bold",
            sectionGroup.isEnabled ? "bg-orange-500" : "bg-gray-300"
          )}
        >
          [section-group] {sectionGroup.heading}
        </h2>
      </MenuItemRow>
      <SectionGroupItemList
        sectionGroupItems={sectionGroup.items}
        mode={mode}
        onChange={({ sectionGroupItems, isEnabled }) => {
          onChange?.({
            sectionGroup: {
              ...sectionGroup,
              items: sectionGroupItems,
            },
            isEnabled,
          });
        }}
      />
    </>
  );
};
export default SectionGroup;

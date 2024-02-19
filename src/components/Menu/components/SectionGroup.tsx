import { MenuMode, SectionGroupModel } from "@/components/Menu/menu.interfaces";
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
        <h2 className="bg-orange-500 text-black p-2 font-bold">
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

import { MenuMode, SectionGroupItemModel } from "../menu.interfaces";
import SectionGroupItem from "./SectionGroupItem";

const SectionGroupItemList = ({
  sectionGroupItems,
  mode,
  onChange,
}: {
  sectionGroupItems: SectionGroupItemModel[];
  mode: MenuMode;
  onChange?: ({
    sectionGroupItems,
    isEnabled,
  }: {
    sectionGroupItems: SectionGroupItemModel[];
    isEnabled: boolean;
  }) => void;
}) => {
  return sectionGroupItems.length ? (
    <ul>
      {sectionGroupItems.map((sectionItem, i) => {
        return (
          <li key={i}>
            <SectionGroupItem
              item={sectionItem}
              mode={mode}
              onChange={({ item, isEnabled }) => {
                onChange?.({
                  sectionGroupItems: [
                    ...sectionGroupItems.map((u) =>
                      u.id !== item.id ? u : item
                    ),
                  ],
                  isEnabled,
                });
              }}
            />
          </li>
        );
      })}
    </ul>
  ) : null;
};
export default SectionGroupItemList;

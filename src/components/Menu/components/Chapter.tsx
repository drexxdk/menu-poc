import classNames from "classnames";
import { getIsEnabled } from "../helpers/getIsEnabled";
import { setIsEnabled } from "../helpers/setIsEnabled";
import { ChapterModel, MenuMode } from "../menu.interfaces";
import MenuItemRow from "./MenuItemRow";
import MenuItems from "./MenuItems";

const Chapter = ({
  chapter,
  onChange,
  mode,
}: {
  chapter: ChapterModel;
  onChange?: ({
    chapter,
    isEnabled,
  }: {
    chapter: ChapterModel;
    isEnabled: boolean;
  }) => void;
  mode: MenuMode;
}) => {
  return (
    <div className="grid gap-2">
      <MenuItemRow
        mode={mode}
        isEnabled={!!chapter.isEnabled}
        onChange={(isEnabled) => {
          onChange?.({
            chapter: setIsEnabled({ chapter, isEnabled }),
            isEnabled,
          });
        }}
      >
        <h2
          className={classNames(
            "text-black p-2",
            chapter.isEnabled ? "bg-yellow-500" : "bg-gray-300"
          )}
        >
          [chapter] {chapter.heading}
        </h2>
      </MenuItemRow>
      <MenuItems
        items={chapter.items}
        mode={mode}
        onChange={({ items, isEnabled }) => {
          const count = getIsEnabled({ menuItems: items });
          onChange?.({
            chapter: {
              ...chapter,
              items,
              isEnabled: count > 0,
            },
            isEnabled,
          });
        }}
      />
    </div>
  );
};
export default Chapter;

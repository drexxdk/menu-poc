import classNames from "classnames";
import { MenuItemModel, MenuMode } from "../menu.interfaces";
import MenuItem from "./MenuItem";

const MenuItems = ({
  items,
  onChange,
  mode,
}: {
  items: MenuItemModel[];
  onChange?: ({
    items,
    isEnabled,
  }: {
    items: MenuItemModel[];
    isEnabled: boolean;
  }) => void;
  mode: MenuMode;
}) => {
  return items.length ? (
    <ul>
      {items.map((item, i) => {
        return (
          <li
            key={i}
            className={classNames({
              "[&:not(:first-child)]:mt-2": item.type === "section-group",
            })}
          >
            <MenuItem
              item={item}
              mode={mode}
              onChange={({ item, isEnabled }) => {
                onChange?.({
                  items: [...items.map((u) => (u.id !== item.id ? u : item))],
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
export default MenuItems;

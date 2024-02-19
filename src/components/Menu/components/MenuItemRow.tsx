import { ReactNode } from "react";
import { MenuMode } from "../menu.interfaces";
import Switch from "./Switch";

type BaseModel = {
  mode: MenuMode;
  children: ReactNode;
};

interface DefaultModel extends BaseModel {
  mode: "default";
}

interface EditModel extends BaseModel {
  mode: "edit";
  isEnabled: boolean;
  onChange: (isEnabled: boolean) => void;
}

const MenuItemRow = (model: DefaultModel | EditModel) => {
  return (
    <div className="flex gap-2 bg-violet-800 p-2">
      {model.mode === "edit" ? (
        <div className="shrink-0 flex items-center">
          <Switch isEnabled={model.isEnabled} onChange={model.onChange} />
        </div>
      ) : null}
      <div className="grow">{model.children}</div>
    </div>
  );
};
export default MenuItemRow;

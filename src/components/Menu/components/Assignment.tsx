import { AssignmentModel, MenuMode } from "@/components/Menu/menu.interfaces";
import classNames from "classnames";
import MenuItemRow from "./MenuItemRow";

const Assignment = ({
  assignment,
  onChange,
  mode,
}: {
  assignment: AssignmentModel;
  onChange?: ({
    assignment,
    isEnabled,
  }: {
    assignment: AssignmentModel;
    isEnabled: boolean;
  }) => void;
  mode: MenuMode;
}) => {
  return (
    <MenuItemRow
      mode={mode}
      isEnabled={!!assignment.isEnabled}
      onChange={(isEnabled) => {
        onChange?.({ assignment: { ...assignment, isEnabled }, isEnabled });
      }}
    >
      <div className="border-white ml-4 border-l-2">
        <h2
          className={classNames(
            "text-black p-2",
            assignment.isEnabled ? "bg-green-500" : "bg-gray-300"
          )}
        >
          [assignment] {assignment.heading}
        </h2>
      </div>
    </MenuItemRow>
  );
};
export default Assignment;

import { AssignmentModel, MenuMode } from "@/components/Menu/menu.interfaces";
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
        <h2 className="bg-green-500 text-black p-2">
          [assignment] {assignment.heading}
        </h2>
      </div>
    </MenuItemRow>
  );
};
export default Assignment;

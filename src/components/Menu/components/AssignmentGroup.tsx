import AssignmentGroupIcon from "@/components/Icon/AssignmentGroupIcon";
import ChevronDownIcon from "@/components/Icon/ChevronDownIcon";
import Icon from "@/components/Icon/Icon";
import {
  AssignmentGroupModel,
  MenuMode,
} from "@/components/Menu/menu.interfaces";
import classNames from "classnames";
import { useState } from "react";
import AssignmentList from "./AssignmentList";
import MenuItemRow from "./MenuItemRow";

const AssignmentGroup = ({
  assignmentGroup,
  isIndented,
  onChange,
  mode,
}: {
  assignmentGroup: AssignmentGroupModel;
  isIndented: boolean;
  onChange?: ({
    assignmentGroup,
    isEnabled,
  }: {
    assignmentGroup: AssignmentGroupModel;
    isEnabled: boolean;
  }) => void;
  mode: MenuMode;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <MenuItemRow
        mode={mode}
        isEnabled={!!assignmentGroup.isEnabled}
        onChange={(isEnabled) => {
          onChange?.({
            assignmentGroup: {
              ...assignmentGroup,
              isEnabled,
              items: [
                ...assignmentGroup.items.map((assignment) => {
                  assignment.isEnabled = isEnabled;
                  return assignment;
                }),
              ],
            },
            isEnabled,
          });
        }}
      >
        <div
          className={classNames({ "ml-4 border-white border-l-2": isIndented })}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-red-500 text-black w-full text-left flex gap-2 items-center p-2 hover:bg-red-300"
          >
            <Icon>
              <AssignmentGroupIcon />
            </Icon>
            <span className="grow">
              [assignment-group] {assignmentGroup.heading}
            </span>
            <Icon className={classNames({ "rotate-180": isOpen })}>
              <ChevronDownIcon />
            </Icon>
          </button>
        </div>
      </MenuItemRow>
      {isOpen ? (
        <AssignmentList
          assignments={assignmentGroup.items}
          mode={mode}
          onChange={({ assignments, isEnabled }) => {
            onChange?.({
              assignmentGroup: {
                ...assignmentGroup,
                isEnabled: assignments.some(
                  (assignment) => assignment.isEnabled === true
                ),
                items: assignments,
              },
              isEnabled,
            });
          }}
        />
      ) : null}
    </>
  );
};
export default AssignmentGroup;

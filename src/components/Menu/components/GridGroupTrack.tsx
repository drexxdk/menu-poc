import ChevronDownIcon from "@/components/Icon/ChevronDownIcon";
import GridGroupTrackIcon from "@/components/Icon/GridGroupTrackIcon";
import Icon from "@/components/Icon/Icon";
import {
  GridGroupTrackModel,
  MenuMode,
} from "@/components/Menu/menu.interfaces";
import classNames from "classnames";
import { useState } from "react";
import AssignmentList from "./AssignmentList";
import MenuItemRow from "./MenuItemRow";

const GridGroupTrack = ({
  gridGroupTrack,
  onChange,
  mode,
}: {
  gridGroupTrack: GridGroupTrackModel;
  onChange?: ({
    gridGroupTrack,
    isEnabled,
  }: {
    gridGroupTrack: GridGroupTrackModel;
    isEnabled: boolean;
  }) => void;
  mode: MenuMode;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <MenuItemRow
        mode={mode}
        isEnabled={!!gridGroupTrack.isEnabled}
        onChange={(isEnabled) => {
          onChange?.({
            gridGroupTrack: {
              ...gridGroupTrack,
              isEnabled,
              items: [
                ...gridGroupTrack.items.map((assignment) => {
                  assignment.isEnabled = isEnabled;
                  return assignment;
                }),
              ],
            },
            isEnabled,
          });
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={classNames(
            "text-black w-full text-left flex gap-2 items-center p-2",
            gridGroupTrack.isEnabled
              ? "bg-pink-500 hover:bg-pink-300"
              : "bg-gray-300 hover:bg-gray-100"
          )}
        >
          <Icon>
            <GridGroupTrackIcon />
          </Icon>
          <span className="grow">
            [grid-group-track] {gridGroupTrack.heading}
          </span>
          <Icon className={classNames({ "rotate-180": isOpen })}>
            <ChevronDownIcon />
          </Icon>
        </button>
      </MenuItemRow>
      {isOpen ? (
        <AssignmentList
          assignments={gridGroupTrack.items}
          mode={mode}
          onChange={({ assignments, isEnabled }) => {
            onChange?.({
              gridGroupTrack: {
                ...gridGroupTrack,
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
export default GridGroupTrack;

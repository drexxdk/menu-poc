import GridGroupIcon from "@/components/Icon/GridGroupIcon";
import Icon from "@/components/Icon/Icon";
import { GridGroupModel, MenuMode } from "@/components/Menu/menu.interfaces";
import classNames from "classnames";
import GridGroupTrackList from "./GridGroupTrackList";
import MenuItemRow from "./MenuItemRow";

const GridGroup = ({
  gridGroup,
  onChange,
  mode,
}: {
  gridGroup: GridGroupModel;
  onChange?: ({
    gridGroup,
    isEnabled,
  }: {
    gridGroup: GridGroupModel;
    isEnabled: boolean;
  }) => void;
  mode: MenuMode;
}) => {
  return (
    <>
      <MenuItemRow
        mode={mode}
        isEnabled={!!gridGroup.isEnabled}
        onChange={(isEnabled) => {
          onChange?.({
            gridGroup: {
              ...gridGroup,
              isEnabled,
              items: [
                ...gridGroup.items.map((gridGroupTrack) => {
                  gridGroupTrack.isEnabled = isEnabled;
                  gridGroupTrack.items.forEach((assignment) => {
                    assignment.isEnabled = isEnabled;
                  });
                  return gridGroupTrack;
                }),
              ],
            },
            isEnabled,
          });
        }}
      >
        <h2
          className={classNames(
            "text-black flex gap-2 items-center p-2",
            gridGroup.isEnabled ? "bg-amber-500" : "bg-gray-300"
          )}
        >
          <Icon>
            <GridGroupIcon />
          </Icon>
          <span className="grow">[grid-group] {gridGroup.heading}</span>
        </h2>
      </MenuItemRow>
      <GridGroupTrackList
        gridGroupTracks={gridGroup.items}
        mode={mode}
        onChange={({ gridGroupTracks, isEnabled }) => {
          onChange?.({
            gridGroup: {
              ...gridGroup,
              isEnabled: gridGroupTracks.some(
                (gridGroupTrack) => gridGroupTrack.isEnabled === true
              ),
              items: gridGroupTracks,
            },
            isEnabled,
          });
        }}
      />
    </>
  );
};
export default GridGroup;

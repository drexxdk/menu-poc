import { GridGroupTrackModel, MenuMode } from "../menu.interfaces";
import GridGroupTrack from "./GridGroupTrack";

const GridGroupTrackList = ({
  gridGroupTracks,
  mode,
  onChange,
}: {
  gridGroupTracks: GridGroupTrackModel[];
  mode: MenuMode;
  onChange?: ({
    gridGroupTracks,
    isEnabled,
  }: {
    gridGroupTracks: GridGroupTrackModel[];
    isEnabled: boolean;
  }) => void;
}) => {
  return gridGroupTracks.length ? (
    <ul>
      {gridGroupTracks.map((gridGroupTrack, i) => {
        return (
          <li key={i}>
            <GridGroupTrack
              gridGroupTrack={gridGroupTrack}
              mode={mode}
              onChange={({ gridGroupTrack, isEnabled }) => {
                onChange?.({
                  gridGroupTracks: [
                    ...gridGroupTracks.map((u) =>
                      u.id !== gridGroupTrack.id ? u : gridGroupTrack
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
export default GridGroupTrackList;

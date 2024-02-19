import { ChapterModel, MenuMode } from "../menu.interfaces";
import Chapter from "./Chapter";

const ChapterList = ({
  chapters,
  mode,
  onChange,
}: {
  chapters: ChapterModel[];
  mode: MenuMode;
  onChange?: ({
    chapters,
    isEnabled,
  }: {
    chapters: ChapterModel[];
    isEnabled: boolean;
  }) => void;
}) => {
  return chapters.length ? (
    <ul>
      {chapters.map((chapter, i) => {
        return (
          <li className="[&:not(:first-child)]:mt-6" key={i}>
            <Chapter
              chapter={chapter}
              mode={mode}
              onChange={({ chapter, isEnabled }) => {
                onChange?.({
                  chapters: [
                    ...chapters.map((u) => (u.id !== chapter.id ? u : chapter)),
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
export default ChapterList;

import { AssignmentModel, MenuMode } from "../menu.interfaces";
import Assignment from "./Assignment";

const AssignmentList = ({
  assignments,
  mode,
  onChange,
}: {
  assignments: AssignmentModel[];
  mode: MenuMode;
  onChange?: ({
    assignments,
    isEnabled,
  }: {
    assignments: AssignmentModel[];
    isEnabled: boolean;
  }) => void;
}) => {
  return assignments.length ? (
    <ul>
      {assignments.map((assignmentItem, i) => {
        return (
          <li key={i}>
            <Assignment
              assignment={assignmentItem}
              mode={mode}
              onChange={({ assignment, isEnabled }) => {
                onChange?.({
                  assignments: [
                    ...assignments.map((u) =>
                      u.id !== assignment.id ? u : assignment
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
export default AssignmentList;

import { generateId } from "@/utils/generateId";
import { CourseMenuModel } from "../components/Menu/menu.interfaces";

export const courseMenuMock: CourseMenuModel = {
  type: "course",
  heading: "course 1",
  path: "/course/1",
  mode: "edit",
  chapters: [
    {
      type: "chapter",
      id: generateId(),
      heading: "chapter 1",
      index: 1,
      isEnabled: true,
      path: "/chapter/1",
      items: [
        {
          type: "grid-group",
          id: generateId(),
          path: "/grid/1",
          heading: "grid",
          isEnabled: true,
          items: [
            {
              type: "grid-group-track",
              id: generateId(),
              heading: "grid track group 1",
              isEnabled: true,
              items: [
                {
                  type: "assignment",
                  id: generateId(),
                  heading: "grid track assignment 1",
                  path: "/",
                  isEnabled: true,
                },
                {
                  type: "assignment",
                  id: generateId(),
                  heading: "grid track assignment 1",
                  path: "/",
                  isEnabled: true,
                },
              ],
            },
            {
              type: "grid-group-track",
              id: generateId(),
              heading: "grid track group 2",
              isEnabled: true,
              items: [
                {
                  type: "assignment",
                  id: generateId(),
                  heading: "grid track assignment 3",
                  path: "/",
                  isEnabled: true,
                },
                {
                  type: "assignment",
                  id: generateId(),
                  heading: "grid track assignment 4",
                  path: "/",
                  isEnabled: true,
                },
              ],
            },
          ],
        },
        {
          type: "page",
          id: generateId(),
          heading: "page2",
          path: "page/5",
          items: [],
          isEnabled: true,
        },
        {
          type: "section-group",
          id: generateId(),
          heading: "section 1",
          isEnabled: true,
          items: [
            {
              type: "page",
              id: generateId(),
              heading: "page 1",
              path: "/page/4",
              isEnabled: true,
              items: [
                {
                  type: "assignment",
                  id: generateId(),
                  heading: "page assignment 1",
                  path: "/page/4",
                  isEnabled: true,
                },
                {
                  type: "assignment",
                  id: generateId(),
                  heading: "page assignment 2",
                  path: "/page/4/assignment/2",
                  isEnabled: true,
                },
                {
                  type: "assignment-group",
                  heading: "assignment group 1",
                  id: generateId(),
                  isEnabled: true,
                  items: [
                    {
                      type: "assignment",
                      id: generateId(),
                      heading: "page assignment 3",
                      path: "",
                      isEnabled: true,
                    },
                    {
                      type: "assignment",
                      id: generateId(),
                      heading: "page assignment 4",
                      path: "",
                      isEnabled: true,
                    },
                  ],
                },
              ],
            },
            {
              type: "assignment",
              id: generateId(),
              heading: "page assignment 5",
              path: "page/7",
              isEnabled: true,
            },
            {
              type: "assignment",
              id: generateId(),
              heading: "page assignment 6",
              path: "page/7/assignment/2",
              isEnabled: true,
            },
            {
              type: "page",
              id: generateId(),
              heading: "page2",
              path: "page/5",
              items: [],
              isEnabled: true,
            },
            {
              type: "assignment-group",
              heading: "assignment group 2",
              id: generateId(),
              isEnabled: true,
              items: [
                {
                  type: "assignment",
                  id: generateId(),
                  heading: "page assignment 7",
                  path: "",
                  isEnabled: true,
                },
                {
                  type: "assignment",
                  id: generateId(),
                  heading: "page assignment 8",
                  path: "",
                  isEnabled: true,
                },
              ],
            },
          ],
        },
        {
          type: "assignment",
          id: generateId(),
          heading: "page assignment 9",
          path: "page/7/assignment/2",
          isEnabled: true,
        },
        {
          type: "section-group",
          id: generateId(),
          heading: "section 2",
          isEnabled: true,
          items: [
            {
              type: "assignment",
              id: generateId(),
              heading: "section group 2 assignment 1",
              path: "page/7/assignment/2",
              isEnabled: true,
            },
          ],
        },
      ],
    },
    {
      type: "chapter",
      id: generateId(),
      heading: "chapter 2",
      index: 1,
      isEnabled: true,
      path: "/chapter/2",
      items: [
        {
          type: "assignment",
          id: generateId(),
          heading: "assignment 5",
          path: "/",
          isEnabled: true,
        },
      ],
    },
  ],
};

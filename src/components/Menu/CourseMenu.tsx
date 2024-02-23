"use client";

import { useEffect, useState } from "react";
import ChapterList from "./components/ChapterList";
import MenuItemRow from "./components/MenuItemRow";
import { CourseMenuModel } from "./menu.interfaces";

const CourseMenu = ({ menu }: { menu: CourseMenuModel }) => {
  const [item, setItem] = useState<CourseMenuModel>(menu);

  useEffect(() => {
    setItem(menu);
  }, [menu]);

  return (
    <>
      <h1 className="p-2 bg-purple-500 text-black">[course] {menu.heading}</h1>
      <MenuItemRow
        mode={"edit"}
        isEnabled={item.mode === "edit"}
        onChange={(isEnabled) => {
          setItem({ ...item, mode: isEnabled ? "edit" : "default" });
        }}
      >
        <h2 className="text-black p-2 bg-neutral-500">[course] {item.mode}</h2>
      </MenuItemRow>
      <ChapterList
        chapters={item.chapters}
        mode={item.mode}
        onChange={({ chapters, isEnabled }) => {
          setItem({
            ...item,
            chapters: chapters,
          });
        }}
      />
    </>
  );
};
export default CourseMenu;

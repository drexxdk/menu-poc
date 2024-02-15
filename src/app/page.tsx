import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import { chapterMenuMock } from "./mock/chapter-menu.mock";

export default function Home() {
  return (
    <Menu items={chapterMenuMock.chapters[0].items} />
  );
}

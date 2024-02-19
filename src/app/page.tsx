import CourseMenu from "@/components/Menu/CourseMenu";
import { courseMenuMock } from "../mock/course-menu.mock";

export default function Home() {
  return <CourseMenu menu={courseMenuMock} />;
}

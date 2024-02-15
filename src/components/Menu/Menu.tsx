"use client"

import { NavigationMenuItem, Page, PagePanel, QuestionGroup, SectionGroup } from "@/app/interfaces/menu.interfaces";
import styles from './Menu.module.scss';
import { RenderItem } from "./components/RenderItem";

const Menu = ({items}: {items: NavigationMenuItem[]}) => {
    return <div className={styles.menu}>
        {items.map((item, i) => {
            return <RenderItem key={i} item={item} />
        })}
    </div>
}
export default Menu;
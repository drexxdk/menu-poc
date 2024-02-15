"use client"

import { NavigationMenuItem, PagePanel, QuestionGroup } from "@/app/interfaces/menu.interfaces";
import styles from './Menu.module.scss';
import Indent from "../Indent";
import { Disclosure } from "@headlessui/react";

const RenderPagePanel = ({item}: {item: PagePanel}) => {
    return <h2>[page-panel] {item.heading}</h2>
}

const RenderQuestionGroup = ({item}: {item: QuestionGroup}) => {
    return <Disclosure>
    <Disclosure.Button className="py-2">
      Is team pricing available?
    </Disclosure.Button>
    <Disclosure.Panel className="text-gray-500">
      Yes! You can purchase a license that you can share with your entire
      team.
    </Disclosure.Panel>
  </Disclosure>
}

const RenderItem = ({item}: {item: NavigationMenuItem}) => {
    switch(item.type) {
        case "section-group":
            return <section>
                <h2>[section-group] {item.heading}</h2>
                {item.items.map((sectionItem, i) => {
                    return <RenderItem key={i} item={sectionItem} />
                })}
            </section>
        case 'page':
            return <>
                <h2>[page] {item.heading}</h2>
                {item.items ? <Indent>
                    <ul>
                        {item.items.map((panelItem, j) => {
                            switch(panelItem.type) {
                                case 'page-panel':
                                    return <RenderPagePanel key={j} item={panelItem} />
                                case 'question-group':
                                    return <RenderQuestionGroup key={j} item={panelItem} />
                            }
                        })}
                    </ul>
                </Indent>: null}
            </>
        case 'page-panel':
            return <Indent>
                <RenderPagePanel item={item} />
            </Indent>
        default: 
        return <div className="bg-red-500">Not implemented</div>
    }
}

const Menu = ({items}: {items: NavigationMenuItem[]}) => {
    return <div className={styles.menu}>
        {items.map((item, i) => {
            return <RenderItem key={i} item={item} />
        })}
    </div>
}
export default Menu;
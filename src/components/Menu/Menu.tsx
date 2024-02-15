"use client"

import { NavigationMenuItem, Page, PagePanel, QuestionGroup, SectionGroup } from "@/app/interfaces/menu.interfaces";
import styles from './Menu.module.scss';
import Indent from "../Indent";
import { Disclosure } from "@headlessui/react";
import { ReactNode } from "react";
import classNames from 'classnames';

const PanelContent = ({pagePanel}: {pagePanel: PagePanel}) => {
    return <h2 className="border-l-2 border-white pl-2">[page-panel] {pagePanel.heading}</h2>
}

const RenderPanel = ({pagePanel}: {pagePanel: PagePanel}) => {
    return <Indent>
        <PanelContent pagePanel={pagePanel} />
    </Indent>
}

const RenderPagePanel = ({pagePanel}: {pagePanel: PagePanel}) => {
    return <PanelContent pagePanel={pagePanel} />
}

const QuestionGroupContent = ({buttonContent, buttonClassName,panelContent, panelClassName}: {buttonContent: ReactNode, buttonClassName?: string,panelContent: ReactNode, panelClassName?: string}) => {
    return <Disclosure>
    <Disclosure.Button className={classNames('bg-pink-200 text-black w-full text-left', buttonClassName)}>
      {buttonContent}
    </Disclosure.Button>
    <Disclosure.Panel className={panelClassName}>
     {panelContent}
    </Disclosure.Panel>
  </Disclosure>
}

const RenderQuestionGroup = ({questionGroup}: {questionGroup: QuestionGroup}) => {
    return <QuestionGroupContent buttonContent={questionGroup.heading} panelContent={
        questionGroup.items.map((panelItem, i) => {
            return <RenderPagePanel key={i} pagePanel={panelItem} />
        })
    } />
}

const RenderPageQuestionGroup = ({questionGroup}: {questionGroup: QuestionGroup}) => {
    return <QuestionGroupContent buttonClassName="border-white pl-2" buttonContent={questionGroup.heading} panelContent={
        questionGroup.items.map((panelItem, i) => {
            return <RenderPagePanel key={i} pagePanel={panelItem} />
        })
    } />
}

const RenderSectionGroup = ({sectionGroup}: {sectionGroup: SectionGroup}) => {
    return <section>
    <h2 className="bg-green-500 text-black">[section-group] {sectionGroup.heading}</h2>
    {sectionGroup.items.map((sectionItem, i) => {
        return <RenderItem key={i} item={sectionItem} />
    })}
</section>
}

const RenderPage = ({page}: {page: Page}) => {
    return <>
    <h2 className="bg-blue-500 text-white">[page] {page.heading}</h2>
    {page.items ? <Indent>
        <ul>
            {page.items.map((panelItem, j) => {
                switch(panelItem.type) {
                    case 'page-panel':
                        return <RenderPagePanel key={j} pagePanel={panelItem} />
                    case 'question-group':
                        return <RenderPageQuestionGroup key={j} questionGroup={panelItem} />
                }
            })}
        </ul>
    </Indent>: null}
</>
}

const RenderItem = ({item}: {item: NavigationMenuItem}) => {
    switch(item.type) {
        case "section-group":
            return <RenderSectionGroup sectionGroup={item} />
        case 'page':
            return <RenderPage page={item} />
        case 'page-panel':
            return <RenderPanel pagePanel={item} />
            case 'question-group': 
            return <RenderQuestionGroup questionGroup={item} />
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
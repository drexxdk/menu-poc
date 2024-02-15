import { QuestionGroup } from "@/app/interfaces/menu.interfaces"
import { Disclosure } from "@headlessui/react"
import classNames from "classnames"
import { ReactNode } from "react"
import { RenderPagePanel, RenderPanel } from "./RenderPanel"

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

export const RenderQuestionGroup = ({questionGroup}: {questionGroup: QuestionGroup}) => {
    return <QuestionGroupContent buttonContent={questionGroup.heading} panelContent={
        questionGroup.items.map((panelItem, i) => {
            return <RenderPanel key={i} pagePanel={panelItem} />
        })
    } />
}

export const RenderPageQuestionGroup = ({questionGroup}: {questionGroup: QuestionGroup}) => {
    return <QuestionGroupContent buttonClassName="border-white pl-2" buttonContent={questionGroup.heading} panelContent={
        questionGroup.items.map((panelItem, i) => {
            return <RenderPagePanel key={i} pagePanel={panelItem} />
        })
    } />
}
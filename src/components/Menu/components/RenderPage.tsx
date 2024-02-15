import { Page } from "@/app/interfaces/menu.interfaces"
import Indent from "./Indent"
import { RenderPagePanel } from "./RenderPanel"
import { RenderPageQuestionGroup } from "./RenderQuestionGroup"

export const RenderPage = ({page}: {page: Page}) => {
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
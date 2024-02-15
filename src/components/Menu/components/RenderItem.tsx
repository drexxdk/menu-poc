import { NavigationMenuItem } from "@/app/interfaces/menu.interfaces"
import { RenderPanel } from "./RenderPanel"
import { RenderQuestionGroup } from "./RenderQuestionGroup"
import { RenderSectionGroup } from "./RenderSectionGroup"
import { RenderPage } from "./RenderPage"

export const RenderItem = ({item}: {item: NavigationMenuItem}) => {
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
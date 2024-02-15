import { PagePanel } from "@/app/interfaces/menu.interfaces"
import Indent from "./Indent"

const PanelContent = ({pagePanel}: {pagePanel: PagePanel}) => {
    return <h2 className="border-l-2 border-white pl-2">[page-panel] {pagePanel.heading}</h2>
}

export const RenderPanel = ({pagePanel}: {pagePanel: PagePanel}) => {
    return <Indent>
        <PanelContent pagePanel={pagePanel} />
    </Indent>
}

export const RenderPagePanel = ({pagePanel}: {pagePanel: PagePanel}) => {
    return <PanelContent pagePanel={pagePanel} />
}
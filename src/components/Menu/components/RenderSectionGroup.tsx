import { SectionGroup } from "@/app/interfaces/menu.interfaces"
import { RenderItem } from "./RenderItem"

export const RenderSectionGroup = ({sectionGroup}: {sectionGroup: SectionGroup}) => {
    return <section>
    <h2 className="bg-green-500 text-black">[section-group] {sectionGroup.heading}</h2>
    {sectionGroup.items.map((sectionItem, i) => {
        return <RenderItem key={i} item={sectionItem} />
    })}
</section>
}
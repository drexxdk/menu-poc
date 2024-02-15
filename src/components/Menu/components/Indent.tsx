import { ReactNode } from "react"

const Indent = ({children}: {children: ReactNode}) => {
    return <div className="ml-4">{children}</div>
}
export default Indent;
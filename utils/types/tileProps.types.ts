import { ReactNode } from "react"

export type TileProps = {
    startIcon: ReactNode,
    text: string,
    endIcon?: ReactNode,
    onClick: () => void
}
import Link from "next/link"
import { FunctionComponent } from "react"
import { Badge } from "@/components/ui/badge"

interface Props {
    to?: string,
    selected?: boolean,
    badge?: number,
    children: React.ReactNode
}

const S = "flex items-center gap-3 rounded-lg px-3 py-2 text-primary bg-muted transition-all hover:text-primary"
const NS = "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"

export const MenuItem: FunctionComponent<Props> = (props) => {
    return (
        <Link href={props.to ?? '#'} className={props.selected ? S : NS}>
            {props.children}
            {props.badge && (
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    {props.badge}
                </Badge>
            )}
        </Link>
    );
}
import { Badge, Button } from '@/components/ui'

interface Props {
    type: string
    name: string
}

export default function FilePill({ type, name }: Props) {
    return (
        <Button variant="secondary" className="gap-1 bg-card pl-1.5">
            <Badge variant="outline" className="rounded-sm px-1 text-[8px]">
                {type}
            </Badge>
            <span className="truncate text-[11px]">{name}</span>
        </Button>
    )
}

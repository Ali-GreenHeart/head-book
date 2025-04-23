import { Button } from "@@/ui/button"
import { MetaArgs } from "react-router"


export function meta({ }: MetaArgs) {
    return [
        { title: "Head-Book ->  Your head, your smartness" },
        { name: "description", content: "Welcome our community!" }
    ]
}

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Button>Click me</Button>
        </div>
    )
}

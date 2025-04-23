import { Button } from "@@/ui/button"
import { Helmet } from 'react-helmet-async';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Head-Book -  Your head, your smartness</title>
                <meta name="description" content="Welcome our community!" />
            </Helmet>
            <div className="flex flex-col items-center justify-center">
                <Button>Click me</Button>
            </div>
        </>
    )
}

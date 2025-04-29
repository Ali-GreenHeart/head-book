import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Head-Book - Your head, your smartness</title>
        <meta name="description" content="Welcome to our community!" />
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Button>Click me</Button>
      </div>
    </>
  );
}

import { PageTransition } from "@/components/page-transition";
import Link from "next/link";
import Image from "next/image"
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <h2 className="text-2xl mt-4">Page Not Found</h2>
        <p className="text-gray-500 mt-2">Oops! The page you’re looking for doesn’t exist.</p>
        <Image
          src="/404.gif"
          width={600}
          height={400}
          alt="404"></Image>
        <Button asChild size="lg" variant="outline" className="group relative overflow-hidden text-white border-sky-500">
          <Link href="/">
            <span className="relative z-10">Go Home</span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-0"></span>
          </Link>
        </Button>
        {/* <Link href="/" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
          Go Home
        </Link> */}
      </div>
    </PageTransition>
  );
};

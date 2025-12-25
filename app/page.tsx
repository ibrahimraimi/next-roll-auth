import Link from "next/link";
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface HomeProps {
  className?: string;
}

const Home = ({ className }: HomeProps) => {
  return (
    <section className={cn("mb-32 border-b", className)}>
      <div className="container pt-32">
        <div className="relative pb-16">
          <div className="absolute inset-x-0 top-0 -z-10 flex h-full w-full items-center justify-center opacity-100" />
          <h1 className="mx-auto my-5 max-w-5xl text-center text-3xl text-balance md:text-5xl">
            The most comprehensive authentication framework for your Next.js
            project.
          </h1>
          <p className="mx-auto max-w-3xl text-center text-sm text-muted-foreground md:text-base">
            Build secure and scalable authentication flows with ease using our
            Next.js authentication framework. Save time and effort with our
            pre-built components and customizable features.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button>
              <Link href="/signin">Get Started</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-t-lg border-x border-t px-1 pt-1">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder"
            className="max-h-80 w-full rounded-t-lg object-cover md:max-h-107.5"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;

"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { IconMenu, IconX } from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import { auth } from "@/lib/auth";

type Session = typeof auth.$Infer.Session;

const SiteHeader = ({ session }: { session: Session | null }) => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <section
      className={cn(
        "border-b border-border lg:border-b",
        isOpen && "border-b-0"
      )}
    >
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          <div className="flex flex-1 items-center gap-9">
            <a href="#" className="flex items-center gap-2">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg"
                alt="logo"
                className="h-8 dark:invert"
              />
              <span className="text-lg font-semibold">Next.js Auth</span>
            </a>
          </div>

          {!session && (
            <div className="hidden items-center gap-2 lg:flex">
              <Button variant="outline">
                <Link href="/signup">Sign Up</Link>
              </Button>
              <Button>
                <Link href="/signin">Get Started</Link>
              </Button>
            </div>
          )}

          {session && <Link href="/dashboard">Dashboard</Link>}

          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IconX /> : <IconMenu />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </nav>
      </div>
    </section>
  );
};

export default SiteHeader;

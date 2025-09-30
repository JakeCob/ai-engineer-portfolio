'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/config";

const navItems = [
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Demos", href: "/demos" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full border-b border-neutral-200 dark:border-neutral-800 sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-40">
      <div className="container mx-auto h-16 px-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          {siteConfig.name}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                isActiveLink(item.href)
                  ? "text-blue-600 dark:text-blue-400 font-medium"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            className="hidden sm:inline-flex items-center rounded-md bg-white text-black px-3 py-1.5 text-sm hover:opacity-90 transition-opacity"
            href="/contact"
          >
            Contact me
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                  isActiveLink(item.href)
                    ? "text-blue-600 dark:text-blue-400 font-medium"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-white text-black px-3 py-2 text-sm hover:opacity-90 transition-opacity"
            >
              Contact me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}



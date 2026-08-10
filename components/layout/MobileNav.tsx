"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import { MenuIcon, CloseIcon } from "@/components/ui/icons";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        className="flex h-10 w-10 items-center justify-center rounded-control text-brand-black"
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-brand-black">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="text-lg font-semibold text-brand-white">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="flex h-10 w-10 items-center justify-center rounded-control text-brand-white"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-brand-white/10 py-4 text-xl font-medium text-brand-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/certificados-digitais"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-control bg-brand-blue px-5 py-3 text-sm font-medium text-brand-white"
            >
              Comprar Certificado
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

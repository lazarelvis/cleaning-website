"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LogoAndInfo from "../LogoAndInfo";
import Link from "next/link";
import { usePathname } from "next/navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Despre Noi", href: "/desprenoi" },
    { name: "Costuri", href: "/costuri" },
    { name: "Contact", href: "/contact" },
  ];

  const isCurrent = (href) => pathname === href;

  return (
    <Disclosure
      as="nav"
      className="bg-gray-50 font-[family-name:var(--font-poppins)]"
    >
      <LogoAndInfo />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-bermuda hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block size-6 group-data-open:hidden" />
              <XMarkIcon className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          {/* Desktop menu */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    className={classNames(
                      isCurrent(item.href)
                        ? "text-bermuda"
                        : "text-gray-900 hover:text-bermuda",
                      "rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link href="https://calendly.com/basarabiacleaning">
              <button
                type="button"
                className="rounded-full bg-bermuda px-4 py-2 text-white font-semibold hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Programeaza
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              className={classNames(
                isCurrent(item.href)
                  ? "bg-bermuda text-white"
                  : "text-gray-800 hover:bg-bermuda hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const routes = [
  { route: "/", label: "Beranda" },
  { route: "/tentang", label: "Tentang Kami" },
  {
    route: "/pokja",
    label: "POKJA",
    dropdownMenu: [
      { route: "/pokja/1", label: "POKJA 1" },
      { route: "/pokja/2", label: "POKJA 2" },
      { route: "/pokja/3", label: "POKJA 3" },
      { route: "/pokja/4", label: "POKJA 4" },
      { route: "/pokja/5", label: "POKJA 5" },
    ],
  },
  { route: "/galeri", label: "Galeri" },
  { route: "/artikel", label: "Artikel" },
  { route: "/layanan", label: "Layanan" },
];

export function Navbar() {
  const pathname = usePathname();
  const [wasOpen, setWasOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }
  function handleClickOutside(event: MouseEvent) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Element)) {
      setDropdownOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });

  useEffect(() => {
    setTimeout(() => setWasOpen(dropdownOpen), 150);
  }, [dropdownOpen]);

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-b-neutral-100 bg-neutral-50 px-2 py-4 lg:justify-around lg:px-8">
      <Link href="/" className="z-50 flex items-center gap-x-2">
        <Image
          src="/templates/PKK.png"
          className="mb-1 h-[10vw] w-[10vw] md:h-[8vw] md:w-[8vw] lg:h-[5vw] lg:w-[5vw]"
          alt="Logo PKK"
          sizes="100%"
          width={0}
          height={0}
        />
        <p className="text-xs font-semibold text-black lg:text-sm">
          TIM PENGGERAK PEMBERDAYAAN
          <br />
          & KESEJAHTERAAN KELUARGA (PKK)
          <br />
          PROVINSI PAPUA PEGUNUNGAN
        </p>
      </Link>
      <div className="hidden text-[1.5vw] text-blue-500 lg:flex lg:gap-x-8 xl:gap-x-10 xl:text-lg">
        {routes.map((r) => (
          <div
            key={r.label}
            className={`relative transition-colors duration-300 hover:text-blue-900 ${r.dropdownMenu ? "flex pr-8" : ""}`}
          >
            <Link
              href={r.route}
              className={`${pathname === r.route ? "text-blue-900 underline" : ""} z-20`}
            >
              {r.label}
            </Link>
            {r.dropdownMenu && (
              <div
                ref={dropdownRef}
                className={`absolute right-0 z-10 mt-1 flex flex-col items-end`}
              >
                <FaChevronDown
                  className={`h-4 w-4 cursor-pointer text-blue-500 hover:text-blue-900 ${dropdownOpen ? "rotate-180 text-blue-900" : ""} duration-300`}
                  onClick={toggleDropdown}
                />
                <div
                  className={`-mr-2 mt-2 flex ${dropdownOpen ? "animate-fade-down" : wasOpen ? "animate-fade-up" : "hidden"} w-32 flex-col gap-y-2 rounded-xl border border-neutral-300 bg-neutral-100 px-4 py-2`}
                >
                  {r.dropdownMenu.map((d) => (
                    <Link
                      className="text-blue-500 transition-colors duration-300 hover:text-blue-900"
                      key={d.label}
                      href={d.route}
                    >
                      {d.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="overflow-x-hidden lg:hidden">
        <button
          className="z-50 flex h-8 w-8 flex-col items-center justify-center *:block *:h-1 *:bg-blue-500"
          onClick={toggleDropdown}
        >
          <span
            className={`duration-300 ${dropdownOpen ? "w-6 origin-top-left -translate-y-1 translate-x-1 rotate-45" : "w-5"}`}
          />
          <span className={`duration-300 ${dropdownOpen ? "w-0" : "my-0.5 w-5"}`}></span>
          <span
            className={`duration-300 ${dropdownOpen ? "w-6 origin-bottom-left translate-x-1 translate-y-1 -rotate-45" : "w-5"}`}
          />
        </button>
        {wasOpen && (
          <div
            className={`${dropdownOpen ? "animate-fade-left" : "translate-x-full transform overflow-x-hidden duration-200"} absolute left-0 right-0 top-0 mt-20 flex h-screen flex-col border-t-2 border-t-neutral-400 bg-neutral-100 px-4 py-2 sm:mt-[6.2rem]`}
          >
            {routes.map((r, i) => (
              <div key={i} className={`p-4 ${i !== 0 ? "border-t border-t-neutral-400" : "pt-2"}`}>
                <Link
                  key={i}
                  href={r.route}
                  className={r.route === pathname ? "text-blue-900 underline" : "text-blue-500"}
                >
                  {r.label}
                </Link>
                <div className="mt-1 flex flex-col gap-y-2 pl-4">
                  {r.dropdownMenu &&
                    r.dropdownMenu.map((d) => (
                      <p key={d.label} className="before:mr-2 before:content-['+']">
                        <Link className="text-blue-500 hover:underline" href={d.route}>
                          {d.label}
                        </Link>
                      </p>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

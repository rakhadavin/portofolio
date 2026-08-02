"use client";

import { useState, useEffect, useRef } from "react";
import { Show, SignInButton, UserButton } from '@clerk/nextjs'
import { useRouter } from "next/navigation";

const MENU_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Core Competencies", id: "core-expertise" },
  { label: "Work Experiences", id: "work-experiences" },
  { label: "Project", id: "projects" },
];

export default function Navbar({ isAdmin = false }) {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverStyle, setHoverStyle] = useState({ opacity: 0, left: 0, width: 0 });
  const menuRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const router = useRouter();


  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 10);

      // Always show navbar at the very top of the page
      if (currentScrollY <= 0) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      const isScrollingDown = currentScrollY > lastScrollY.current;

      // Small threshold so tiny scroll jitter doesn't trigger hide/show
      if (Math.abs(currentScrollY - lastScrollY.current) > 5) {
        setVisible(!isScrollingDown);
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (id: string) => {
    setMobileOpen(false);
    console.log("Navigating to:", id);
    const target = document.getElementById(id);
    router.push(`/${id}`);
    // if (target) {
    // target.scrollIntoView({ behavior: "smooth", block: "start" });
    // }
  };

  const handleMenuHover = (id: string) => {
    const el = menuRefs.current[id];
    if (!el) return;
    setHoverStyle({
      opacity: 1,
      left: el.offsetLeft,
      width: el.offsetWidth,
    });
  };

  const handleMenuLeave = () => {
    setHoverStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <nav
          className={`fixed top-0 left-0 w-full z-1000 font-poppins transition-all duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-white/60 backdrop-blur-xl backdrop-saturate-150 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border-b border-white/40"
          : "bg-white/30 backdrop-blur-md border-b border-white/20"
      }`}
    >
          <div className="max-w-7xl mx-auto px-6 lg:px-10  ">
        <div className="flex items-center justify-between h-16">
          {/* Flex Group 1: Logo + Menu */}
          <div className="flex items-center gap-10">
            <button
              onClick={() => handleMenuClick("home")}
              className="text-xl font-semibold text-gray-900 tracking-tight relative group"
            >
              Portofolio
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />
            </button>

            <ul
              className="hidden md:flex items-center gap-1 relative"
              onMouseLeave={handleMenuLeave}
            >
              {/* Sliding hover pill */}
              <span
                className="absolute h-9 rounded-full bg-white/70 backdrop-blur-sm shadow-sm border border-white/50 transition-all duration-300 ease-out pointer-events-none"
                style={{
                  opacity: hoverStyle.opacity,
                  left: `${hoverStyle.left}px`,
                  width: `${hoverStyle.width}px`,
                }}
              />
              {MENU_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    ref={(el) => {
                      menuRefs.current[item.id] = el;
                    }}
                    onClick={() => handleMenuClick(item.id)}
                    onMouseEnter={() => handleMenuHover(item.id)}
                          className="relative z-10 px-4 py-2 text-sm font-medium text-white hover:text-gray-900 transition-colors duration-200 group/item"
                  >
                    <span className="inline-block transition-transform duration-200 ease-out group-hover/item:scale-110">
                      {item.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Flex Group 2: Login Button (admin only) */}
                  <div className="flex items-center gap-4">
                      <header className="flex justify-end items-center p-4 gap-4 h-16">
              <Show when="signed-out">
                <SignInButton mode="modal" >
                  <button className=" bg-gray-900/90 backdrop-blur-sm  hover:bg-gray-900 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">

                    Sign In
                              </button>
                </SignInButton>

                          </Show>
                          <Show when="signed-in">
                              <UserButton />
                          </Show>
                      </header>

          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4">
            <div className="rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-sm p-3">
              <ul className="flex flex-col gap-1">
                {MENU_ITEMS.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleMenuClick(item.id)}
                      className="w-full text-left px-3 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-white/60 transition-all duration-200"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                {isAdmin && (
                  <li className="pt-1">
                    <button
                      onClick={() => handleMenuClick("login")}
                      className="px-5 py-2 text-sm font-medium text-white bg-gray-900/90 rounded-full hover:bg-gray-900 transition-colors duration-200 w-fit"
                    >
                      Login
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
import { Link, NavLink } from "react-router-dom";
import { navLinks, siteConfig } from "../../config/site";
import { useDisclosure } from "../hooks/useDisclosure";
import { CloseIcon, MenuIcon } from "../icons/SocialIcons";
import Logo from "./Logo";

type NavClassArgs = {
  isActive: boolean;
};

const navClass = ({ isActive }: NavClassArgs) =>
  `page-link transition hover:text-brand-orange ${isActive ? "text-brand-orange" : "text-slate-700"}`;

export default function Navbar() {
  const mobileMenu = useDisclosure(false);

  return (
    <>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden items-center gap-8 text-sm font-bold lg:flex">
          {navLinks.map((item) => (
            <NavLink key={item.href} to={item.href} className={navClass} end={item.href === "/"}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            className="rounded-full border border-blue-200 px-5 py-3 text-sm font-black text-brand-blue transition hover:border-brand-orange hover:text-brand-orange"
            href={siteConfig.phoneHref}
          >
            Call
          </a>
          <a
            className="rounded-full bg-brand-orange px-5 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600"
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-900 lg:hidden"
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileMenu.isOpen}
          onClick={mobileMenu.toggle}
        >
          {mobileMenu.isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {mobileMenu.isOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3 text-sm font-bold text-slate-700">
            {navLinks.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 hover:bg-blue-50 ${isActive ? "text-brand-orange" : ""}`
                }
                end={item.href === "/"}
                onClick={mobileMenu.close}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="rounded-full border border-blue-200 px-5 py-3 text-center font-black text-brand-blue"
              onClick={mobileMenu.close}
            >
              Contact
            </Link>
            <a
              className="rounded-full bg-brand-orange px-5 py-3 text-center font-black text-white"
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}

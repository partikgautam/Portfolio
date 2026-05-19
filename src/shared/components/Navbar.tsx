import { Link, NavLink } from "react-router-dom";
import { navLinks, siteConfig } from "../../config/site";
import { useDisclosure } from "../hooks/useDisclosure";
import { CloseIcon, MenuIcon } from "../icons/SocialIcons";
import Logo from "./Logo";

type NavClassArgs = {
  isActive: boolean;
};

const navClass = ({ isActive }: NavClassArgs) =>
  `page-link transition hover:text-brand-yellow ${isActive ? "text-brand-yellow" : "text-white/90"}`;

export default function Navbar() {
  const mobileMenu = useDisclosure(false);

  return (
    <>
      <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-white/15 bg-brand-navy px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden items-center gap-7 text-sm font-bold lg:flex">
          {navLinks.map((item) => (
            <NavLink key={item.href} to={item.href} className={navClass} end={item.href === "/"}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            className="rounded-full border border-white/20 px-4 py-2.5 text-xs font-black uppercase tracking-wide text-white/85 transition hover:border-brand-yellow hover:text-brand-yellow"
            href={siteConfig.phoneHref}
          >
            Call
          </a>
          <a
            className="rounded-full bg-brand-orange px-4 py-2.5 text-xs font-black uppercase tracking-wide text-white shadow-lg shadow-blue-950/20 transition hover:bg-brand-yellow hover:text-brand-navy"
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect
          </a>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileMenu.isOpen}
          onClick={mobileMenu.toggle}
        >
          {mobileMenu.isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {mobileMenu.isOpen && (
        <div className="border-t border-white/15 bg-brand-navy px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3 text-sm font-bold text-white/75">
            {navLinks.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 hover:bg-white/10 ${isActive ? "text-brand-yellow" : ""}`
                }
                end={item.href === "/"}
                onClick={mobileMenu.close}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="rounded-full border border-white/20 px-5 py-3 text-center font-black text-white"
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

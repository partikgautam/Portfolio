import { Link, NavLink } from "react-router-dom";
import { navLinks, siteConfig } from "../../config/site";
import { useDisclosure } from "../hooks/useDisclosure";
import { CloseIcon, MenuIcon } from "../icons/SocialIcons";
import Logo from "./Logo";

type NavClassArgs = {
  isActive: boolean;
};

const navClass = ({ isActive }: NavClassArgs) =>
  `page-link uppercase tracking-wide transition hover:text-brand-orange ${isActive ? "text-brand-orange" : "text-white/80"}`;

export default function Navbar() {
  const mobileMenu = useDisclosure(false);

  return (
    <>
      <nav className="site-glass-nav mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/10 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur sm:px-6 lg:px-8">
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
            className="rounded-2xl border border-white/20 px-4 py-2.5 text-xs font-black uppercase tracking-wide text-white/85 transition hover:border-brand-orange hover:text-brand-orange"
            href={siteConfig.phoneHref}
          >
            Call
          </a>
          <a
            className="premium-action premium-action--primary rounded-2xl px-4 py-2.5 text-xs font-black uppercase tracking-wide text-white shadow-lg shadow-blue-950/20 transition"
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect
          </a>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 text-white lg:hidden"
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileMenu.isOpen}
          onClick={mobileMenu.toggle}
        >
          {mobileMenu.isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {mobileMenu.isOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/10 bg-brand-navy/95 px-4 py-4 shadow-xl shadow-black/20 backdrop-blur lg:hidden">
          <div className="flex flex-col gap-3 text-sm font-bold text-white/75">
            {navLinks.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `rounded-2xl px-3 py-2 uppercase tracking-wide hover:bg-white/10 ${isActive ? "text-brand-orange" : ""}`
                }
                end={item.href === "/"}
                onClick={mobileMenu.close}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="rounded-2xl border border-white/20 px-5 py-3 text-center font-black text-white"
              onClick={mobileMenu.close}
            >
              Contact
            </Link>
            <a
              className="rounded-2xl bg-brand-orange px-5 py-3 text-center font-black text-white"
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

import { useState } from "react";
import "./navbar.css"

const NAV_LINKS = [
  { label: "Home",       href: "/" },
  { label: "Shop",       href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "About",      href: "/about" },
];

const CART_COUNT = 0;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const token = localStorage.getItem("token"); //m

  function handleLogout() {
  localStorage.removeItem("token");
  setUserOpen(false);
  window.location.href = "/";
}   //m

  return (
    <nav className="navbar">

      {/* ── Main bar ──────────────────────────────────────────────────── */}
      <div className="navbar-inner">

        {/* Logo */}
        <a href="/" className="navbar-logo">
          <span className="navbar-logo-star">✦</span>
          GOLDEN HOPE
          <span className="navbar-logo-star">✦</span>
        </a>

        {/* Desktop nav links */}
        <div className="navbar-links">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="navbar-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Right icons */}
        <div className="navbar-icons">

          {/* Search */}
          <button className="navbar-icon-btn" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
          </button>

          {/* Cart */}
          <a href="/cart" className="navbar-icon-btn navbar-cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 0 0 6.54 17H17m-10 0a1 1 0 1 0 2 0m6 0a1 1 0 1 0 2 0" />
            </svg>
            {CART_COUNT > 0 && (
              <span className="navbar-cart-badge">{CART_COUNT}</span>
            )}
          </a>

          {/* User dropdown */}
          <div className="navbar-user">
            <button
              onClick={() => setUserOpen(!userOpen)}
              className="navbar-icon-btn"
              aria-label="Account"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M5.121 17.804A9 9 0 1 1 18.88 17.804M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              </svg>
            </button>

            {userOpen && (
              // <div className="navbar-dropdown">
              //   {[
              //     { label: "My Profile", href: "/profile" },
              //     { label: "My Orders",  href: "/orders" },
              //     { label: "Settings",   href: "/settings" },
              //   ].map((item) => (
              //     <a key={item.label} href={item.href} className="navbar-dropdown-item">
              //       {item.label}
              //     </a>
              //   ))}
              //   <div className="navbar-dropdown-divider" />
              //   <button onClick={handleLogout} className="navbar-dropdown-logout">
              //     Log out
              //   </button>
              // </div>

              <div className="navbar-dropdown">

                  {!token ? (
                    <a
                      href="/login"
                      className="navbar-dropdown-item"
                    >
                      Login
                    </a>
                  ) : (
                    <>
                      <a
                        href="/profile"
                        className="navbar-dropdown-item"
                      >
                        My Profile
                      </a>

                      <a
                        href="/orders"
                        className="navbar-dropdown-item"
                      >
                        My Orders
                      </a>

                      <div className="navbar-dropdown-divider" />

                      <button
                        onClick={handleLogout}
                        className="navbar-dropdown-logout"
                      >
                        Logout
                      </button>
                    </>
                  )}

                </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="navbar-icon-btn navbar-hamburger"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>

        </div>
      </div>

      {/* Gold divider */}
      <div className="navbar-divider" />

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar-mobile-menu">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

    </nav>
  );
}

export default Navbar;
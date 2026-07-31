"use client";

import { useEffect, useRef, useState } from "react";

const menuItems = [
  { href: "#profiel", label: "Profiel" },
  { href: "#ervaring", label: "Ervaring" },
  { href: "#werkwijze", label: "Werkwijze" },
  { href: "#opleiding", label: "Opleiding" },
  { href: "#contact", label: "Contact" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className={`mobileMenu${isOpen ? " isOpen" : ""}`} ref={containerRef}>
      <button
        ref={buttonRef}
        className="mobileMenuButton"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="srOnly">{isOpen ? "Menu sluiten" : "Menu openen"}</span>
        <span className="mobileMenuIcon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <nav
        className="mobileMenuPanel"
        id="mobile-menu-panel"
        aria-label="Mobiele navigatie"
        hidden={!isOpen}
      >
        {menuItems.map((item, index) => (
          <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.label}</strong>
            <i aria-hidden="true">↘</i>
          </a>
        ))}
      </nav>
    </div>
  );
}

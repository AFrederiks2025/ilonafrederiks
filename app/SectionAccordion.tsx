"use client";

import { type ReactNode, useEffect, useState } from "react";

type SectionAccordionProps = {
  children: ReactNode;
  description: string;
  id: string;
  label: string;
  tone?: "light" | "soft" | "dark";
};

export default function SectionAccordion({
  children,
  description,
  id,
  label,
  tone = "light",
}: SectionAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openForHash = () => {
      if (window.location.hash === `#${id}`) {
        setIsOpen(true);
      }
    };

    openForHash();
    window.addEventListener("hashchange", openForHash);

    return () => {
      window.removeEventListener("hashchange", openForHash);
    };
  }, [id]);

  return (
    <details
      className={`sectionAccordion sectionAccordion--${tone}`}
      id={id}
      open={isOpen}
      onToggle={(event) => setIsOpen(event.currentTarget.open)}
    >
      <summary>
        <span className="sectionAccordionSummaryText">
          <strong>{label}</strong>
          <small>{description}</small>
        </span>
        <span className="sectionAccordionAction" aria-hidden="true">
          <span className="sectionAccordionActionClosed">Bekijk</span>
          <span className="sectionAccordionActionOpen">Sluit</span>
          <span className="sectionAccordionIcon" />
        </span>
      </summary>
      {children}
    </details>
  );
}

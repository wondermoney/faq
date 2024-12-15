import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useLocation } from "@docusaurus/router";

export default function LanguageSelector() {
  const { i18n } = useDocusaurusContext();
  const location = useLocation();
  const { currentLocale } = i18n;

  // Determine the alternate locale
  const alternateLocale = currentLocale === "en" ? "pt" : "en";

  // Remove any locale prefixes (e.g., /pt)
  const cleanPath = location.pathname.replace(/^\/(pt)(\/|$)/, "");

  // Construct the alternate path
  const alternatePath =
    alternateLocale === "en"
      ? `/${cleanPath}`
      : `/pt/${cleanPath.replace(/^\/+/, "")}`;

  return (
    <a href={alternatePath} style={{ fontSize: "1rem" }}>
      {currentLocale === "en" ? <>🇵🇹 PT</> : <>🌎 EN</>}
    </a>
  );
}

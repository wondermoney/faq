import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useLocation } from "@docusaurus/router";

export default function LanguageSelector() {
  const { i18n } = useDocusaurusContext();
  console.log("i18n", i18n);
  const location = useLocation();
  const { currentLocale } = i18n;

  // Determine the alternate language
  const alternateLocale = currentLocale === "en" ? "pt" : "en";

  // Remove all existing locale prefixes
  const cleanPath = location.pathname.replace(/^\/+(en|pt)+/, "");

  // Construct the alternate language path
  const alternatePath = `/${alternateLocale}/${cleanPath.replace(/^\/+/, "")}`;

  return <a href={alternatePath}>{currentLocale === "en" ? "PT" : "EN"}</a>;
}

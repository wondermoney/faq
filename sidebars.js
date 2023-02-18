/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    "introduction",
    {
      type: "category",
      label: "Accounts",
      link: {
        type: "doc",
        id: "accounts/introduction",
      },
      items: [
        "accounts/create-account",
        "accounts/manage-account",
        {
          type: "category",
          label: "Transactions",
          link: {
            type: "doc",
            id: "accounts/transactions/introduction",
          },
          items: [
            "accounts/transactions/import-transaction",
            "accounts/transactions/create-transaction",
            "accounts/transactions/edit-transaction",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Portfolios",
      link: {
        type: "doc",
        id: "portfolios/introduction",
      },
      items: [
        "portfolios/create-portfolio",
        "portfolios/holdings",
        {
          type: "category",
          label: "Transactions",
          link: {
            type: "doc",
            id: "portfolios/transactions/introduction",
          },
          items: [
            "portfolios/transactions/import-transaction",
            "portfolios/transactions/create-transaction",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Financial Markets",
      items: [
        "financial-markets/explorer",
        "financial-markets/screener",
        "financial-markets/news",
      ],
    },
    "reports",
    "budgets",
    "glossary",
  ],
};

module.exports = sidebars;

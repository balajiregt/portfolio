import React, { useState } from 'react';
import { Github, ExternalLink, Calendar, Coffee, Camera, Code, BookOpen, User, Mail, Linkedin, Globe, Award, Star, Newspaper, Briefcase, Rocket, Layers, PenTool } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('home');
  const personalInfo = {
    name: "Balaji K",
    title: "SDET Leader | Product Development",
    tagline: "12+ years building automation systems, quality platforms, AI-assisted workflows, and privacy-first products while growing toward engineering leadership impact.",
    email: "kbalaji.kks@gmail.com",
    github: "https://github.com/balajiregt",
    medium: "https://medium.com/@kbalaji.kks",
    devto: "https://dev.to/buildwithbalaji",
    linkedin: "https://linkedin.com/in/kbalaji-kks",
    x: "https://x.com/buildwithbalaji"
  };
  const publicGithubRepoCount = 16;
  const mediumFollowerCount = 290;

  const innovationInitiatives = [
    {
      title: "Agentic API Automation Workspace",
      focus: "Context-aware QA framework for coding agents",
      description: "Built a portable workspace pattern that gives coding agents small task briefs, generated repo context, reusable QA playbooks, OpenAPI/service evidence, and verification guardrails.",
      impact: "Helps teams preserve QA intent, reduce tribal knowledge, and add or modify API automation with clearer product and contract feedback.",
      tags: ["Agentic QA", "MCP-ready context", "OpenAPI evidence", "API automation"]
    },
    {
      title: "Role-Aware Playwright Mockserver",
      focus: "Deterministic E2E framework architecture",
      description: "Designed a Playwright + mockserver pattern for role-based journeys, signed token simulation, feature flags, downstream failures, and backend error states.",
      impact: "Makes E2E suites more stable by reducing dependency on live identity providers, seeded users, and fragile lower environments.",
      tags: ["Playwright", "Mockserver", "RBAC testing", "JWT simulation"]
    }
  ];

  // GitHub Repositories
  const githubRepos = [
    {
      name: "agentic-workspace",
      description: "Context-aware QA workspace for coding agents, combining task briefs, repo context, reusable QA playbooks, API evidence, and verification guardrails.",
      language: "TypeScript",
      updated_at: "2026-07-31T09:30:00Z",
      html_url: "https://github.com/balajiregt/agentic-workspace"
    },
    {
      name: "myFinance",
      description: "Finfolio: self-hosted, single-file Indian portfolio tracker with AI insights, Gmail expense tracking, live NAV sync, gold tracking, reminders, and privacy-first local storage.",
      language: "HTML",
      updated_at: "2026-05-06T09:36:24Z",
      html_url: "https://github.com/balajiregt/myFinance"
    },
    {
      name: "plawright-role-aware-mockserver",
      description: "Role-aware mockserver pattern for scalable Playwright E2E tests across admin, viewer, and VIP workflows.",
      language: "JavaScript",
      updated_at: "2026-06-02T13:14:32Z",
      html_url: "https://github.com/balajiregt/plawright-role-aware-mockserver"
    },
    {
      name: "playwright_pom_fixtures_modular_framework_template",
      description: "Playwright page object model with modular classes for actions, assertions and incorporating fixtures handling setup and teardown efficiently.",
      language: "JavaScript",
      updated_at: "2026-03-21T07:42:28Z",
      html_url: "https://github.com/balajiregt/playwright_pom_fixtures_modular_framework_template"
    },
    {
      name: "Playwright_test_functional",
      description: "Sanity test cases",
      language: "JavaScript",
      updated_at: "2025-10-05T04:31:40Z",
      html_url: "https://github.com/balajiregt/Playwright_test_functional"
    },
    {
      name: "Playwright_test_NFT",
      description: "Visual testing, accessibility testing, and resilience testing examples.",
      language: "JavaScript",
      updated_at: "2023-10-25T10:22:04Z",
      html_url: "https://github.com/balajiregt/Playwright_test_NFT"
    },
    {
      name: "Playwright_test_API",
      description: "API test cases using Playwright for REST API testing",
      language: "JavaScript",
      updated_at: "2023-10-25T10:26:46Z",
      html_url: "https://github.com/balajiregt/Playwright_test_API"
    },
    {
      name: "Cypress_practice",
      description: "Cypress end-to-end testing practice and examples",
      language: "HTML",
      updated_at: "2023-08-30T16:18:04Z",
      html_url: "https://github.com/balajiregt/Cypress_practice"
    },
    {
      name: "RestAssured_Practice",
      description: "REST API automation testing practice using RestAssured and Java.",
      language: "HTML",
      updated_at: "2023-08-16T23:00:11Z",
      html_url: "https://github.com/balajiregt/RestAssured_Practice"
    }
  ];

  // TestGrid Articles
  const testGridArticles = [
    {
      title: "10 Best Practices to Improve Your Cypress Testing",
      date: "2025-02-15",
      description: "A practical guide for enhancing Cypress test suites with proven strategies and implementation techniques for better test reliability and maintainability.",
      link: "https://testgrid.io/blog/cypress-best-practices/"
    },
    {
      title: "Playwright vs Selenium: Speed, Features, and Use Cases",
      date: "2025-01-20",
      description: "In-depth comparison to help decide between Playwright and Selenium, covering performance benchmarks, feature sets, and real-world use case scenarios.",
      link: "https://testgrid.io/blog/playwright-vs-selenium/"
    },
    {
      title: "Iframes in Cypress: Native Methods vs. cypress-iframe Plugin",
      date: "2024-09-10",
      description: "Comprehensive techniques for handling iframes in Cypress-based projects, comparing native approaches with the cypress-iframe plugin for different testing scenarios.",
      link: "https://testgrid.io/blog/handling-iframes-in-cypress/"
    }
  ];

  const productLaunches = [
    {
      name: "Finfolio",
      status: "Open-source product",
      period: "Launched Apr 2026",
      audience: "Indian investors who want full-control personal finance tracking",
      description: "A single-HTML-file portfolio tracker covering mutual funds, FDs, physical gold, stocks, post office schemes, insurance, loans, real estate, retirement accounts, expenses, and AI portfolio analysis.",
      role: "Product builder, full-stack developer, QA architect, and launch writer",
      stack: ["HTML", "JavaScript", "AMFI NAV", "OAuth", "Gemini AI", "Supabase optional backup"],
      metrics: ["10 asset classes", "1 HTML file", "No backend required", "Browser-local privacy"],
      links: [
        { label: "GitHub", url: "https://github.com/balajiregt/myFinance" },
        { label: "Medium launch", url: "https://medium.com/@kbalaji.kks/i-built-a-complete-portfolio-tracker-for-indian-investors-in-a-single-html-file-9f9d2da733f7" },
        { label: "DEV launch", url: "https://dev.to/buildwithbalaji/one-html-file-no-backend-no-sign-up-your-data-never-leaves-your-browser-3oj9" }
      ]
    },
    {
      name: "WealthOS Lite",
      status: "Free Notion template",
      period: "Launched May 2026",
      audience: "Non-technical users who want a clean finance system inside Notion",
      description: "A lightweight Notion-based wealth and budget dashboard evolved from the Finfolio architecture, focused on simple databases, formulas, grouped views, charts, and zero backend setup.",
      role: "Product manager, template designer, systems thinker, and creator-marketplace shipper",
      stack: ["Notion", "Formula design", "Database views", "Portfolio tracking", "Budget tracking"],
      metrics: ["2 databases", "3 pages", "No Zapier or backend", "Marketplace-ready packaging"],
      links: [
        { label: "DEV story", url: "https://dev.to/buildwithbalaji/from-a-single-html-file-finance-app-to-a-notion-template-lessons-in-shipping-for-users-4588" },
        { label: "Medium story", url: "https://medium.com/@kbalaji.kks/from-a-single-html-finance-app-to-an-automated-notion-portfolio-tracker-4f97266ae54f" },
        { label: "Template", url: "https://stirring-heart-701.notion.site/WealthOS-Lite-34b3afb1ab1a81bf98f6e72a26551f50" }
      ]
    },
    {
      name: "WealthOS Pro",
      status: "Local sync app",
      period: "Built May 2026",
      audience: "Investors who want Notion as the interface with automated local portfolio refreshes",
      description: "A local-first Notion portfolio tracker with a small Node.js sync app that updates prices, mutual fund NAVs, gold prices, SIP dates, portfolio metrics, and reminders without Zapier, Make, or a hosted backend.",
      role: "Product engineer, sync architecture designer, QA tester, and packaging owner",
      stack: ["Notion API", "Node.js 18+", "Yahoo Finance", "Finnhub", "mfapi.in", "gold-api.com"],
      metrics: ["Double-click launcher", "No npm install", "No WealthOS cloud", "User-owned data"],
      links: [
        { label: "Product page", url: "https://balajibuilder.gumroad.com/l/wealthos" },
        { label: "DEV build story", url: "https://dev.to/buildwithbalaji/adding-live-sync-to-a-notion-finance-template-without-zapier-make-or-a-backend-published-false-1pom" },
        { label: "Finfolio base", url: "https://github.com/balajiregt/myFinance" }
      ]
    }
  ];

  const devArticles = [
    {
      title: "Scaling Playwright E2E Tests with a Role-Aware Mockserver",
      date: "2026-06-03",
      description: "A practical architecture for deterministic role-based E2E tests using Playwright, Koa, signed tokens, feature flags, and backend error simulation.",
      link: "https://dev.to/buildwithbalaji/scaling-playwright-e2e-tests-with-a-role-aware-mockserver-4fi3"
    },
    {
      title: "Adding live sync to a Notion finance template without Zapier, Make, or a backend",
      date: "2026-05-21",
      description: "How WealthOS Pro adds a double-click local Node.js sync app for Notion portfolio prices, SIP dates, metrics, and alerts without a hosted backend.",
      link: "https://dev.to/buildwithbalaji/adding-live-sync-to-a-notion-finance-template-without-zapier-make-or-a-backend-published-false-1pom"
    },
    {
      title: "From a single-HTML-file finance app to a Notion template",
      date: "2026-05-07",
      description: "The product lesson behind turning Finfolio's complete finance tracker into the simpler WealthOS Lite Notion template.",
      link: "https://dev.to/buildwithbalaji/from-a-single-html-file-finance-app-to-a-notion-template-lessons-in-shipping-for-users-4588"
    },
    {
      title: "One HTML file. No backend. No sign-up. Your data never leaves your browser.",
      date: "2026-05-01",
      description: "A launch note for Finfolio's privacy-first single-file personal finance tracker.",
      link: "https://dev.to/buildwithbalaji/one-html-file-no-backend-no-sign-up-your-data-never-leaves-your-browser-3oj9"
    }
  ];

  // Medium Articles (Categorized) - Updated with all articles and links
  const mediumArticles = {
    productEngineering: [
      {
        title: "Agentic API Automation: A Context-Aware Workspace for QA Teams",
        category: "Agentic QA",
        date: "2026-07-31",
        description: "A practical framework for using coding agents in QA/API automation with task context, repo topology, reusable playbooks, API evidence, and verification guardrails.",
        link: "https://medium.com/@kbalaji.kks/agentic-api-automation-a-context-aware-workspace-for-qa-teams-6ba70f82d5d0"
      },
      {
        title: "Scaling Playwright E2E Tests with a Role-Aware Mockserver",
        category: "SDET Architecture",
        date: "2026-06-03",
        description: "A full implementation pattern for role-aware UI automation using Playwright, a Koa mockserver, signed JWT roles, and feature flag/error scenarios.",
        link: "https://medium.com/@kbalaji.kks/scaling-playwright-e2e-tests-with-a-role-aware-mockserver-97d658399ef2"
      },
      {
        title: "From a Single HTML Finance App to an Automated Notion Portfolio Tracker",
        category: "Product Engineering",
        date: "2026-05-22",
        description: "How Finfolio's architecture evolved into a simpler Notion-first product system for a broader non-technical audience.",
        link: "https://medium.com/@kbalaji.kks/from-a-single-html-finance-app-to-an-automated-notion-portfolio-tracker-4f97266ae54f"
      },
      {
        title: "I Built a Complete Portfolio Tracker for Indian Investors in a Single HTML File",
        category: "Product Launch",
        date: "2026-04-13",
        description: "The launch story behind Finfolio: a privacy-first, single-file finance tracker covering Indian asset classes, live sync, reminders, and AI analysis.",
        link: "https://medium.com/@kbalaji.kks/i-built-a-complete-portfolio-tracker-for-indian-investors-in-a-single-html-file-9f9d2da733f7"
      }
    ],
    apiTesting: [
      {
        title: "How to Use Playwright for Advanced Network Interception",
        category: "Playwright API",
        date: "2024-11-30",
        description: "Advanced techniques for intercepting, modifying, and analyzing network calls in Playwright tests.",
        link: "https://medium.com/@kbalaji.kks/how-to-use-playwright-for-advanced-network-interception-6e83fdcb5360"
      },
      {
        title: "Building An API Testing Boilerplate using Playwright And Jenkins",
        category: "Playwright API",
        date: "2023-11-15",
        description: "Complete guide to setting up API testing framework with Playwright and Jenkins CI/CD integration.",
        link: "https://medium.com/@kbalaji.kks/how-to-build-an-api-testing-boilerplate-using-playwright-and-jenkins-d706b4dbb783"
      },
      {
        title: "How to validate Json schema for Playwright API tests",
        category: "Playwright API",
        date: "2023-10-29",
        description: "Implementing JSON schema validation in Playwright API tests for robust data verification.",
        link: "https://medium.com/@kbalaji.kks/how-to-validate-json-schema-for-playwright-api-tests-1a3b826c0ff9"
      },
      {
        title: "API testing using Playwright with chai assertions 'expect and assert'",
        category: "Playwright API",
        date: "2023-01-13",
        description: "Using Chai assertions with Playwright API testing for comprehensive response validation.",
        link: "https://medium.com/@kbalaji.kks/api-testing-using-playwright-with-chai-assertions-expect-and-assert-a79a9c935fd2"
      },
      {
        title: "API Testing with Cypress| Authorization -Bearer token| saving and invoking the token values",
        category: "Cypress API",
        date: "2022-08-28",
        description: "Managing Bearer token authentication in Cypress API tests with token storage and reuse strategies.",
        link: "https://medium.com/@kbalaji.kks/api-testing-with-cypress-authorization-bearer-token-saving-and-invoking-the-token-values-3e3d95b86298"
      },
      {
        title: "API Testing with Cypress| Chai BDD assertions",
        category: "Cypress API",
        date: "2022-08-16",
        description: "Using Chai BDD assertions for comprehensive API response validation in Cypress tests.",
        link: "https://medium.com/@kbalaji.kks/api-testing-with-cypress-chai-bdd-assertions-8db61a7d9d9"
      },
      {
        title: "Cypress-each(): Iterating through the yielded elements and applying the assertion conditions",
        category: "Cypress API",
        date: "2022-09-17",
        description: "Using Cypress each() method for iterating through API responses and applying conditional assertions.",
        link: "https://medium.com/@kbalaji.kks/cypress-each-iterating-through-the-yielded-elements-and-applying-the-assertion-conditions-463b7a8e8c3c"
      },
      {
        title: "Creating a REST-Assured TestNG boilerplate project",
        category: "RestAssured",
        date: "2023-08-17",
        description: "Setting up a comprehensive REST-Assured testing framework with TestNG integration.",
        link: "https://medium.com/@kbalaji.kks/creating-a-rest-assured-testng-boilerplate-project-7b35135c58a7"
      },
      {
        title: "Postman Test Assertions",
        category: "Postman",
        date: "2023-02-19",
        description: "Comprehensive guide to writing test assertions in Postman for REST API validation.",
        link: "https://medium.com/@kbalaji.kks/postman-test-assertions-14d961c448a6"
      }
    ],
    uiTesting: [
      {
        title: "Comprehensive Playwright-Powered End-to-End Testing, Modular Framework using Page Object Model",
        category: "Playwright UI",
        date: "2024-03-12",
        description: "Building scalable E2E testing frameworks with Playwright using Page Object Model design pattern.",
        link: "https://medium.com/@kbalaji.kks/comprehensive-playwright-powered-end-to-end-testing-modular-framework-using-page-object-model-5143db40a15b"
      },
      {
        title: "Handling Asynchronous Actions in Playwright: Using noWaitAfter for Efficient Test Automation",
        category: "Playwright UI",
        date: "2024-09-06",
        description: "Optimizing Playwright tests by handling asynchronous actions efficiently with noWaitAfter option.",
        link: "https://medium.com/@kbalaji.kks/handling-asynchronous-actions-in-playwright-using-nowaitafter-for-efficient-test-automation-979498da665b"
      },
      {
        title: "How to handle authentication using browser state in playwright test",
        category: "Playwright UI",
        date: "2023-07-24",
        description: "Managing authenticated browser states in Playwright for efficient test execution without repeated logins.",
        link: "https://medium.com/@kbalaji.kks/how-to-handle-authentication-using-browser-state-in-playwright-test-cac04fc76d37"
      },
      {
        title: "How to apply playwright 'locator.or', 'locator.and' & 'locator.filter' methods",
        category: "Playwright UI",
        date: "2023-06-26",
        description: "Advanced locator strategies in Playwright using logical operators for flexible element selection.",
        link: "https://medium.com/@kbalaji.kks/how-to-apply-playwright-locator-or-locator-and-locator-filter-methods-facd6cc34d8b"
      },
      {
        title: "Playwright| Handling Alert, Prompt, New Window, New Tab",
        category: "Playwright UI",
        date: "2022-12-14",
        description: "Handling various browser events including alerts, prompts, and new windows/tabs in Playwright.",
        link: "https://medium.com/@kbalaji.kks/playwright-handling-alert-prompt-new-window-new-tab-91b8377c9b03"
      },
      {
        title: "Playwright| Locators and Selectors",
        category: "Playwright UI",
        date: "2022-10-31",
        description: "Understanding the difference between locators and selectors in Playwright automation.",
        link: "https://medium.com/@kbalaji.kks/playwright-locators-and-selectors-5a0882f8c801"
      },
      {
        title: "How to handle cypress flaky test",
        category: "Cypress UI",
        date: "2023-02-25",
        description: "Strategies and best practices for identifying and resolving flaky tests in Cypress automation.",
        link: "https://medium.com/@kbalaji.kks/how-to-handle-cypress-flaky-test-d18fedd2b841"
      },
      {
        title: "Cypress| Version 12| Handling cross-origin policy|cy.origin()",
        category: "Cypress UI",
        date: "2022-12-07",
        description: "Working with cross-origin requests in Cypress v12 using the new cy.origin() command.",
        link: "https://medium.com/@kbalaji.kks/cypress-version-12-same-origin-policy-cy-origin-f5545419013b"
      },
      {
        title: "Cypress| Alert, Prompt, new Window, new Tab",
        category: "Cypress UI",
        date: "2022-11-21",
        description: "Handling different window events and browser dialogs in Cypress automation.",
        link: "https://medium.com/@kbalaji.kks/cypress-alert-prompt-new-window-new-tab-852c44d51387"
      },
      {
        title: "Cypress Intercept",
        category: "Cypress UI",
        date: "2022-10-17",
        description: "Using Cypress intercept() method for network request interception and modification.",
        link: "https://medium.com/@kbalaji.kks/cypress-intercept-1dc289695b1e"
      },
      {
        title: "Testing the hyperlinks in Cypress automation",
        category: "Cypress UI",
        date: "2022-09-29",
        description: "Strategies for testing hyperlinks and anchor tags in Cypress end-to-end tests.",
        link: "https://medium.com/@kbalaji.kks/testing-the-hyperlinks-in-cypress-automation-e7da2944b498"
      },
      {
        title: "Handling Web tables in Cypress automation- CSS selector approaches",
        category: "Cypress UI",
        date: "2022-09-28",
        description: "CSS selector strategies for handling web tables and tabular data in Cypress tests.",
        link: "https://medium.com/@kbalaji.kks/handling-web-tables-in-cypress-automation-css-selector-approaches-18b19d8fad4"
      },
      {
        title: "Cypress Viewport",
        category: "Cypress UI",
        date: "2022-09-07",
        description: "Controlling screen size and viewport dimensions in Cypress for responsive testing.",
        link: "https://medium.com/@kbalaji.kks/cypress-viewport-373ea7e86c1b"
      },
      {
        title: "Cypress Studio",
        category: "Cypress UI",
        date: "2022-09-01",
        description: "Using Cypress Studio for interactive test creation and debugging in version 10.7+.",
        link: "https://medium.com/@kbalaji.kks/cypress-studio-d971cd853b44"
      },
      {
        title: "CSS selectors for react-select dropdown elements",
        category: "Cypress UI",
        date: "2022-08-23",
        description: "Targeting react-select dropdown components using CSS selectors in Cypress automation.",
        link: "https://medium.com/@kbalaji.kks/css-selectors-for-react-select-dropdown-elements-70e43c041df3"
      },
      {
        title: "Testing radiobutton checkbox dropdown in playwright and cypress",
        category: "Both Frameworks",
        date: "2022-12-27",
        description: "Handling form elements like radio buttons, checkboxes, and dropdowns in Playwright and Cypress.",
        link: "https://medium.com/@kbalaji.kks/testing-radiobutton-checkbox-dropdown-in-playwright-and-cypress-8cacb6f95213"
      },
      {
        title: "Conditional Testing with Cypress and Playwright",
        category: "Both Frameworks",
        date: "2022-09-11",
        description: "Implementing conditional logic and decision-making in test automation with both frameworks.",
        link: "https://medium.com/@kbalaji.kks/conditional-testing-with-cypress-and-playwright-367e83be3374"
      }
    ],
    specialTesting: [
      {
        title: "Visual testing using playwright",
        category: "Visual Testing",
        date: "2023-03-14",
        description: "Comprehensive guide to implementing visual regression testing with Playwright for UI consistency.",
        link: "https://medium.com/@kbalaji.kks/visual-testing-using-playwright-50943c57736a"
      },
      {
        title: "How to Perform Visual Testing with Cypress",
        category: "Visual Testing",
        date: "2023-05-30",
        description: "Setting up visual regression testing in Cypress for automated UI validation and screenshot comparison.",
        link: "https://medium.com/@kbalaji.kks/how-to-perform-visual-testing-with-cypress-c277352a0356"
      },
      {
        title: "How to handle Accessibility Testing| Axe-core| Playwright",
        category: "Accessibility",
        date: "2023-04-05",
        description: "Implementing comprehensive accessibility testing using Axe-core integration with Playwright automation.",
        link: "https://medium.com/@kbalaji.kks/how-to-handle-accessibility-testing-axe-core-playwright-884e6ae0c7a8"
      },
      {
        title: "K6: The Open-Source Tool for Stress Testing Your Web Applications",
        category: "Performance",
        date: "2023-01-19",
        description: "Complete guide to performance and stress testing with K6 for web application load testing.",
        link: "https://medium.com/@kbalaji.kks/k6-the-open-source-tool-for-stress-testing-your-web-applications-54cd055d2b2b"
      },
      {
        title: "Web App Resilience: Monkey Testing With Gremlins.js And Playwright",
        category: "Monkey Testing",
        date: "2023-05-13",
        description: "Implementing monkey testing using Gremlins.js with Playwright for application resilience testing.",
        link: "https://medium.com/@kbalaji.kks/web-app-resilience-monkey-testing-with-gremlins-js-and-playwright-1a9024564053"
      },
      {
        title: "Mocking User Inputs with Playwright, Faker.js and Randomatic libraries",
        category: "Test Data",
        date: "2023-09-27",
        description: "Generating realistic test data using Faker.js and Randomatic libraries in Playwright automation.",
        link: "https://medium.com/@kbalaji.kks/mocking-user-inputs-with-playwright-faker-js-and-randomatic-libraries-90162bfc9784"
      },
      {
        title: "Playwright-Handling test failures-Retry blocks of the code-Retry full test",
        category: "Test Reliability",
        date: "2023-02-15",
        description: "Strategies for handling test failures and implementing retry mechanisms in Playwright automation.",
        link: "https://medium.com/@kbalaji.kks/playwright-handling-test-failures-retry-blocks-of-the-code-retry-full-test-80f2d3e60b92"
      }
    ],
    reporting: [
      {
        title: "Test Automation|Test Reporting| Playwright- Currents.dev",
        category: "Test Reporting",
        date: "2023-10-20",
        description: "Integrating Currents.dev for comprehensive test reporting and analytics in Playwright automation.",
        link: "https://medium.com/@kbalaji.kks/test-automation-test-reporting-playwright-currents-dev-c367ba9f3679"
      },
      {
        title: "Test automation|Test Reporting| |Playwright|Monocart",
        category: "Test Reporting",
        date: "2022-11-26",
        description: "Using Monocart reporter for enhanced test reporting and visualization in Playwright.",
        link: "https://medium.com/@kbalaji.kks/test-automation-test-reporting-playwright-monocart-d4bb35ef12ad"
      },
      {
        title: "Test automation|Test Reporting| |Tesults.com|Playwright",
        category: "Test Reporting",
        date: "2022-10-22",
        description: "Integrated dashboard for test automation results using Tesults.com with Playwright.",
        link: "https://medium.com/@kbalaji.kks/test-automation-test-reporting-tesults-com-playwright-725021c58785"
      },
      {
        title: "Cloud Test Management Tools- Testomat.io- Free Plan",
        category: "Test Management",
        date: "2022-08-09",
        description: "Overview of Testomat.io cloud test management platform and its free plan features.",
        link: "https://medium.com/@kbalaji.kks/cloud-test-management-tools-testomat-io-7b1ea38ae580"
      }
    ],
    performance: [
      {
        title: "Enhancing Test Automation: Unleashing Cloud Parallel Execution Capabilities with Playwright",
        category: "Performance",
        date: "2023-12-14",
        description: "Implementing parallel test execution in cloud environments for faster test automation with Playwright.",
        link: "https://medium.com/@kbalaji.kks/enhancing-test-automation-unleashing-cloud-parallel-execution-capabilities-with-playwright-035569b0de2e"
      }
    ],
    overview: [
      {
        title: "Playwright Library-Overview",
        category: "Overview",
        date: "2023-01-18",
        description: "Introduction to Playwright library and its capabilities for browser automation across Chromium, Firefox, and WebKit.",
        link: "https://medium.com/@kbalaji.kks/playwright-library-overview-398e19fed708"
      },
      {
        title: "Playwright Network Insights: How to Intercept, Modify, Delete and Analyze network calls",
        category: "Network Testing",
        date: "2023-04-20",
        description: "Comprehensive guide to network traffic monitoring and modification using Playwright's network interception capabilities.",
        link: "https://medium.com/@kbalaji.kks/playwright-network-insights-how-to-intercept-modify-delete-and-analyze-network-calls-cde402f103e6"
      }
    ]
  };

  // Calculate total articles
  const totalMediumArticles = Object.values(mediumArticles).flat().length;

  // Skills data
  const skills = {
    automation: [
      { name: "Playwright" },
      { name: "Cypress.io" },
      { name: "Selenium WebDriver" },
      { name: "Mockservers & Test Strategy" }
    ],
    programming: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Java" },
      { name: "HTML/CSS" },
      { name: "Product Prototyping" }
    ],
    tools: [
      { name: "RestAssured" },
      { name: "Postman" },
      { name: "Git/GitHub" },
      { name: "Notion Systems" },
      { name: "AI-assisted Development" }
    ]
  };

  // Featured Articles in Newsletters - Real Links + TestGrid Publications
  const featuredArticles = [
    {
      newsletter: "Software Testing Notes",
      newsletterDescription: "Popular Substack newsletter covering software testing insights and industry trends",
      websiteUrl: "https://softwaretestingnotes.substack.com",
      articleTitle: "Playwright Testing Framework Best Practices",
      featuredDate: "2024-08-15",
      issueNumber: "#88",
      category: "Featured Article",
      impact: "Shared with testing community subscribers",
      directLink: "https://softwaretestingnotes.substack.com/p/issue-88-software-testing-notes?utm_source=publication-search"
    },
    {
      newsletter: "Software Testing Notes",
      newsletterDescription: "Popular Substack newsletter covering software testing insights and industry trends",
      websiteUrl: "https://softwaretestingnotes.substack.com",
      articleTitle: "Advanced Test Automation Strategies",
      featuredDate: "2024-06-20",
      issueNumber: "#79",
      category: "Community Highlight",
      impact: "Featured in weekly testing roundup",
      directLink: "https://softwaretestingnotes.substack.com/p/issue-79-software-testing-notes?utm_source=publication-search"
    },
    {
      newsletter: "LambdaTest LinkedIn Pulse",
      newsletterDescription: "Leading cloud testing platform's official LinkedIn publication featuring expert insights",
      websiteUrl: "https://www.lambdatest.com",
      articleTitle: "How to Handle Cypress Flaky Tests - Slow Down, You're Running Automation Way Too Fast",
      featuredDate: "2024-10-05",
      issueNumber: "Featured Article",
      category: "Expert Contribution",
      impact: "Published by LambdaTest for their LinkedIn audience",
      directLink: "https://www.linkedin.com/pulse/slow-down-youre-running-automation-way-too-fast-lambdatest/?trackingId=hA1TigbGT7CMHh9wKfxFRw%3D%3D"
    },
    {
      newsletter: "TestGrid.io Blog",
      newsletterDescription: "Professional testing platform blog featuring expert insights and industry best practices",
      websiteUrl: "https://testgrid.io/blog",
      articleTitle: "10 Best Practices to Improve Your Cypress Testing",
      featuredDate: "2025-02-15",
      issueNumber: "Guest Author",
      category: "Expert Guide",
      impact: "Published as comprehensive Cypress best practices guide",
      directLink: "https://testgrid.io/blog/cypress-best-practices/"
    },
    {
      newsletter: "TestGrid.io Blog",
      newsletterDescription: "Professional testing platform blog featuring expert insights and industry best practices",
      websiteUrl: "https://testgrid.io/blog",
      articleTitle: "Playwright vs Selenium: Speed, Features, and Use Cases",
      featuredDate: "2025-01-20",
      issueNumber: "Guest Author",
      category: "Framework Comparison",
      impact: "In-depth comparison guide for testing professionals",
      directLink: "https://testgrid.io/blog/playwright-vs-selenium/"
    },
    {
      newsletter: "TestGrid.io Blog",
      newsletterDescription: "Professional testing platform blog featuring expert insights and industry best practices",
      websiteUrl: "https://testgrid.io/blog",
      articleTitle: "Iframes in Cypress: Native Methods vs. cypress-iframe Plugin",
      featuredDate: "2024-09-10",
      issueNumber: "Guest Author",
      category: "Technical Deep Dive",
      impact: "Expert comparison of iframe handling techniques in Cypress",
      directLink: "https://testgrid.io/blog/handling-iframes-in-cypress/"
    },
    {
      newsletter: "Software Testing Weekly",
      newsletterDescription: "Weekly curated newsletter featuring the best software testing tools and resources",
      websiteUrl: "https://softwaretestingweekly.com",
      articleTitle: "Playwright Test Automation Tools and Resources",
      featuredDate: "2024-09-15",
      issueNumber: "#249",
      category: "Tools Spotlight",
      impact: "Featured in tools section for Playwright expertise",
      directLink: "https://softwaretestingweekly.com/issues/249#tools"
    },
    {
      newsletter: "Software Testing Weekly",
      newsletterDescription: "Weekly curated newsletter featuring the best software testing tools and resources",
      websiteUrl: "https://softwaretestingweekly.com",
      articleTitle: "Modern Testing Framework Comparison Guide",
      featuredDate: "2024-07-22",
      issueNumber: "#211",
      category: "Tools Feature",
      impact: "Highlighted for comprehensive framework analysis",
      directLink: "https://softwaretestingweekly.com/issues/211#tools"
    },
    {
      newsletter: "Software Testing Weekly",
      newsletterDescription: "Weekly curated newsletter featuring the best software testing tools and resources",
      websiteUrl: "https://softwaretestingweekly.com",
      articleTitle: "API Testing Best Practices with Modern Tools",
      featuredDate: "2024-05-10",
      issueNumber: "#171",
      category: "Tools Review",
      impact: "Featured for API testing tool expertise",
      directLink: "https://softwaretestingweekly.com/issues/171#tools"
    },
    {
      newsletter: "Software Testing Weekly",
      newsletterDescription: "Weekly curated newsletter featuring the best software testing tools and resources",
      websiteUrl: "https://softwaretestingweekly.com",
      articleTitle: "Cypress Testing Framework Deep Dive",
      featuredDate: "2024-04-15",
      issueNumber: "#160",
      category: "Tools Analysis",
      impact: "Recognized for Cypress framework expertise",
      directLink: "https://softwaretestingweekly.com/issues/160#tools"
    },
    {
      newsletter: "Software Testing Weekly",
      newsletterDescription: "Weekly curated newsletter featuring the best software testing tools and resources",
      websiteUrl: "https://softwaretestingweekly.com",
      articleTitle: "Test Automation Framework Design Patterns",
      featuredDate: "2024-04-01",
      issueNumber: "#158",
      category: "Tools Innovation",
      impact: "Featured for automation framework insights",
      directLink: "https://softwaretestingweekly.com/issues/158#tools"
    }
  ];
  // Helper functions
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Tab Components
  const TabButton = ({
    id,
    icon,
    label,
    isActive,
    onClick,
  }: {
    id: string;
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
    onClick: (id: string) => void;
  }) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${isActive
        ? 'bg-blue-600 text-white shadow-lg'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );

  const ProductCard = ({ product }: { product: typeof productLaunches[number] }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">{product.status}</span>
          </div>
          <p className="text-sm text-gray-500">{product.period}</p>
        </div>
        <Rocket className="w-7 h-7 text-blue-600 flex-shrink-0" />
      </div>

      <p className="text-gray-700 mb-4">{product.description}</p>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
        <div className="text-sm font-semibold text-gray-900 mb-1">Built for</div>
        <p className="text-sm text-gray-600 mb-3">{product.audience}</p>
        <div className="text-sm font-semibold text-gray-900 mb-1">My role</div>
        <p className="text-sm text-gray-600">{product.role}</p>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {product.metrics.map((metric, index) => (
          <div key={index} className="bg-blue-50 text-blue-800 text-sm font-medium px-3 py-2 rounded-lg">
            {metric}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {product.stack.map((item, index) => (
          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
            {item}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {product.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );

  const HomeTab = () => (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-xl">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-36 h-36 bg-white rounded-full flex items-center justify-center p-1 shadow-xl flex-shrink-0">
            <img
              src={`${process.env.PUBLIC_URL}/assets/profile-avatar.png`}
              alt="Balaji K profile avatar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
            <p className="text-xl mb-4">{personalInfo.title}</p>
            <p className="text-blue-100 max-w-3xl mb-5">{personalInfo.tagline}</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-5">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">SDET strategy</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Product engineering</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Engineering leadership path</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">AI workflow innovation</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Technical writing</span>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white bg-opacity-20 px-3 py-1 rounded-lg hover:bg-opacity-30 transition-all">
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a href={personalInfo.medium} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white bg-opacity-20 px-3 py-1 rounded-lg hover:bg-opacity-30 transition-all">
                <BookOpen className="w-4 h-4" />
                Medium
              </a>
              <a href={personalInfo.devto} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white bg-opacity-20 px-3 py-1 rounded-lg hover:bg-opacity-30 transition-all">
                <PenTool className="w-4 h-4" />
                DEV
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white bg-opacity-20 px-3 py-1 rounded-lg hover:bg-opacity-30 transition-all">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 bg-white bg-opacity-20 px-3 py-1 rounded-lg hover:bg-opacity-30 transition-all">
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Developer */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <Briefcase className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">About Developer</h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          I bring an SDET foundation into product development and engineering leadership: designing reliable test architecture,
          building working products, managing delivery trade-offs, and explaining systems clearly for teams and users.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">SDET Experience</h3>
            <p className="text-sm text-blue-800">Playwright, Cypress, API automation, mockserver strategy, visual testing, accessibility, and CI reliability.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">Product Development</h3>
            <p className="text-sm text-green-800">Shipping privacy-first tools like Finfolio, WealthOS Lite, and WealthOS Pro from problem discovery through launch content.</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-2">Engineering Leadership Path</h3>
            <p className="text-sm text-purple-800">Creating management-level impact through scoped systems, readable architecture, delivery visibility, and reusable engineering patterns.</p>
          </div>
        </div>
      </div>

      {/* Innovation Initiatives */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <Rocket className="w-8 h-8 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-900">AI & Engineering Operations Innovations</h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6">
          These initiatives show how I am extending SDET experience into product-quality strategy, team enablement,
          and engineering leadership impact through practical AI-assisted workflows.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {innovationInitiatives.map((initiative, index) => (
            <div key={index} className="bg-indigo-50 p-5 rounded-lg border border-indigo-200">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{initiative.title}</h3>
                  <p className="text-sm font-medium text-indigo-700">{initiative.focus}</p>
                </div>
                <Star className="w-5 h-5 text-indigo-600 flex-shrink-0" />
              </div>
              <p className="text-sm text-gray-700 mb-3">{initiative.description}</p>
              <div className="bg-white bg-opacity-70 border border-indigo-100 rounded-lg p-3 mb-4">
                <span className="text-sm font-semibold text-gray-900">Value: </span>
                <span className="text-sm text-gray-700">{initiative.impact}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {initiative.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-white text-indigo-800 px-2 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center gap-3">
            <Github className="w-8 h-8 text-blue-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">{publicGithubRepoCount}+</div>
              <div className="text-gray-600">GitHub Repos</div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-green-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">{totalMediumArticles}+</div>
              <div className="text-gray-600">Medium Articles</div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center gap-3">
            <PenTool className="w-8 h-8 text-purple-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">{devArticles.length}</div>
              <div className="text-gray-600">DEV Posts</div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-yellow-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">{featuredArticles.length}+</div>
              <div className="text-gray-600">Featured Articles</div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center gap-3">
            <Rocket className="w-8 h-8 text-red-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">{productLaunches.length}</div>
              <div className="text-gray-600">Products</div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Launches */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <Layers className="w-8 h-8 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-900">Recent Product Launches</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {productLaunches.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      {/* Skills Overview */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <Code className="w-8 h-8 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-900">Core Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-purple-700 mb-3">Test Automation</h3>
            {skills.automation.map((skill, index) => (
              <div key={index} className="mb-2">
                <span className="text-sm text-gray-700 bg-purple-50 px-3 py-1 rounded-full">{skill.name}</span>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-3">Programming & Product</h3>
            {skills.programming.map((skill, index) => (
              <div key={index} className="mb-2">
                <span className="text-sm text-gray-700 bg-blue-50 px-3 py-1 rounded-full">{skill.name}</span>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-green-700 mb-3">Modern Tools & AI</h3>
            {skills.tools.map((skill, index) => (
              <div key={index} className="mb-2">
                <span className="text-sm text-gray-700 bg-green-50 px-3 py-1 rounded-full">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ProductsTab = () => (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <Rocket className="w-8 h-8 text-green-600" />
        <h2 className="text-3xl font-bold text-gray-900">Product Engineering</h2>
      </div>

      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white p-6 rounded-xl">
        <h3 className="text-2xl font-bold mb-3">From SDET systems to shipped products</h3>
        <p className="text-green-50 max-w-4xl">
          My recent work shows the same engineering discipline in two directions: robust automation architecture for teams,
          and user-facing products for personal finance workflows. Finfolio is the full-control code product, WealthOS Lite is
          the simpler Notion starting point, and WealthOS Pro adds a local sync app for users who want automation without giving up data ownership.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {productLaunches.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="flex items-center gap-3 mb-5">
          <Layers className="w-7 h-7 text-indigo-600" />
          <h3 className="text-2xl font-bold text-gray-900">AI Workflow Innovations</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {innovationInitiatives.map((initiative, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-1">{initiative.title}</h4>
              <p className="text-sm font-medium text-indigo-700 mb-2">{initiative.focus}</p>
              <p className="text-sm text-gray-600 mb-3">{initiative.impact}</p>
              <div className="flex flex-wrap gap-2">
                {initiative.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-indigo-50 text-indigo-800 px-2 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProjectsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Github className="w-8 h-8 text-blue-600" />
        <h2 className="text-3xl font-bold text-gray-900">GitHub Repositories</h2>
      </div>

      {/* Sample Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-xs font-bold">i</span>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 mb-1">Sample Repository Selection</h4>
            <p className="text-blue-800 text-sm">
              This is a curated selection of {githubRepos.length} repositories from {publicGithubRepoCount}+ public GitHub repos, covering product builds and test automation frameworks.
              For the complete list of projects, visit my <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">GitHub profile</a>.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {githubRepos.map((repo, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <h3 className="repo-title truncate max-w-full" title={repo.name}>
                {repo.name}
              </h3>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <p className="text-gray-600 mb-4 text-sm">{repo.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <div className={`w-3 h-3 rounded-full ${repo.language === 'JavaScript' ? 'bg-yellow-400' :
                    repo.language === 'TypeScript' ? 'bg-blue-500' :
                      repo.language === 'Java' ? 'bg-red-500' :
                        repo.language === 'HTML' ? 'bg-orange-500' : 'bg-gray-400'
                    }`}></div>
                  {repo.language}
                </span>
              </div>
              <span>{formatDate(repo.updated_at)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const BlogsTab = () => (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="w-8 h-8 text-green-600" />
        <h2 className="text-3xl font-bold text-gray-900">Technical Articles ({totalMediumArticles} Articles)</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">{totalMediumArticles}+</div>
          <div className="text-gray-600">Medium Articles</div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">{mediumFollowerCount}</div>
          <div className="text-gray-600">Medium Followers</div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">{devArticles.length}</div>
          <div className="text-gray-600">DEV Community Posts</div>
        </div>
      </div>

      {/* Product Engineering Articles */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Rocket className="w-6 h-6 text-green-600" />
          Product Engineering & SDET Leadership ({mediumArticles.productEngineering.length} Articles)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mediumArticles.productEngineering.map((article, index) => (
            <div key={index} className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex justify-between items-start mb-2">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gray-900 text-sm hover:text-green-600 transition-colors cursor-pointer flex items-start gap-2"
                >
                  {article.title}
                  <ExternalLink className="w-3 h-3 mt-0.5 text-green-600" />
                </a>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded ml-2">{article.category}</span>
              </div>
              <p className="text-gray-600 text-xs mb-2">{article.description}</p>
              <span className="text-xs text-gray-500">{formatDate(article.date)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* DEV Community */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <PenTool className="w-6 h-6 text-purple-600" />
            DEV Community
          </h3>
          <a
            href={personalInfo.devto}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            @buildwithbalaji
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {devArticles.map((article, index) => (
            <div key={index} className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gray-900 text-sm hover:text-purple-600 transition-colors cursor-pointer flex items-start gap-2 mb-2"
              >
                {article.title}
                <ExternalLink className="w-3 h-3 mt-0.5 text-purple-600" />
              </a>
              <p className="text-gray-600 text-xs mb-2">{article.description}</p>
              <span className="text-xs text-gray-500">{formatDate(article.date)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* API Testing Articles */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Globe className="w-6 h-6 text-blue-600" />
          API Testing & Network Automation ({mediumArticles.apiTesting.length} Articles)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mediumArticles.apiTesting.map((article, index) => (
            <div key={index} className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex justify-between items-start mb-2">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gray-900 text-sm hover:text-blue-600 transition-colors cursor-pointer flex items-start gap-2"
                >
                  {article.title}
                  <ExternalLink className="w-3 h-3 mt-0.5 text-blue-600" />
                </a>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded ml-2">{article.category}</span>
              </div>
              <p className="text-gray-600 text-xs mb-2">{article.description}</p>
              <span className="text-xs text-gray-500">{formatDate(article.date)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* UI Testing Articles */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-purple-600" />
          UI Test Automation ({mediumArticles.uiTesting.length} Articles)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mediumArticles.uiTesting.map((article, index) => (
            <div key={index} className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="flex justify-between items-start mb-2">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gray-900 text-sm hover:text-purple-600 transition-colors cursor-pointer flex items-start gap-2"
                >
                  {article.title}
                  <ExternalLink className="w-3 h-3 mt-0.5 text-purple-600" />
                </a>
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded ml-2">{article.category}</span>
              </div>
              <p className="text-gray-600 text-xs mb-2">{article.description}</p>
              <span className="text-xs text-gray-500">{formatDate(article.date)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Special Testing Types */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Camera className="w-6 h-6 text-pink-600" />
          Specialized Testing ({mediumArticles.specialTesting.length} Articles)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mediumArticles.specialTesting.map((article, index) => (
            <div key={index} className="bg-pink-50 p-4 rounded-lg border border-pink-200">
              <div className="flex justify-between items-start mb-2">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gray-900 text-sm hover:text-pink-600 transition-colors cursor-pointer flex items-start gap-2"
                >
                  {article.title}
                  <ExternalLink className="w-3 h-3 mt-0.5 text-pink-600" />
                </a>
                <span className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded ml-2">{article.category}</span>
              </div>
              <p className="text-gray-600 text-xs mb-2">{article.description}</p>
              <span className="text-xs text-gray-500">{formatDate(article.date)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Test Reporting & Management */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <User className="w-6 h-6 text-yellow-600" />
          Test Reporting & Management ({mediumArticles.reporting.length} Articles)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mediumArticles.reporting.map((article, index) => (
            <div key={index} className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <div className="flex justify-between items-start mb-2">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gray-900 text-sm hover:text-yellow-600 transition-colors cursor-pointer flex items-start gap-2"
                >
                  {article.title}
                  <ExternalLink className="w-3 h-3 mt-0.5 text-yellow-600" />
                </a>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded ml-2">{article.category}</span>
              </div>
              <p className="text-gray-600 text-xs mb-2">{article.description}</p>
              <span className="text-xs text-gray-500">{formatDate(article.date)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Performance & Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Performance */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Coffee className="w-5 h-5 text-red-600" />
            Performance ({mediumArticles.performance.length} Article)
          </h3>
          <div className="space-y-3">
            {mediumArticles.performance.map((article, index) => (
              <div key={index} className="bg-red-50 p-3 rounded-lg border border-red-200">
                <div className="flex justify-between items-start mb-2">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900 text-sm hover:text-red-600 transition-colors cursor-pointer flex items-start gap-2"
                  >
                    {article.title}
                    <ExternalLink className="w-3 h-3 mt-0.5 text-red-600" />
                  </a>
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded ml-2">{article.category}</span>
                </div>
                <p className="text-gray-600 text-xs mb-2">{article.description}</p>
                <span className="text-xs text-gray-500">{formatDate(article.date)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Overview & Insights */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            Library Overview ({mediumArticles.overview.length} Articles)
          </h3>
          <div className="space-y-3">
            {mediumArticles.overview.map((article, index) => (
              <div key={index} className="bg-indigo-50 p-3 rounded-lg border border-indigo-200">
                <div className="flex justify-between items-start mb-2">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900 text-sm hover:text-indigo-600 transition-colors cursor-pointer flex items-start gap-2"
                  >
                    {article.title}
                    <ExternalLink className="w-3 h-3 mt-0.5 text-indigo-600" />
                  </a>
                  <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded ml-2">{article.category}</span>
                </div>
                <p className="text-gray-600 text-xs mb-2">{article.description}</p>
                <span className="text-xs text-gray-500">{formatDate(article.date)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const FeaturedTab = () => (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <Award className="w-8 h-8 text-yellow-600" />
        <h2 className="text-3xl font-bold text-gray-900">Featured in Industry Newsletters</h2>
      </div>

      {/* Overview Stats */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white p-6 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">{featuredArticles.length}</div>
            <div className="text-yellow-100">Articles Featured</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">4</div>
            <div className="text-yellow-100">Platform Publications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">2026</div>
            <div className="text-yellow-100">Active Portfolio Year</div>
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {featuredArticles.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            {/* Newsletter Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Newspaper className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{feature.newsletter}</h3>
                  <p className="text-sm text-gray-600">{feature.newsletterDescription}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                  {feature.category}
                </span>
              </div>
            </div>

            {/* Featured Article */}
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2 leading-tight">
                📰 "{feature.articleTitle}"
              </h4>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(feature.featuredDate)}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Issue {feature.issueNumber}
                </span>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-green-700">
                  <Award className="w-4 h-4" />
                  <span className="font-medium">Impact:</span>
                  <span>{feature.impact}</span>
                </div>
              </div>
            </div>

            {/* Newsletter Links */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <a
                  href={feature.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit {feature.newsletter}
                </a>
                {feature.directLink && (
                  <a
                    href={feature.directLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-600 hover:text-green-800 text-sm font-medium transition-colors"
                  >
                    <Star className="w-4 h-4" />
                    View Feature
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Industry Recognition */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Star className="w-6 h-6 text-yellow-600" />
          Industry Recognition Highlights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Platform Recognition</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-700">
                <Award className="w-4 h-4 text-yellow-600" />
                <span>Featured in Software Testing Notes (2 issues)</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <Award className="w-4 h-4 text-yellow-600" />
                <span>Featured in Software Testing Weekly (5 issues)</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <Award className="w-4 h-4 text-yellow-600" />
                <span>Published by LambdaTest on LinkedIn Pulse</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <Award className="w-4 h-4 text-yellow-600" />
                <span>Guest author on TestGrid.io Blog ({testGridArticles.length} articles)</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Featured Content Areas</h4>
            <div className="space-y-2">
              <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs mr-2">Playwright Tools</span>
              <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs mr-2">Cypress Framework</span>
              <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs mr-2">Visual Testing</span>
              <span className="inline-block bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs mr-2">Framework Comparison</span>
              <span className="inline-block bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs mr-2">Flaky Test Solutions</span>
              <span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs mr-2">Best Practices</span>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
        <div className="text-center">
          <h4 className="text-xl font-semibold text-gray-900 mb-2">SDET Leader, Product Builder & Technical Writer</h4>
          <p className="text-gray-600 mb-4">
            Featured in 11+ industry newsletters including Software Testing Weekly, Software Testing Notes, TestGrid.io, and LambdaTest LinkedIn Pulse.
            Specializing in Playwright automation frameworks, Cypress best practices, product-quality strategy, and privacy-first product development.
            Author of {totalMediumArticles}+ Medium articles with newer writing on Finfolio, WealthOS Lite, WealthOS Pro, and scalable SDET architecture.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}?subject=Content Feature Request`}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact for Features
            </a>
            <a
              href={personalInfo.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              View All Articles
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">BK</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">SDET Leader & Product Engineering Portfolio</h1>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <TabButton
                id="home"
                icon={<User className="w-4 h-4" />}
                label="Home"
                isActive={activeTab === 'home'}
                onClick={setActiveTab}
              />
              <TabButton
                id="products"
                icon={<Rocket className="w-4 h-4" />}
                label="Products"
                isActive={activeTab === 'products'}
                onClick={setActiveTab}
              />
              <TabButton
                id="projects"
                icon={<Github className="w-4 h-4" />}
                label="Projects"
                isActive={activeTab === 'projects'}
                onClick={setActiveTab}
              />
              <TabButton
                id="blogs"
                icon={<BookOpen className="w-4 h-4" />}
                label="Blogs"
                isActive={activeTab === 'blogs'}
                onClick={setActiveTab}
              />
              <TabButton
                id="featured"
                icon={<Award className="w-4 h-4" />}
                label="Featured"
                isActive={activeTab === 'featured'}
                onClick={setActiveTab}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === 'home' && <HomeTab />}
        {activeTab === 'products' && <ProductsTab />}
        {activeTab === 'projects' && <ProjectsTab />}
        {activeTab === 'blogs' && <BlogsTab />}
        {activeTab === 'featured' && <FeaturedTab />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-600">© 2026 {personalInfo.name}. SDET leadership, product engineering, and technical writing portfolio.</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700">
                <Github className="w-5 h-5" />
              </a>
              <a href={personalInfo.medium} target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700">
                <BookOpen className="w-5 h-5" />
              </a>
              <a href={personalInfo.devto} target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700">
                <PenTool className="w-5 h-5" />
              </a>
              <a href={`mailto:${personalInfo.email}`}
                className="text-gray-500 hover:text-gray-700">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, MapPin, Calendar, Coffee, Camera, Code, BookOpen, User, Mail, Linkedin, Globe, Award, Star, Newspaper } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [loading, setLoading] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    name: "Balaji K",
    title: "Test Automation Engineer & Technical Writer",
    email: "kbalaji.kks@gmail.com",
    github: "https://github.com/balajiregt",
    medium: "https://medium.com/@kbalaji.kks",
    linkedin: "https://linkedin.com/in/kbalaji-kks"
  });

  // GitHub Repositories
  const githubRepos = [
    {
      name: "playwright_pom_fixtures_modular_framework_template",
      description: "Playwright page object model with modular classes for actions, assertions and incorporating fixtures handling setup and teardown efficiently.",
      language: "TypeScript",
      updated_at: "2025-06-15T10:30:00Z",
      html_url: "https://github.com/balajiregt/playwright_pom_fixtures_modular_framework_template"
    },
    {
      name: "RestAssured_Practice",
      description: "REST API automation testing practice using RestAssured library with Java",
      language: "Java",
      updated_at: "2025-05-10T09:15:00Z",
      html_url: "https://github.com/balajiregt/RestAssured_Practice"
    },
    {
      name: "Java_Practice",
      description: "Java programming practice and automation testing utilities",
      language: "Java",
      updated_at: "2025-04-25T16:45:00Z",
      html_url: "https://github.com/balajiregt/Java_Practice"
    },
    {
      name: "Playwright_test_functional",
      description: "Sanity test cases",
      language: "JavaScript",
      updated_at: "2025-01-15T12:00:00Z",
      html_url: "https://github.com/balajiregt/Playwright_test_functional"
    },
    {
      name: "playwright_test_practice",
      description: "Playwright testing practice projects including functional tests and POM framework",
      language: "JavaScript",
      updated_at: "2025-01-10T14:30:00Z",
      html_url: "https://github.com/balajiregt/playwright_test_practice"
    },
    {
      name: "Playwright_test_API",
      description: "API test cases using Playwright for REST API testing",
      language: "JavaScript",
      updated_at: "2025-01-05T11:20:00Z",
      html_url: "https://github.com/balajiregt/Playwright_test_API"
    },
    {
      name: "Cypress_practice",
      description: "Cypress end-to-end testing practice and examples",
      language: "JavaScript",
      updated_at: "2025-01-01T10:00:00Z",
      html_url: "https://github.com/balajiregt/Cypress_practice"
    },
    {
      name: "CypressTestProject",
      description: "Cypress test project",
      language: "JavaScript",
      updated_at: "2025-01-01T10:00:00Z",
      html_url: "https://github.com/balajiregt/CypressTestProject"
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

  // Medium Articles (Categorized) - Updated with all articles and links
  const mediumArticles = {
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
      { name: "AI Testing Solutions" }
    ],
    programming: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Java" },
      { name: "HTML/CSS" }
    ],
    tools: [
      { name: "RestAssured" },
      { name: "Postman" },
      { name: "Git/GitHub" },
      { name: "MCP & Browser Agents" }
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
  const travelPlaces = [
    { name: "Kerala Backwaters", country: "India", year: 2024, description: "Serene houseboat experience" },
    { name: "Mysore", country: "India", year: 2025, description: "Famous for Mysore Palace, silk sarees, and sandalwood" },
    { name: "Coorg", country: "India", year: 2025, description: "Beautiful coffee plantations and misty hills" },
    { name: "Kodaikanal", country: "India", year: 2024, description: "Beautiful hill station with a lake and forests" }
  ];

  // Hobbies
  const hobbies = [
    { icon: <Code className="w-6 h-6" />, name: "Coding", description: "Building innovative test automation solutions" },
    { icon: <MapPin className="w-6 h-6" />, name: "Driving", description: "Exploring new places and enjoying road trips" },
    { icon: <BookOpen className="w-6 h-6" />, name: "Technical Writing", description: "Sharing knowledge through blogs" },
    { icon: <Coffee className="w-6 h-6" />, name: "Playing Cricket", description: "Weekend cricket matches and staying active" }
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

  const HomeTab = () => (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-xl">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
            <User className="w-16 h-16 text-gray-600" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
            <p className="text-xl mb-4">{personalInfo.title}</p>
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

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center gap-3">
            <Github className="w-8 h-8 text-blue-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">{githubRepos.length}+</div>
              <div className="text-gray-600">Repositories</div>
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
            <Award className="w-8 h-8 text-yellow-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">{featuredArticles.length}+</div>
              <div className="text-gray-600">Featured Articles</div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center gap-3">
            <MapPin className="w-8 h-8 text-red-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">{travelPlaces.length}+</div>
              <div className="text-gray-600">Places Visited</div>
            </div>
          </div>
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
            <h3 className="text-lg font-semibold text-purple-700 mb-3">🎭 Test Automation</h3>
            {skills.automation.map((skill, index) => (
              <div key={index} className="mb-2">
                <span className="text-sm text-gray-700 bg-purple-50 px-3 py-1 rounded-full">{skill.name}</span>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-3">💻 Programming</h3>
            {skills.programming.map((skill, index) => (
              <div key={index} className="mb-2">
                <span className="text-sm text-gray-700 bg-blue-50 px-3 py-1 rounded-full">{skill.name}</span>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-green-700 mb-3">🔧 Modern Tools & AI</h3>
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
              This is a curated selection of my key GitHub repositories showcasing my expertise in test automation frameworks.
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
            <div className="text-3xl font-bold mb-2">2024</div>
            <div className="text-yellow-100">Active Recognition Year</div>
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
                <span>Guest author on TestGrid.io Blog (4 articles)</span>
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
          <h4 className="text-xl font-semibold text-gray-900 mb-2">Industry-Recognized Testing Expert</h4>
          <p className="text-gray-600 mb-4">
            My expertise in testing tools and frameworks has been consistently featured across industry newsletters and platform publications.
            From newsletter features to LambdaTest LinkedIn Pulse publications, I specialize in Playwright, Cypress, flaky test solutions, and modern automation frameworks.
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

  const PersonalTab = () => (
    <div className="space-y-8">
      {/* Hobbies */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Coffee className="w-8 h-8 text-orange-600" />
          <h2 className="text-3xl font-bold text-gray-900">Hobbies & Interests</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hobbies.map((hobby, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="text-orange-600">{hobby.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{hobby.name}</h3>
                  <p className="text-gray-600">{hobby.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Travel */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="w-8 h-8 text-red-600" />
          <h2 className="text-3xl font-bold text-gray-900">Travel Adventures</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelPlaces.map((place, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{place.name}</h3>
                  <p className="text-gray-600">{place.country}</p>
                </div>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                  {place.year}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{place.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">BK</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">Portfolio Newsletter V1</h1>
            </div>

            <div className="flex items-center gap-2">
              <TabButton
                id="home"
                icon={<User className="w-4 h-4" />}
                label="Home"
                isActive={activeTab === 'home'}
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
              <TabButton
                id="personal"
                icon={<MapPin className="w-4 h-4" />}
                label="Personal"
                isActive={activeTab === 'personal'}
                onClick={setActiveTab}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === 'home' && <HomeTab />}
        {activeTab === 'projects' && <ProjectsTab />}
        {activeTab === 'blogs' && <BlogsTab />}
        {activeTab === 'featured' && <FeaturedTab />}
        {activeTab === 'personal' && <PersonalTab />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-600">© 2025 {personalInfo.name}. Portfolio V1 - Clean & Hyperlinked</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700">
                <Github className="w-5 h-5" />
              </a>
              <a href={personalInfo.medium} target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700">
                <BookOpen className="w-5 h-5" />
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
# Playwright-HerokuApp Project

This repository contains an automated testing project using [Playwright](https://playwright.dev/) with TypeScript. The main objective is to run end-to-end tests for web applications—specifically as a demonstration on Heroku ensuring the reliability and quality of developed features.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Playwright Configuration](#playwright-configuration)
- [Running Tests](#running-tests)
- [Reporting](#reporting)

## Features

- **Playwright**: Utilizes Microsoft's Playwright for end-to-end testing across modern browsers (Chromium, Firefox, WebKit).
- **TypeScript**: Provides strong typing and improved maintainability.
- **Page Object Model (POM)**: Organize application pages and elements using a structured `pom` folder.
- **Fixtures**: Encapsulate setup and teardown logic, allowing reusable code to be shared across multiple tests. They make tests more concise, maintainable, and help provide data or resources to tests in a structured, consistent way.
- **Flexible Configuration**: Easily modify test parameters (browsers, timeouts, etc.) via configuration files.
- **Reporting**: Generates detailed test reports in the `playwright-report` or `test-results` directories.

## Requirements

- **Node.js** (version 14 or higher)
- **npm** or **yarn** (for dependency management)
- **Git** (optional but recommended for cloning and version control)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/lucassdelafuente/playwright-herokuapp.git
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Install browsers for Playwright**:
   ```bash
   npx playwright install
   ```

## Playwright Configuration

The playwright.config.ts file contains the main configuration for the test environment, including:

- Browsers to test (Chromium, Firefox, WebKit)
- Test timeouts
- Paths for screenshots and videos

## Running Tests

1. Run all tests on Chrome (check pachage file to run other browsers):

   ```bash
   npm run desktop-chromium
   ```

2. Run a specific test file:
   ```bash
   npm run desktop-chromium tests/brokenImages.spec.ts
   ```

## Reporting

Test reports are generated in the playwright-report folder.

To open an interactive report:

```bash
  npx playwright show-report
```

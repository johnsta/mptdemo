# Microsoft Playwright Testing demo
This demo shows how to run 

## Run tests locally

``` bash
npm install
npx playwright test
```

## Run tests at scale with MPT

Create .env with required environment variables that authenticate with Microsoft Playwright Testing workspace. Follow the [Quickstart](https://learn.microsoft.com/en-au/azure/playwright-testing/quickstart-run-end-to-end-tests?tabs=playwrightcli) for more instructions. 

Run tests at scale with many workers:
``` bash
npx playwright test --workers=30 -c playwright.service.config.ts
```
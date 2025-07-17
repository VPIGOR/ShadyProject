# Shady Project - Playwright Automation Testing

A comprehensive automation testing suite built with Playwright, featuring both API and UI tests for web application testing.

## 📁 Project Structure

```
shady_project/
├── tests/
│   ├── api/                    # API Test Files
│   │   ├── api-tests.spec.ts   # API test scenarios
│   │   └── api-tests-data.ts   # API test data and utilities
│   └── ui/                     # UI Test Files
│       ├── ui-tests.spec.ts    # UI test scenarios
│       ├── pages/              # Page Object Model classes
│       │   ├── AdminRoomPage.ts
│       │   ├── LoginPage.ts
│       │   └── MainPage.ts
│       └── test-data/          # UI test data files
│           └── contact-form-data.csv
├── playwright.config.ts        # Playwright configuration
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd shady_project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npm run install:browsers
   ```

## 🧪 Running Tests

### Run All Tests
```bash
npm test
```

### Run Specific Test Suites

**API Tests Only:**
```bash
npm run test:api
```

**UI Tests Only:**
```bash
npm run test:ui
```

### Test Execution Options

**Run tests in headed mode (with browser UI):**
```bash
npm run test:headed
```

**Debug tests:**
```bash
npm run test:debug
```

**View test report:**
```bash
npm run test:report
```

## 📋 Test Categories

### 🔌 API Tests (`tests/api/`)

API tests validate backend functionality and endpoints:

- **Authentication**: Admin login validation
- **Booking Operations**: Create bookings with various scenarios
- **Contact Form**: Message submission testing
- **Negative Testing**: Invalid data handling

**Key Features:**
- Request/Response validation
- Status code verification
- JSON response structure testing
- Error handling scenarios

### 🖥️ UI Tests (`tests/ui/`)

UI tests validate frontend functionality and user interactions:

- **Room Management**: Create and validate room operations
- **Contact Form**: Form submission without required fields
- **Page Navigation**: User flow testing
- **Visual Validation**: Element visibility and interaction

**Key Features:**
- Page Object Model (POM) architecture
- Dynamic test data generation
- Cross-browser testing support
- Element interaction validation

## 🏗️ Architecture

### Page Object Model (POM)

The project uses the Page Object Model pattern for maintainable and reusable UI tests:

- `LoginPage.ts` - Handles authentication flows
- `AdminRoomPage.ts` - Manages room-related operations
- `MainPage.ts` - Handles main page interactions

### Test Data Management

- **API Tests**: Centralized test data in `api-tests-data.ts`
- **UI Tests**: CSV files and dynamic data generation
- **Random Data**: Generated for unique test scenarios

## ⚙️ Configuration

### Playwright Configuration (`playwright.config.ts`)

- **Base URL**: `https://automationintesting.online`
- **Parallel Execution**: Enabled for faster test runs
- **Browser Support**: Chrome, Firefox, Safari
- **Reporting**: HTML reports with trace collection
- **Retries**: Configured for CI environments

### Environment Setup

The project is configured to work with:
- **Target Application**: Automation In Testing website
- **Test Execution**: Local and CI environments
- **Reporting**: HTML reports with detailed traces

## 📊 Test Reports

After running tests, view detailed reports:

```bash
npm run test:report
```

Reports include:
- Test execution summary
- Screenshots for failed tests
- Video recordings (if configured)
- Detailed error logs
- Performance metrics

## 🔄 Continuous Integration

The project includes GitHub Actions workflow (`.github/workflows/playwright.yml`) for automated testing on:
- Pull requests
- Push to main branch
- Scheduled runs

## 🛠️ Development Guidelines

### Adding New Tests

**API Tests:**
1. Add test cases to `tests/api/api-tests.spec.ts`
2. Update test data in `tests/api/api-tests-data.ts`
3. Follow existing naming conventions

**UI Tests:**
1. Create/update page objects in `tests/ui/pages/`
2. Add test scenarios to `tests/ui/ui-tests.spec.ts`
3. Store test data in `tests/ui/test-data/`

### Best Practices

- Use descriptive test names
- Implement proper error handling
- Keep test data separate from test logic
- Use Page Object Model for UI tests
- Add appropriate assertions
- Include both positive and negative test scenarios

## 🐛 Troubleshooting

### Common Issues

1. **Browser Installation Issues:**
   ```bash
   npm run install:browsers
   ```

2. **Test Failures:**
   - Check the HTML report: `npm run test:report`
   - Run in debug mode: `npm run test:debug`
   - Verify base URL in `playwright.config.ts`

3. **Dependencies:**
   ```bash
   npm install
   ```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add your tests following the existing structure
4. Ensure all tests pass
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

---

**Happy Testing! 🎉**

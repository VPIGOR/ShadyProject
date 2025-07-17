# Contributing to Shady Project

Thank you for your interest in contributing to this Playwright automation testing project! This document provides guidelines and instructions for contributors.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Adding Tests](#adding-tests)
- [Pull Request Process](#pull-request-process)
- [Testing Guidelines](#testing-guidelines)

## 🚀 Getting Started

1. **Fork the repository** to your GitHub account
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yourusername/shady_project.git
   cd shady_project
   ```
3. **Set up the upstream remote:**
   ```bash
   git remote add upstream https://github.com/original-owner/shady_project.git
   ```

## 🛠️ Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install Playwright browsers:**
   ```bash
   npm run install:browsers
   ```

3. **Verify setup by running tests:**
   ```bash
   npm test
   ```

## 📁 Project Structure

### Test Organization

- **`tests/api/`** - API tests and related data
- **`tests/ui/`** - UI tests with Page Object Model
- **`tests/ui/pages/`** - Page Object classes
- **`tests/ui/test-data/`** - Test data files

### Key Files

- **`playwright.config.ts`** - Playwright configuration
- **`package.json`** - Dependencies and scripts
- **`.github/workflows/`** - CI/CD workflows

## 📝 Coding Standards

### General Guidelines

- Use **TypeScript** for all test files
- Follow **consistent naming conventions**
- Include **meaningful comments** for complex logic
- Maintain **clean, readable code**

### Naming Conventions

#### Test Files
- API tests: `*.api.spec.ts`
- UI tests: `*.ui.spec.ts` or `*.spec.ts`

#### Test Names
- Use descriptive names: `"Should create room with valid data"`
- Include test type: `"(Positive)"` or `"(Negative)"`

#### Page Objects
- Use PascalCase: `LoginPage`, `AdminRoomPage`
- End with "Page": `ContactFormPage`

### Code Style

```typescript
// Good - Descriptive test name and clear structure
test('Create room with valid data (Positive)', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login();
  
  const roomPage = new AdminRoomPage(page);
  const roomData = {
    number: generateRoomNumber(),
    type: 'Single',
    price: '100'
  };
  
  await roomPage.createRoom(roomData.number, roomData.type, roomData.price);
  expect(await roomPage.isRoomVisible(roomData.number)).toBe(true);
});
```

## 🧪 Adding Tests

### API Tests

1. **Location**: Add to `tests/api/api-tests.spec.ts`
2. **Test Data**: Update `tests/api/api-tests-data.ts`
3. **Structure**:
   ```typescript
   test('API endpoint description (Positive/Negative)', async ({ request }) => {
     // Arrange
     const testData = getTestData();
     
     // Act
     const response = await request.post('/api/endpoint', {
       data: testData
     });
     
     // Assert
     expect(response.status()).toBe(200);
   });
   ```

### UI Tests

1. **Location**: Add to `tests/ui/ui-tests.spec.ts`
2. **Page Objects**: Create/update in `tests/ui/pages/`
3. **Test Data**: Store in `tests/ui/test-data/`
4. **Structure**:
   ```typescript
   test('UI functionality description (Positive/Negative)', async ({ page }) => {
     // Arrange
     const pageObject = new PageObjectClass(page);
     
     // Act
     await pageObject.performAction();
     
     // Assert
     expect(await pageObject.isExpectedResultVisible()).toBe(true);
   });
   ```

### Page Objects

Create reusable page objects for UI tests:

```typescript
export class ExamplePage {
  constructor(private page: Page) {}
  
  async navigateToPage(): Promise<void> {
    await this.page.goto('/example');
  }
  
  async performAction(): Promise<void> {
    await this.page.click('[data-testid="action-button"]');
  }
  
  async isResultVisible(): Promise<boolean> {
    return await this.page.isVisible('[data-testid="result"]');
  }
}
```

## 🔄 Pull Request Process

### Before Submitting

1. **Sync with upstream:**
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Run all tests:**
   ```bash
   npm test
   ```

4. **Check code formatting and linting** (if applicable)

### PR Requirements

- [ ] **Descriptive title** and detailed description
- [ ] **All tests pass** locally and in CI
- [ ] **New tests added** for new functionality
- [ ] **Documentation updated** (if needed)
- [ ] **No breaking changes** (unless discussed)

### PR Template

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] All existing tests pass
- [ ] New tests added
- [ ] Manual testing completed

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
```

## 🎯 Testing Guidelines

### Test Structure

Use the **Arrange-Act-Assert (AAA)** pattern:

```typescript
test('Example test case', async ({ page, request }) => {
  // Arrange - Set up test data and conditions
  const testData = { /* test data */ };
  
  // Act - Perform the action being tested
  const result = await performAction(testData);
  
  // Assert - Verify the expected outcome
  expect(result).toBe(expectedValue);
});
```

### Best Practices

#### ✅ Do's
- Write **independent tests** (no dependencies between tests)
- Use **meaningful assertions**
- Include **both positive and negative scenarios**
- Clean up test data when necessary
- Use **Page Object Model** for UI tests
- Generate **dynamic test data** when appropriate

#### ❌ Don'ts
- Avoid **hard-coded waits** (`page.waitForTimeout()`)
- Don't test **implementation details**
- Avoid **brittle selectors** (prefer data-testid)
- Don't write **overly complex tests**
- Avoid **duplicate test logic**

### Error Handling

```typescript
test('Error handling example', async ({ page }) => {
  try {
    await page.goto('/invalid-url');
  } catch (error) {
    expect(error.message).toContain('expected error message');
  }
});
```

## 🐛 Debugging

### Local Debugging

```bash
# Run tests in debug mode
npm run test:debug

# Run specific test file
npx playwright test tests/ui/ui-tests.spec.ts --debug

# Run tests with headed browser
npm run test:headed
```

### CI Debugging

- Check **GitHub Actions logs**
- Download **test artifacts** (reports, screenshots)
- Review **error messages** and stack traces

## 📞 Getting Help

- **Create an issue** for bugs or feature requests
- **Start a discussion** for questions
- **Review existing issues** before creating new ones

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to the Shady Project! 🎉

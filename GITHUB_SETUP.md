# GitHub Setup Instructions

Follow these steps to add your Playwright project to GitHub:

## 📋 Prerequisites

- Git installed on your computer
- GitHub account created
- Your project files ready (which we've just organized)

## 🚀 Step-by-Step GitHub Setup

### Step 1: Initialize Git Repository (if not already done)

Open PowerShell in your project directory and run:

```powershell
cd "d:\playwright_progects\shady_project"
git init
```

### Step 2: Stage All Files

```powershell
git add .
```

### Step 3: Create Initial Commit

```powershell
git commit -m "Initial commit: Playwright automation testing project with API and UI tests"
```

### Step 4: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the repository details:
   - **Repository name**: `shady_project` (or your preferred name)
   - **Description**: "Playwright automation testing project with API and UI tests"
   - **Visibility**: Choose Public or Private
   - **DON'T** initialize with README (we already have one)
   - **DON'T** add .gitignore (we already have one)
5. Click "Create repository"

### Step 5: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```powershell
git remote add origin https://github.com/yourusername/shady_project.git
git branch -M main
git push -u origin main
```

**Replace `yourusername` with your actual GitHub username!**

### Step 6: Verify Upload

1. Refresh your GitHub repository page
2. You should see all your files including:
   - README.md
   - package.json
   - playwright.config.ts
   - tests/ folder with API and UI tests
   - .github/workflows/ folder

## 🔄 Future Updates

When you make changes to your project:

```powershell
git add .
git commit -m "Description of your changes"
git push
```

## ✅ Verification Checklist

After setup, verify your repository has:

- [ ] **README.md** with clear setup instructions
- [ ] **Proper folder structure** (tests/api/ and tests/ui/ separated)
- [ ] **package.json** with test scripts
- [ ] **GitHub Actions workflow** for CI/CD
- [ ] **.gitignore** excluding unnecessary files
- [ ] **CONTRIBUTING.md** for collaboration guidelines

## 🎯 Your Repository Structure

Your GitHub repository should now show:

```
shady_project/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── tests/
│   ├── api/
│   │   ├── api-tests.spec.ts
│   │   └── api-tests-data.ts
│   └── ui/
│       ├── ui-tests.spec.ts
│       ├── pages/
│       └── test-data/
├── .gitignore
├── CONTRIBUTING.md
├── README.md
├── package.json
└── playwright.config.ts
```

## 🚨 Common Issues & Solutions

### Issue: Git not recognized
**Solution**: Install Git from [git-scm.com](https://git-scm.com/)

### Issue: Authentication required
**Solution**: 
1. Use Personal Access Token instead of password
2. Or use GitHub CLI: `gh auth login`

### Issue: Repository already exists
**Solution**: Use different name or delete existing repository

### Issue: Large files
**Solution**: Check .gitignore excludes node_modules/ and test reports

## 🎉 Success!

Your Playwright automation project is now on GitHub with:

✅ **Clear separation** between API and UI tests  
✅ **Comprehensive README** with setup instructions  
✅ **Automated CI/CD** with GitHub Actions  
✅ **Professional project structure**  
✅ **Easy-to-run test commands**  

## 📋 Next Steps

1. **Clone and test** on a different machine to verify setup
2. **Add team members** as collaborators
3. **Set up branch protection** rules for main branch
4. **Configure notifications** for test failures
5. **Add more tests** following the established patterns

Your project is now ready for professional development and collaboration! 🚀

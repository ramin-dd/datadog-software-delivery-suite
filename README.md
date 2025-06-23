# 📦 Datadog Software Delivery Suite

A Next.js application demonstrating comprehensive CI/CD observability with Datadog, including CI Visibility, Test Visibility, Deployment Tracking, and DORA metrics.

## 🌟 Features

- **CI Visibility**: Complete pipeline observability with Datadog
- **Test Visibility**: Test performance tracking and insights
- **Deployment Tracking**: Automated deployment markers and monitoring
- **DORA Metrics**: Four key DevOps metrics (Deployment Frequency, Lead Time, Change Failure Rate, Recovery Time)
- **Quality Gates**: Automated quality enforcement in CI/CD
- **Modern UI**: Built with Next.js 14, TypeScript, Tailwind CSS, and Radix UI

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Radix UI
- **Testing**: Jest + Playwright
- **Observability**: Datadog (CI, Test, Deployment visibility)
- **CI/CD**: GitHub Actions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Datadog account and API key
- GitHub repository

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd datadog-software-delivery-suite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your Datadog credentials:
   ```env
   DD_API_KEY=your_datadog_api_key_here
   DD_APP_KEY=your_datadog_app_key_here
   DD_ENV=development
   DD_SERVICE=datadog-suite
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Datadog Integration Setup

### 1. CI Visibility

CI Visibility is automatically configured in the GitHub Actions workflow (`.github/workflows/ci.yml`). It will:

- Track build performance and failures
- Monitor test execution times
- Provide pipeline observability

### 2. Test Visibility

Tests are instrumented with Datadog tracing:

```bash
# Run tests with Datadog instrumentation
npm run test:datadog

# Or manually
DD_ENV=test DD_SERVICE=datadog-suite dd-trace-ci run jest
```

### 3. Deployment Tracking

Use the provided script to notify Datadog of deployments:

```bash
# Make script executable
chmod +x scripts/deploy-notify.sh

# Notify deployment
./scripts/deploy-notify.sh
```

Or use the npm script:
```bash
npm run deploy:notify
```

### 4. Quality Gates

Quality gates are enforced in CI:

```bash
npm run quality-gate
```

## 🧪 Testing

### Unit Tests
```bash
npm test                 # Run once
npm run test:watch       # Watch mode
npm run test:coverage    # With coverage
```

### E2E Tests
```bash
npm run test:e2e         # Run Playwright tests
```

### With Datadog Instrumentation
```bash
npm run test:datadog     # Run tests with Datadog tracing
```

## 🏗️ Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # React components
│   │   └── ui/             # Reusable UI components
│   ├── lib/                # Utility functions
│   └── __tests__/          # Unit tests
├── tests/
│   └── e2e/                # End-to-end tests
├── scripts/
│   └── deploy-notify.sh    # Deployment notification script
├── .github/
│   └── workflows/          # GitHub Actions CI/CD
└── docs/                   # Documentation
```

## 📈 DORA Metrics Dashboard

The application displays four key DORA metrics:

1. **Deployment Frequency**: How often deployments occur
2. **Lead Time**: Time from commit to production
3. **Change Failure Rate**: Percentage of deployments causing failures
4. **Recovery Time**: Time to recover from failures

These metrics are automatically calculated by Datadog based on your CI/CD data.

## 🔧 Configuration

### GitHub Secrets

Add these secrets to your GitHub repository:

- `DD_API_KEY`: Your Datadog API key
- `DD_APP_KEY`: Your Datadog Application key (optional)

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DD_API_KEY` | Datadog API Key | Required |
| `DD_APP_KEY` | Datadog App Key | Optional |
| `DD_ENV` | Environment name | development |
| `DD_SERVICE` | Service name | datadog-suite |
| `DD_VERSION` | Version/build | git SHA |
| `DD_SITE` | Datadog site | datadoghq.com |

## 📚 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit tests |
| `npm run test:datadog` | Run tests with Datadog |
| `npm run test:e2e` | Run E2E tests |
| `npm run deploy:notify` | Notify Datadog of deployment |
| `npm run quality-gate` | Run quality gate checks |

## 🎯 Success Criteria

| Metric | Target | Status |
|--------|--------|--------|
| CI build coverage in Datadog | 100% | ✅ |
| Test suite insights visible | Yes | ✅ |
| Deployment markers tracked | Yes | ✅ |
| DORA metrics dashboard | Enabled | ✅ |
| Quality gate enforcement | Optional | ✅ |

## 📖 Documentation

- [Datadog CI Visibility](https://docs.datadoghq.com/continuous_integration/)
- [Datadog Test Visibility](https://docs.datadoghq.com/tests/)
- [Datadog Deployment Tracking](https://docs.datadoghq.com/continuous_delivery/)
- [DORA Metrics](https://docs.datadoghq.com/dora_metrics/)
- [Quality Gates](https://docs.datadoghq.com/quality_gates/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For questions and support:

- 📖 Check the [documentation](docs/)
- 🐛 [Open an issue](../../issues)
- 💬 [Discussions](../../discussions) # Testing CI Pipeline

This commit will trigger our GitHub Actions workflow with Datadog integration.

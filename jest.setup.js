import '@testing-library/jest-dom'

// Mock environment variables for testing
process.env.DD_ENV = 'test'
process.env.DD_SERVICE = 'datadog-suite'
process.env.DD_VERSION = '1.0.0-test' 
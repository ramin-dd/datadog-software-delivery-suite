import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'

// Mock the UI components to avoid dependency issues during testing
jest.mock('@/components/ui/tabs', () => ({
  Tabs: ({ children }: { children: React.ReactNode }) => <div data-testid="tabs">{children}</div>,
  TabsContent: ({ children }: { children: React.ReactNode }) => <div data-testid="tabs-content">{children}</div>,
  TabsList: ({ children }: { children: React.ReactNode }) => <div data-testid="tabs-list">{children}</div>,
  TabsTrigger: ({ children }: { children: React.ReactNode }) => <button data-testid="tabs-trigger">{children}</button>,
}))

jest.mock('@/components/ui/card', () => ({
  Card: ({ children }: { children: React.ReactNode }) => <div data-testid="card">{children}</div>,
  CardContent: ({ children }: { children: React.ReactNode }) => <div data-testid="card-content">{children}</div>,
  CardDescription: ({ children }: { children: React.ReactNode }) => <div data-testid="card-description">{children}</div>,
  CardHeader: ({ children }: { children: React.ReactNode }) => <div data-testid="card-header">{children}</div>,
  CardTitle: ({ children }: { children: React.ReactNode }) => <h3 data-testid="card-title">{children}</h3>,
}))

jest.mock('@/components/ui/button', () => ({
  Button: ({ children }: { children: React.ReactNode }) => <button data-testid="button">{children}</button>,
}))

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Activity: () => <div data-testid="activity-icon" />,
  BarChart3: () => <div data-testid="barchart3-icon" />,
  GitBranch: () => <div data-testid="gitbranch-icon" />,
  CheckCircle: () => <div data-testid="checkcircle-icon" />,
  AlertCircle: () => <div data-testid="alertcircle-icon" />,
  Clock: () => <div data-testid="clock-icon" />,
  TrendingUp: () => <div data-testid="trendingup-icon" />,
}))

describe('HomePage', () => {
  it('renders the main title', () => {
    render(<HomePage />)
    
    expect(screen.getByText('Software Delivery Suite')).toBeInTheDocument()
    expect(screen.getByText('Powered by Datadog - CI/CD visibility, test performance, and DORA metrics')).toBeInTheDocument()
  })

  it('displays DORA metrics cards', () => {
    render(<HomePage />)
    
    expect(screen.getByText('Deployment Frequency')).toBeInTheDocument()
    expect(screen.getByText('Lead Time')).toBeInTheDocument()
    expect(screen.getByText('Change Failure Rate')).toBeInTheDocument()
    expect(screen.getByText('Recovery Time')).toBeInTheDocument()
  })

  it('shows metric values', () => {
    render(<HomePage />)
    
    expect(screen.getByText('2.3 per day')).toBeInTheDocument()
    expect(screen.getByText('4.2 hours')).toBeInTheDocument()
    expect(screen.getByText('5.8%')).toBeInTheDocument()
    expect(screen.getByText('45 minutes')).toBeInTheDocument()
  })

  it('displays navigation tabs', () => {
    render(<HomePage />)
    
    expect(screen.getByText('CI Builds')).toBeInTheDocument()
    expect(screen.getByText('Test Results')).toBeInTheDocument()
    expect(screen.getByText('Deployments')).toBeInTheDocument()
    expect(screen.getByText('Quality Gates')).toBeInTheDocument()
  })

  it('shows recent build information', () => {
    render(<HomePage />)
    
    expect(screen.getByText('Recent CI Builds')).toBeInTheDocument()
    expect(screen.getByText('build-123')).toBeInTheDocument()
    expect(screen.getByText('3m 42s')).toBeInTheDocument()
  })

  it('displays test results', () => {
    render(<HomePage />)
    
    expect(screen.getByText('Test Performance')).toBeInTheDocument()
    expect(screen.getByText('Unit Tests')).toBeInTheDocument()
    expect(screen.getByText('142 passed')).toBeInTheDocument()
  })
}) 
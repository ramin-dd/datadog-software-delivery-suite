import { test, expect } from '@playwright/test'

test.describe('Software Delivery Suite Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display the main dashboard', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Software Delivery Suite/)
    
    // Check main heading
    await expect(page.getByRole('heading', { name: 'Software Delivery Suite' })).toBeVisible()
    
    // Check subtitle
    await expect(page.getByText('Powered by Datadog - CI/CD visibility, test performance, and DORA metrics')).toBeVisible()
  })

  test('should show DORA metrics cards', async ({ page }) => {
    // Check all four DORA metrics are displayed
    await expect(page.getByText('Deployment Frequency')).toBeVisible()
    await expect(page.getByText('Lead Time')).toBeVisible()
    await expect(page.getByText('Change Failure Rate')).toBeVisible()
    await expect(page.getByText('Recovery Time')).toBeVisible()
    
    // Check metric values are displayed
    await expect(page.getByText('2.3 per day')).toBeVisible()
    await expect(page.getByText('4.2 hours')).toBeVisible()
    await expect(page.getByText('5.8%')).toBeVisible()
    await expect(page.getByText('45 minutes')).toBeVisible()
  })

  test('should have functional navigation tabs', async ({ page }) => {
    // Check all tabs are present
    await expect(page.getByRole('tab', { name: 'CI Builds' })).toBeVisible()
    await expect(page.getByRole('tab', { name: 'Test Results' })).toBeVisible()
    await expect(page.getByRole('tab', { name: 'Deployments' })).toBeVisible()
    await expect(page.getByRole('tab', { name: 'Quality Gates' })).toBeVisible()
    
    // Test tab switching
    await page.getByRole('tab', { name: 'Test Results' }).click()
    await expect(page.getByText('Test Performance')).toBeVisible()
    
    await page.getByRole('tab', { name: 'Deployments' }).click()
    await expect(page.getByText('Deployment Tracking')).toBeVisible()
    
    await page.getByRole('tab', { name: 'Quality Gates' }).click()
    await expect(page.getByText('Quality Gates')).toBeVisible()
  })

  test('should display CI build information', async ({ page }) => {
    // Ensure we're on the CI Builds tab (should be default)
    await page.getByRole('tab', { name: 'CI Builds' }).click()
    
    // Check build information is displayed
    await expect(page.getByText('Recent CI Builds')).toBeVisible()
    await expect(page.getByText('build-123')).toBeVisible()
    await expect(page.getByText('3m 42s')).toBeVisible()
    await expect(page.getByText('main')).toBeVisible()
  })

  test('should have working action buttons', async ({ page }) => {
    // Check primary action buttons are present
    await expect(page.getByRole('button', { name: /View Pipeline/ })).toBeVisible()
    await expect(page.getByRole('button', { name: /DORA Dashboard/ })).toBeVisible()
    
    // Test button interactions (they should be clickable even if not functional yet)
    await page.getByRole('button', { name: /View Pipeline/ }).click()
    await page.getByRole('button', { name: /DORA Dashboard/ }).click()
  })

  test('should be responsive on mobile devices', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    
    // Check that content is still visible and accessible
    await expect(page.getByRole('heading', { name: 'Software Delivery Suite' })).toBeVisible()
    await expect(page.getByText('Deployment Frequency')).toBeVisible()
    
    // Check tabs still work on mobile
    await page.getByRole('tab', { name: 'Test Results' }).click()
    await expect(page.getByText('Test Performance')).toBeVisible()
  })
}) 
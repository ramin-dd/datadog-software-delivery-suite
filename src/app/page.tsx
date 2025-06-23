import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity, BarChart3, GitBranch, CheckCircle, AlertCircle, Clock, TrendingUp } from "lucide-react"

export default function HomePage() {
  const metrics = {
    deploymentFrequency: "2.3 per day",
    leadTime: "4.2 hours",
    changeFailure: "5.8%",
    recoveryTime: "45 minutes"
  }

  const recentBuilds = [
    { id: "build-123", status: "success", duration: "3m 42s", branch: "main", time: "2 minutes ago" },
    { id: "build-122", status: "success", duration: "4m 12s", branch: "feature/auth", time: "1 hour ago" },
    { id: "build-121", status: "failed", duration: "2m 18s", branch: "hotfix/security", time: "3 hours ago" },
  ]

  const testResults = [
    { suite: "Unit Tests", passed: 142, failed: 2, duration: "1m 23s" },
    { suite: "Integration Tests", passed: 28, failed: 0, duration: "2m 45s" },
    { suite: "E2E Tests", passed: 15, failed: 1, duration: "5m 12s" },
  ]

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Software Delivery Suite</h1>
          <p className="text-muted-foreground">
            Powered by Datadog - CI/CD visibility, test performance, and DORA metrics
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <GitBranch className="mr-2 h-4 w-4" />
            View Pipeline
          </Button>
          <Button>
            <BarChart3 className="mr-2 h-4 w-4" />
            DORA Dashboard
          </Button>
        </div>
      </div>

      {/* DORA Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deployment Frequency</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">{metrics.deploymentFrequency}</div>
            <p className="text-xs text-blue-700">+12% from last week</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lead Time</CardTitle>
            <Clock className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">{metrics.leadTime}</div>
            <p className="text-xs text-green-700">-8% from last week</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Change Failure Rate</CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-900">{metrics.changeFailure}</div>
            <p className="text-xs text-yellow-700">-2% from last week</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recovery Time</CardTitle>
            <Activity className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">{metrics.recoveryTime}</div>
            <p className="text-xs text-purple-700">-15% from last week</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Views */}
      <Tabs defaultValue="builds" className="space-y-4">
        <TabsList>
          <TabsTrigger value="builds">CI Builds</TabsTrigger>
          <TabsTrigger value="tests">Test Results</TabsTrigger>
          <TabsTrigger value="deployments">Deployments</TabsTrigger>
          <TabsTrigger value="quality">Quality Gates</TabsTrigger>
        </TabsList>

        <TabsContent value="builds">
          <Card>
            <CardHeader>
              <CardTitle>Recent CI Builds</CardTitle>
              <CardDescription>Latest pipeline executions with Datadog CI Visibility</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBuilds.map((build) => (
                  <div key={build.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      {build.status === "success" ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      )}
                      <div>
                        <p className="font-medium">{build.id}</p>
                        <p className="text-sm text-muted-foreground">{build.branch}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{build.duration}</p>
                      <p className="text-xs text-muted-foreground">{build.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tests">
          <Card>
            <CardHeader>
              <CardTitle>Test Performance</CardTitle>
              <CardDescription>Test execution insights with Datadog Test Visibility</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {testResults.map((test) => (
                  <div key={test.suite} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{test.suite}</h4>
                      <p className="text-sm text-muted-foreground">Duration: {test.duration}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <p className="text-sm font-medium text-green-600">{test.passed} passed</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-red-600">{test.failed} failed</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deployments">
          <Card>
            <CardHeader>
              <CardTitle>Deployment Tracking</CardTitle>
              <CardDescription>Production deployments with Datadog markers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-muted-foreground">Deployment history will appear here once configured</p>
                <Button className="mt-4" variant="outline">Configure Deployment Tracking</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quality">
          <Card>
            <CardHeader>
              <CardTitle>Quality Gates</CardTitle>
              <CardDescription>Automated quality checks and enforcement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-muted-foreground">Quality gate results will appear here</p>
                <Button className="mt-4" variant="outline">Setup Quality Gates</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 
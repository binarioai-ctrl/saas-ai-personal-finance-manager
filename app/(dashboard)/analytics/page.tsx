import { DashboardHeader } from '@/components/dashboard/header'
import { DashboardShell } from '@/components/dashboard/shell'
import { AnalyticsCharts } from '@/components/analytics/charts'

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Analytics"
        text="Analiza el rendimiento de tu aplicación"
      />
      <AnalyticsCharts />
    </DashboardShell>
  )
}
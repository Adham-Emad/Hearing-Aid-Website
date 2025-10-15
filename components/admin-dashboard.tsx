"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Users,
  ShoppingCart,
  TrendingUp,
  Eye,
  Package,
  Settings,
  X,
  Download,
  RefreshCw,
} from "lucide-react"
import { useState } from "react"

interface AdminDashboardProps {
  isOpen: boolean
  onClose: () => void
  productCount: number
}

export function AdminDashboard({ isOpen, onClose, productCount }: AdminDashboardProps) {
  const [refreshing, setRefreshing] = useState(false)

  if (!isOpen) return null

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 1000)
  }

  const stats = [
    {
      title: "Total Views",
      value: "12,543",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
      color: "text-blue-500",
    },
    {
      title: "Active Users",
      value: "2,847",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "text-green-500",
    },
    {
      title: "Products",
      value: productCount.toString(),
      change: "0%",
      trend: "neutral",
      icon: Package,
      color: "text-purple-500",
    },
    {
      title: "Conversions",
      value: "342",
      change: "+23.1%",
      trend: "up",
      icon: ShoppingCart,
      color: "text-orange-500",
    },
  ]

  const recentActivity = [
    { action: "Product viewed", item: "ClearSound Pro", time: "2 min ago" },
    { action: "User registered", item: "john@example.com", time: "15 min ago" },
    { action: "Product added", item: "New hearing aid", time: "1 hour ago" },
    { action: "Content updated", item: "Hero section", time: "2 hours ago" },
    { action: "Product viewed", item: "ComfortFit Mini", time: "3 hours ago" },
  ]

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-background border border-border rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Admin Dashboard</h2>
              <p className="text-sm text-muted-foreground">Overview and analytics</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={refreshing}
              className="bg-transparent"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                    <Icon className={`w-4 h-4 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp
                        className={`w-3 h-3 ${stat.trend === "up" ? "text-green-500" : "text-muted-foreground"}`}
                      />
                      <span className={`text-xs ${stat.trend === "up" ? "text-green-500" : "text-muted-foreground"}`}>
                        {stat.change} from last month
                      </span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest actions on your website</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between pb-4 border-b border-border last:border-0 last:pb-0"
                    >
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.item}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common administrative tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Package className="w-4 h-4 mr-2" />
                  Manage Products
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  View Users
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Site Settings
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Performance Chart Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
              <CardDescription>Website traffic and engagement metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-secondary/30 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto" />
                  <p className="text-sm text-muted-foreground">Chart visualization would appear here</p>
                  <Badge variant="secondary">Mock Data</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card>
            <CardHeader>
              <CardTitle>System Status</CardTitle>
              <CardDescription>Current system health and configuration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <span className="text-sm font-medium">Website</span>
                  <Badge className="bg-green-500 text-white">Online</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <span className="text-sm font-medium">Database</span>
                  <Badge className="bg-green-500 text-white">Connected</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <span className="text-sm font-medium">Cache</span>
                  <Badge className="bg-blue-500 text-white">Active</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

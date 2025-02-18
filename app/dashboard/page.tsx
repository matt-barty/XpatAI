"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Sparkles,
  Globe2,
  MessageSquare,
  FileText,
  TrendingUp,
  Gift,
  ChevronRight,
  MapPin,
  Building2,
  Briefcase,
  Heart,
  ArrowRight,
  CheckCircle2,
  Clock,
  AlertCircle,
  Brain,
  Coins,
} from "lucide-react";
import BlobCursor from "@/components/Blob";
import { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

// Add interfaces at the top of the file after imports
interface Task {
  name: string;
  status: string;
  dueDate?: string;
}

// Add new interface for Progress Metrics
interface ProgressMetric {
  name: string;
  value: number;
  target: number;
  category:
    | "documents"
    | "tasks"
    | "language"
    | "savings"
    | "networking"
    | "skills";
  description: string;
}

interface City {
  name: string;
  matchScore: number;
  highlight: string;
}

interface CountryMetrics {
  costOfLiving: string;
  visaProcess: string;
  jobMarket: string;
  healthcareQuality: string;
  language?: string;
  averageSalary?: string;
  taxRate?: string;
  internetSpeed?: string;
}

interface TimelineEvent {
  date: string;
  event: string;
}

interface TrackedCountry {
  name: string;
  status: string;
  matchScore: number;
  lastUpdated: string;
  metrics: CountryMetrics;
  tasks: Task[];
  cities?: City[];
  requirements?: string[];
  timeline?: TimelineEvent[];
}

// Add new interface for AI Insights
interface AIInsight {
  type: "recommendation" | "alert" | "prediction" | "tip";
  title: string;
  description: string;
  country?: string;
  date: string;
  confidence: number;
  category: "visa" | "housing" | "job" | "culture" | "finance";
  status?: "pending" | "implemented" | "dismissed";
  accuracy?: number;
  impact?: "high" | "medium" | "low";
  tags?: string[];
  relatedInsights?: string[];
}

// Update the userData type and data to match our interfaces
const userData = {
  name: "Alex Thompson",
  tokenBalance: 2500,
  level: "Global Explorer",
  levelProgress: 65,
  nextReward: 500,
  stats: {
    countriesExplored: 12,
    aiChatsCompleted: 48,
    documentsPrepped: 8,
  },
  progressMetrics: [
    {
      name: "Document Completion",
      value: 8,
      target: 12,
      category: "documents",
      description: "Required documents prepared for visa application",
    },
    {
      name: "Task Progress",
      value: 15,
      target: 20,
      category: "tasks",
      description: "Key tasks completed across all tracked countries",
    },
    {
      name: "Language Proficiency",
      value: 60,
      target: 100,
      category: "language",
      description: "Progress towards required language certifications",
    },
    {
      name: "Savings Goal",
      value: 70,
      target: 100,
      category: "savings",
      description: "Progress towards relocation savings target",
    },
    {
      name: "Network Building",
      value: 40,
      target: 100,
      category: "networking",
      description: "Professional connections in target countries",
    },
    {
      name: "Skills Development",
      value: 85,
      target: 100,
      category: "skills",
      description: "Progress on required technical skills",
    },
  ] as ProgressMetric[],
  recentActivity: [
    "Earned 100 XPAT from AI chat insights",
    "Completed Japan visa checklist",
    "Reached Level 3: Global Explorer",
  ],
  trackedCountries: [
    {
      name: "Japan",
      status: "In Progress",
      matchScore: 92,
      lastUpdated: "2 days ago",
      metrics: {
        costOfLiving: "High",
        visaProcess: "Complex",
        jobMarket: "Strong",
        healthcareQuality: "Excellent",
        language: "Japanese (N2 Required)",
        averageSalary: "$45,000 - $75,000",
        taxRate: "15-45%",
        internetSpeed: "Average 200Mbps",
      },
      tasks: [
        {
          name: "Visa Application",
          status: "completed",
          dueDate: "2024-02-15",
        },
        {
          name: "Housing Research",
          status: "in-progress",
          dueDate: "2024-03-01",
        },
        {
          name: "Job Search",
          status: "pending",
          dueDate: "2024-03-15",
        },
      ],
      cities: [
        { name: "Tokyo", matchScore: 95, highlight: "Tech Hub" },
        { name: "Osaka", matchScore: 88, highlight: "Lower Cost" },
        { name: "Fukuoka", matchScore: 82, highlight: "Startup Friendly" },
      ],
      requirements: [
        "Bachelor's Degree",
        "JLPT N2 Certificate",
        "3 Years Experience",
        "Health Insurance",
      ],
      timeline: [
        { date: "2024-02", event: "Visa Application" },
        { date: "2024-03", event: "Job Search" },
        { date: "2024-04", event: "Housing Search" },
        { date: "2024-05", event: "Relocation" },
      ],
    },
    {
      name: "Singapore",
      status: "Planning",
      matchScore: 88,
      lastUpdated: "5 days ago",
      metrics: {
        costOfLiving: "Very High",
        visaProcess: "Moderate",
        jobMarket: "Excellent",
        healthcareQuality: "Excellent",
      },
      tasks: [
        { name: "Skills Assessment", status: "completed" },
        { name: "Visa Requirements", status: "in-progress" },
        { name: "Cost Research", status: "completed" },
      ],
    },
    {
      name: "Germany",
      status: "Exploring",
      matchScore: 85,
      lastUpdated: "1 week ago",
      metrics: {
        costOfLiving: "Moderate",
        visaProcess: "Moderate",
        jobMarket: "Strong",
        healthcareQuality: "Excellent",
      },
      tasks: [
        { name: "Language Requirements", status: "in-progress" },
        { name: "Job Market Research", status: "pending" },
        { name: "Healthcare System", status: "completed" },
      ],
    },
  ] as TrackedCountry[],
  aiInsights: [
    {
      type: "recommendation",
      title: "Consider Fukuoka for Tech Opportunities",
      description:
        "Based on your profile and preferences, Fukuoka's startup visa program and growing tech scene aligns well with your background.",
      country: "Japan",
      date: "2024-01-15",
      confidence: 89,
      category: "job",
    },
    {
      type: "alert",
      title: "Visa Requirement Update",
      description:
        "Japan has updated its highly-skilled professional visa requirements. Your current profile meets the new criteria.",
      country: "Japan",
      date: "2024-01-10",
      confidence: 95,
      category: "visa",
    },
    {
      type: "prediction",
      title: "Housing Market Trend",
      description:
        "Housing prices in Singapore's tech districts are predicted to stabilize in Q2 2024, suggesting a good time to plan relocation.",
      country: "Singapore",
      date: "2024-01-08",
      confidence: 78,
      category: "housing",
    },
    {
      type: "tip",
      title: "Cultural Integration",
      description:
        "Based on your interests, joining a local programming community in Tokyo could fast-track your professional network building.",
      country: "Japan",
      date: "2024-01-05",
      confidence: 85,
      category: "culture",
    },
  ] as AIInsight[],
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "In Progress":
      return "bg-blue-100 text-blue-700";
    case "Planning":
      return "bg-purple-100 text-purple-700";
    case "Exploring":
      return "bg-green-100 text-green-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const getTaskIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="h-4 w-4 text-green-500" />;
    case "in-progress":
      return <Clock className="h-4 w-4 text-blue-500" />;
    case "pending":
      return <AlertCircle className="h-4 w-4 text-gray-400" />;
    default:
      return null;
  }
};

const getTimelineColor = (date: string) => {
  const now = new Date();
  const eventDate = new Date(date);
  if (eventDate < now) return "bg-green-100 text-green-700";
  if (eventDate.getMonth() === now.getMonth())
    return "bg-blue-100 text-blue-700";
  return "bg-gray-100 text-gray-700";
};

// Add helper function for insight type styling
const getInsightTypeStyle = (type: AIInsight["type"]) => {
  switch (type) {
    case "recommendation":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "alert":
      return "bg-amber-50 text-amber-700 border-amber-200";
    case "prediction":
      return "bg-purple-50 text-purple-700 border-purple-200";
    case "tip":
      return "bg-green-50 text-green-700 border-green-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
};

// Add helper function for category icons
const getCategoryIcon = (category: AIInsight["category"]) => {
  switch (category) {
    case "visa":
      return <FileText className="h-4 w-4" />;
    case "housing":
      return <Building2 className="h-4 w-4" />;
    case "job":
      return <Briefcase className="h-4 w-4" />;
    case "culture":
      return <Globe2 className="h-4 w-4" />;
    case "finance":
      return <Coins className="h-4 w-4" />;
  }
};

// Add helper function for progress category icons
const getProgressIcon = (category: ProgressMetric["category"]) => {
  switch (category) {
    case "documents":
      return <FileText className="h-5 w-5" />;
    case "tasks":
      return <CheckCircle2 className="h-5 w-5" />;
    case "language":
      return <MessageSquare className="h-5 w-5" />;
    case "savings":
      return <Coins className="h-5 w-5" />;
    case "networking":
      return <Globe2 className="h-5 w-5" />;
    case "skills":
      return <Brain className="h-5 w-5" />;
  }
};

// Add helper function for progress category colors
const getProgressColor = (category: ProgressMetric["category"]) => {
  switch (category) {
    case "documents":
      return "from-green-500 to-emerald-700";
    case "tasks":
      return "from-blue-500 to-indigo-700";
    case "language":
      return "from-purple-500 to-violet-700";
    case "savings":
      return "from-yellow-500 to-amber-700";
    case "networking":
      return "from-pink-500 to-rose-700";
    case "skills":
      return "from-sky-500 to-cyan-700";
  }
};

export default function DashboardPage() {
  const [showRecentActivity, setShowRecentActivity] = useState(false);
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);
  const [selectedInsight, setSelectedInsight] = useState<AIInsight | null>(
    null
  );
  const [insightFilter, setInsightFilter] = useState<{
    type?: AIInsight["type"];
    category?: AIInsight["category"];
    status?: AIInsight["status"];
    impact?: AIInsight["impact"];
    minConfidence?: number;
    dateRange?: { start: string; end: string };
  }>({});
  const [insightSort, setInsightSort] = useState<{
    field: keyof AIInsight;
    direction: "asc" | "desc";
  }>({ field: "date", direction: "desc" });

  return (
    <div className="min-h-screen bg-gray-50">
      <BlobCursor fillColor="#0ea5e9" />
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="px-3 py-1 bg-purple-100 rounded-full text-sm font-medium text-purple-700 flex items-center gap-1">
                      <span>Level {userData.level}</span>
                      <TrendingUp className="h-3 w-3" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Your current explorer level</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="text-gray-600">Track your global mobility journey</p>
          </div>

          {/* User Overview Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            {/* Token Balance Card */}
            <Card className="p-6 bg-gradient-to-br from-purple-500 to-blue-500 text-white relative group overflow-hidden">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm font-medium text-white/80">
                    XPAT Balance
                  </p>
                  <h3 className="text-2xl font-bold">
                    {userData.tokenBalance}
                  </h3>
                </div>
                <Sparkles className="h-5 w-5 text-white/90" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white/80">
                    Level: {userData.level}
                  </p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="flex items-center gap-1 text-white/80 text-sm">
                          <Gift className="h-4 w-4" />
                          <span>{userData.nextReward} XPAT</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Tokens earned at next level</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Progress
                  value={userData.levelProgress}
                  className="bg-white/20"
                />
                <p className="text-xs text-white/70">
                  {userData.levelProgress}% to next level
                </p>
              </div>

              {/* Recent Activity Dropdown */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <Button
                  variant="ghost"
                  className="w-full text-white/90 hover:text-white hover:bg-white/10 p-0 h-auto flex items-center justify-between"
                  onClick={() => setShowRecentActivity(!showRecentActivity)}
                >
                  <span className="text-sm">Recent Activity</span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      showRecentActivity ? "rotate-90" : ""
                    }`}
                  />
                </Button>
                {showRecentActivity && (
                  <div className="mt-2 space-y-2">
                    {userData.recentActivity.map((activity, index) => (
                      <p
                        key={index}
                        className="text-xs text-white/70 pl-4 border-l border-white/10"
                      >
                        {activity}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </Card>

            {/* Stats Cards */}
            <Card className="p-6 group hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Countries Explored
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {userData.stats.countriesExplored}
                  </h3>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe2 className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="w-full text-left">
                    <p className="text-sm text-gray-500">Across 5 continents</p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to view explored countries</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Card>

            <Card className="p-6 group hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">AI Chats</p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {userData.stats.aiChatsCompleted}
                  </h3>
                </div>
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare className="h-5 w-5 text-purple-600" />
                </div>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="w-full text-left">
                    <p className="text-sm text-gray-500">Insights generated</p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View chat history and insights</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Card>

            <Card className="p-6 group hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Documents</p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {userData.stats.documentsPrepped}
                  </h3>
                </div>
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="w-full text-left">
                    <p className="text-sm text-gray-500">
                      Ready for submission
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Check document status</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Card>
          </div>

          {/* Country Tracking Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Country Tracking
              </h2>
              <Link href="/explore">
                <Button variant="outline" className="gap-2">
                  Explore More Countries
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userData.trackedCountries.map((country) => (
                <Card
                  key={country.name}
                  className={`group transition-all ${
                    expandedCountry === country.name ? "col-span-full" : ""
                  }`}
                >
                  <div className="p-6">
                    {/* Header with Expand Button */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {country.name}
                          </h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setExpandedCountry(
                                expandedCountry === country.name
                                  ? null
                                  : country.name
                              )
                            }
                            className="ml-2"
                          >
                            {expandedCountry === country.name
                              ? "Collapse"
                              : "Expand"}
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              country.status
                            )}`}
                          >
                            {country.status}
                          </span>
                          <span className="text-xs text-gray-500">
                            Updated {country.lastUpdated}
                          </span>
                        </div>
                      </div>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="px-2 py-1 bg-blue-50 rounded-full">
                              <span className="text-blue-700 font-medium">
                                {country.matchScore}%
                              </span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Match score based on your preferences</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    {/* Basic Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Building2 className="h-4 w-4" />
                          <span>Cost: {country.metrics.costOfLiving}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Briefcase className="h-4 w-4" />
                          <span>Jobs: {country.metrics.jobMarket}</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <FileText className="h-4 w-4" />
                          <span>Visa: {country.metrics.visaProcess}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Heart className="h-4 w-4" />
                          <span>
                            Healthcare: {country.metrics.healthcareQuality}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedCountry === country.name && (
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        {/* Additional Metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-xs text-gray-500 mb-1">
                              Language
                            </p>
                            <p className="text-sm font-medium">
                              {country.metrics.language || "Not specified"}
                            </p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-xs text-gray-500 mb-1">
                              Avg. Salary
                            </p>
                            <p className="text-sm font-medium">
                              {country.metrics.averageSalary || "Not specified"}
                            </p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-xs text-gray-500 mb-1">
                              Tax Rate
                            </p>
                            <p className="text-sm font-medium">
                              {country.metrics.taxRate || "Not specified"}
                            </p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-xs text-gray-500 mb-1">
                              Internet
                            </p>
                            <p className="text-sm font-medium">
                              {country.metrics.internetSpeed || "Not specified"}
                            </p>
                          </div>
                        </div>

                        {/* Cities Comparison */}
                        {country.cities && country.cities.length > 0 && (
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">
                              Top Cities
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {country.cities.map((city) => (
                                <div
                                  key={city.name}
                                  className="bg-gray-50 p-3 rounded-lg"
                                >
                                  <div className="flex items-center justify-between mb-2">
                                    <p className="font-medium">{city.name}</p>
                                    <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                                      {city.matchScore}%
                                    </span>
                                  </div>
                                  <p className="text-xs text-gray-600">
                                    {city.highlight}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Requirements */}
                        {country.requirements &&
                          country.requirements.length > 0 && (
                            <div className="mb-6">
                              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                                Requirements
                              </h4>
                              <div className="grid grid-cols-2 gap-2">
                                {country.requirements.map((req, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center gap-2 text-sm text-gray-600"
                                  >
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                    <span>{req}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                        {/* Timeline */}
                        {country.timeline && country.timeline.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">
                              Timeline
                            </h4>
                            <div className="space-y-2">
                              {country.timeline.map((event, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <span
                                    className={`text-xs px-2 py-1 rounded-full ${getTimelineColor(
                                      event.date
                                    )}`}
                                  >
                                    {event.date}
                                  </span>
                                  <span className="text-sm text-gray-600">
                                    {event.event}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tasks Section */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="space-y-2">
                        {country.tasks.map((task, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between text-sm"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-gray-600">{task.name}</span>
                              {task.dueDate && (
                                <span className="text-xs text-gray-400">
                                  Due: {task.dueDate}
                                </span>
                              )}
                            </div>
                            {getTaskIcon(task.status)}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* AI Insights Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">AI Insights</h2>
                <p className="text-sm text-gray-500">
                  AI-powered recommendations and alerts
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  // TODO: Implement insight generation
                }}
                className="gap-2"
              >
                <Sparkles className="h-4 w-4" />
                Generate New Insights
              </Button>
            </div>

            {/* Filtering and Sorting Controls */}
            <div className="mb-6 space-y-4">
              <div className="flex items-center gap-4">
                <select
                  className="p-2 border rounded-md text-sm"
                  value={insightFilter.type || ""}
                  onChange={(e) =>
                    setInsightFilter((prev) => ({
                      ...prev,
                      type: (e.target.value as AIInsight["type"]) || undefined,
                    }))
                  }
                >
                  <option value="">All Types</option>
                  <option value="recommendation">Recommendations</option>
                  <option value="alert">Alerts</option>
                  <option value="prediction">Predictions</option>
                  <option value="tip">Tips</option>
                </select>

                <select
                  className="p-2 border rounded-md text-sm"
                  value={insightFilter.category || ""}
                  onChange={(e) =>
                    setInsightFilter((prev) => ({
                      ...prev,
                      category:
                        (e.target.value as AIInsight["category"]) || undefined,
                    }))
                  }
                >
                  <option value="">All Categories</option>
                  <option value="visa">Visa</option>
                  <option value="housing">Housing</option>
                  <option value="job">Job</option>
                  <option value="culture">Culture</option>
                  <option value="finance">Finance</option>
                </select>

                <select
                  className="p-2 border rounded-md text-sm"
                  value={insightFilter.status || ""}
                  onChange={(e) =>
                    setInsightFilter((prev) => ({
                      ...prev,
                      status:
                        (e.target.value as AIInsight["status"]) || undefined,
                    }))
                  }
                >
                  <option value="">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="implemented">Implemented</option>
                  <option value="dismissed">Dismissed</option>
                </select>

                <select
                  className="p-2 border rounded-md text-sm"
                  value={insightSort.field as string}
                  onChange={(e) =>
                    setInsightSort((prev) => ({
                      ...prev,
                      field: e.target.value as keyof AIInsight,
                    }))
                  }
                >
                  <option value="date">Date</option>
                  <option value="confidence">Confidence</option>
                  <option value="impact">Impact</option>
                </select>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    setInsightSort((prev) => ({
                      ...prev,
                      direction: prev.direction === "asc" ? "desc" : "asc",
                    }))
                  }
                >
                  {insightSort.direction === "asc" ? "↑" : "↓"}
                </Button>
              </div>

              {/* Confidence Slider */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Min. Confidence:</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={insightFilter.minConfidence || 0}
                  onChange={(e) =>
                    setInsightFilter((prev) => ({
                      ...prev,
                      minConfidence: parseInt(e.target.value),
                    }))
                  }
                  className="w-48"
                />
                <span className="text-sm text-gray-500">
                  {insightFilter.minConfidence || 0}%
                </span>
              </div>
            </div>

            {/* Insights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {userData.aiInsights
                .filter((insight) => {
                  if (insightFilter.type && insight.type !== insightFilter.type)
                    return false;
                  if (
                    insightFilter.category &&
                    insight.category !== insightFilter.category
                  )
                    return false;
                  if (
                    insightFilter.status &&
                    insight.status !== insightFilter.status
                  )
                    return false;
                  if (
                    insightFilter.minConfidence &&
                    insight.confidence < insightFilter.minConfidence
                  )
                    return false;
                  return true;
                })
                .sort((a, b) => {
                  const direction = insightSort.direction === "asc" ? 1 : -1;
                  if (typeof a[insightSort.field] === "string") {
                    return (
                      (a[insightSort.field] as string).localeCompare(
                        b[insightSort.field] as string
                      ) * direction
                    );
                  }
                  return (
                    ((a[insightSort.field] as number) -
                      (b[insightSort.field] as number)) *
                    direction
                  );
                })
                .map((insight, index) => (
                  <div
                    key={index}
                    className="relative bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div
                        className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          getInsightTypeStyle(insight.type)
                        )}
                      >
                        {insight.type.charAt(0).toUpperCase() +
                          insight.type.slice(1)}
                      </div>
                      {insight.status && (
                        <span
                          className={cn(
                            "px-2 py-1 rounded-full text-xs font-medium",
                            {
                              "bg-yellow-100 text-yellow-700":
                                insight.status === "pending",
                              "bg-green-100 text-green-700":
                                insight.status === "implemented",
                              "bg-gray-100 text-gray-700":
                                insight.status === "dismissed",
                            }
                          )}
                        >
                          {insight.status.charAt(0).toUpperCase() +
                            insight.status.slice(1)}
                        </span>
                      )}
                    </div>

                    <h3
                      className="text-lg font-semibold mb-2 cursor-pointer hover:text-sky-600"
                      onClick={() => setSelectedInsight(insight)}
                    >
                      {insight.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4">
                      {insight.description}
                    </p>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(insight.category)}
                        <span className="text-sm text-gray-500 capitalize">
                          {insight.category}
                        </span>
                      </div>
                      {insight.impact && (
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-500 capitalize">
                            {insight.impact} Impact
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <div className="flex items-center gap-1">
                                <Progress
                                  value={insight.confidence}
                                  className="w-16"
                                />
                                <span className="text-sm text-gray-500">
                                  {insight.confidence}%
                                </span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>AI Confidence Score</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedInsight(insight)}
                      >
                        Learn More →
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Insight Detail Dialog */}
          <Dialog
            open={!!selectedInsight}
            onOpenChange={() => setSelectedInsight(null)}
          >
            {selectedInsight && (
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium",
                        getInsightTypeStyle(selectedInsight.type)
                      )}
                    >
                      {selectedInsight.type.charAt(0).toUpperCase() +
                        selectedInsight.type.slice(1)}
                    </div>
                    {selectedInsight.impact && (
                      <div
                        className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          {
                            "bg-red-100 text-red-700":
                              selectedInsight.impact === "high",
                            "bg-yellow-100 text-yellow-700":
                              selectedInsight.impact === "medium",
                            "bg-blue-100 text-blue-700":
                              selectedInsight.impact === "low",
                          }
                        )}
                      >
                        {selectedInsight.impact.charAt(0).toUpperCase() +
                          selectedInsight.impact.slice(1)}{" "}
                        Impact
                      </div>
                    )}
                  </div>
                  <DialogTitle className="text-xl">
                    {selectedInsight.title}
                  </DialogTitle>
                  <DialogDescription>
                    {selectedInsight.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                  {/* Metadata */}
                  <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Category</p>
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(selectedInsight.category)}
                        <span className="capitalize">
                          {selectedInsight.category}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        Confidence Score
                      </p>
                      <div className="flex items-center gap-2">
                        <Progress
                          value={selectedInsight.confidence}
                          className="w-24"
                        />
                        <span className="text-sm font-medium">
                          {selectedInsight.confidence}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status Tracking */}
                  <div className="p-4 border border-gray-100 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-3">
                      Status Tracking
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <select
                          className="p-2 border rounded-md text-sm"
                          value={selectedInsight.status || "pending"}
                          onChange={(e) => {
                            // TODO: Implement status update
                          }}
                        >
                          <option value="pending">Pending</option>
                          <option value="implemented">Implemented</option>
                          <option value="dismissed">Dismissed</option>
                        </select>
                        {selectedInsight.accuracy !== undefined && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">
                              Accuracy:
                            </span>
                            <span className="text-sm font-medium">
                              {selectedInsight.accuracy}%
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedInsight.tags?.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Related Information */}
                  {selectedInsight.country && (
                    <div className="p-4 border border-gray-100 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-3">
                        Related Country Information
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{selectedInsight.country}</span>
                      </div>
                      {userData.trackedCountries.find(
                        (c) => c.name === selectedInsight.country
                      ) && (
                        <div className="mt-3">
                          <Button variant="outline" size="sm" className="gap-2">
                            <Globe2 className="h-4 w-4" />
                            View Country Details
                          </Button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Related Insights */}
                  {selectedInsight.relatedInsights && (
                    <div className="p-4 border border-gray-100 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-3">
                        Related Insights
                      </h3>
                      <div className="space-y-2">
                        {selectedInsight.relatedInsights.map(
                          (insightId, index) => {
                            const related = userData.aiInsights.find(
                              (i) => i.title === insightId
                            );
                            if (!related) return null;
                            return (
                              <Button
                                key={index}
                                variant="ghost"
                                size="sm"
                                className="w-full justify-start gap-2"
                                onClick={() => setSelectedInsight(related)}
                              >
                                {getCategoryIcon(related.category)}
                                {related.title}
                              </Button>
                            );
                          }
                        )}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="p-4 border border-gray-100 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-3">
                      Recommended Actions
                    </h3>
                    <div className="space-y-2">
                      {selectedInsight.type === "recommendation" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2 w-full justify-start"
                        >
                          <CheckCircle2 className="h-4 w-4" />
                          Add to Action Plan
                        </Button>
                      )}
                      {selectedInsight.type === "alert" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2 w-full justify-start"
                        >
                          <Clock className="h-4 w-4" />
                          Set Reminder
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 w-full justify-start"
                      >
                        <MessageSquare className="h-4 w-4" />
                        Discuss with AI Assistant
                      </Button>
                    </div>
                  </div>
                </div>

                <DialogFooter className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    Generated on{" "}
                    {new Date(selectedInsight.date).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      }
                    )}
                  </div>
                  <Button
                    variant="default"
                    onClick={() => setSelectedInsight(null)}
                  >
                    Close
                  </Button>
                </DialogFooter>
              </DialogContent>
            )}
          </Dialog>

          {/* Progress Tracker Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Progress Tracker
                </h2>
                <p className="text-sm text-gray-500">
                  Track your global mobility milestones
                </p>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <TrendingUp className="h-4 w-4" />
                Set Goals
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userData.progressMetrics.map((metric, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {metric.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {metric.description}
                        </p>
                      </div>
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${getProgressColor(
                          metric.category
                        )} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                      >
                        {getProgressIcon(metric.category)}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">
                          {Math.round((metric.value / metric.target) * 100)}%
                        </span>
                      </div>
                      <Progress
                        value={(metric.value / metric.target) * 100}
                        className={`bg-${
                          metric.category === "documents"
                            ? "green"
                            : metric.category === "tasks"
                            ? "blue"
                            : metric.category === "language"
                            ? "purple"
                            : metric.category === "savings"
                            ? "yellow"
                            : metric.category === "networking"
                            ? "pink"
                            : "sky"
                        }-100`}
                      />
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{metric.value} completed</span>
                        <span>Target: {metric.target}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-between"
                      >
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

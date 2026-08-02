import api from "../api/api";

// ======================
// Dashboard Summary
// ======================

export async function getDashboardSummary() {
  return await api.get("/dashboard");
}

// ======================
// Activity Distribution
// ======================

export async function getActivityDistribution() {
  return await api.get("/dashboard/activity-distribution");
}

// ======================
// Balance Score
// ======================

export async function getBalanceScore() {
  return await api.get("/dashboard/balance-score");
}

// ======================
// Risk Level
// ======================

export async function getRiskLevel() {
  return await api.get("/dashboard/risk-level");
}

// ======================
// AI Insight
// ======================

export async function getAIInsight() {
  return await api.get("/dashboard/insight");
}

// ======================
// Achievement
// ======================

export async function getAchievements() {
  return await api.get("/dashboard/achievements");
}
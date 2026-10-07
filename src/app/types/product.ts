export interface ProductProfile {
  name: string;
  description: string;
  category: string;
  targetAudience: string[];
  keywords: string[];
  website: string;
}

export interface AnalysisResult {
  product: ProductProfile;
  opportunities: DirectoryOpportunity[];
}

export interface DirectoryOpportunity {
  name: string;
  url: string;
  category: string;
  reason: string;
  priority: "high" | "medium" | "low";
}
export interface Project {
  id: string;
  title: string;
  type: 'Residential Villa' | 'Commercial Complex' | 'Duplex House' | '3D Modeling & Design' | 'Industrial Build';
  beds?: number;
  baths?: number;
  areaSqFt: number;
  ratePerSqFt: number;
  totalCost?: number;
  location: string;
  areaName: string; // e.g. Gokulam, Vijayanagar, Kuvempunagar
  image: string;
  featured?: boolean;
  tag?: string;
  description: string;
  structuralSpecs: string[];
  materialsUsed: string[];
}

export interface ConstructionPackage {
  id: string;
  name: string;
  tier: 'standard' | 'premium' | 'luxury' | 'commercial';
  ratePerSqFt: number;
  tagline: string;
  popular?: boolean;
  specs: {
    steel: string;
    cement: string;
    bricks: string;
    flooring: string;
    doorsWindows: string;
    bathroomFittings: string;
    electrical: string;
    painting: string;
  };
  features: string[];
}

export interface MaterialItem {
  id: string;
  name: string;
  category: 'Steel TMT' | 'Cement' | 'Aggregates & Sand' | 'Bricks & Blocks';
  grade: string;
  unit: string;
  approxRate: number;
  image: string;
  description: string;
  deliveryTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string; // Mysore locality
  projectType: string;
  quote: string;
  rating: number;
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ConstructionEstimate {
  builtUpSqFt: number;
  ratePerSqFt: number;
  totalCost: number;
  packageTier: string;
  packageName: string;
  breakdown: {
    steelAndCement: number;
    masonryAndStructure: number;
    flooringAndTiling: number;
    plumbingAndElectrical: number;
    laborAndSupervision: number;
    finishingAndPainting: number;
  };
  estimatedMonths: number;
}

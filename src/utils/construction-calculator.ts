import { Project, ConstructionEstimate, ConstructionPackage } from '../types';

export const PACKAGE_RATES: Record<string, { name: string; rate: number; monthsPer1000SqFt: number }> = {
  standard: {
    name: 'Standard Quality',
    rate: 1750,
    monthsPer1000SqFt: 5,
  },
  premium: {
    name: 'Premium Executive',
    rate: 2150,
    monthsPer1000SqFt: 6,
  },
  luxury: {
    name: 'Luxury Architectural',
    rate: 2650,
    monthsPer1000SqFt: 7,
  },
  commercial: {
    name: 'Commercial & Multi-Storey',
    rate: 1950,
    monthsPer1000SqFt: 5.5,
  },
};

export function calculateConstructionEstimate(
  builtUpSqFt: number,
  tier: 'standard' | 'premium' | 'luxury' | 'commercial' = 'premium',
  customRate?: number
): ConstructionEstimate {
  const safeSqFt = Math.max(100, Math.min(50000, builtUpSqFt || 1200));
  const pkg = PACKAGE_RATES[tier] || PACKAGE_RATES.premium;
  const ratePerSqFt = customRate && customRate > 0 ? customRate : pkg.rate;
  const totalCost = safeSqFt * ratePerSqFt;

  // Real-world civil engineering cost allocation:
  // Steel & Cement: ~32%
  // Masonry, Sand, Aggregates & Structure: ~24%
  // Flooring & Tiling: ~12%
  // Plumbing & Electrical: ~10%
  // Labor & Civil Engineer Supervision: ~14%
  // Finishing & Painting: ~8%
  const steelAndCement = Math.round(totalCost * 0.32);
  const masonryAndStructure = Math.round(totalCost * 0.24);
  const flooringAndTiling = Math.round(totalCost * 0.12);
  const plumbingAndElectrical = Math.round(totalCost * 0.10);
  const laborAndSupervision = Math.round(totalCost * 0.14);
  const finishingAndPainting = totalCost - (steelAndCement + masonryAndStructure + flooringAndTiling + plumbingAndElectrical + laborAndSupervision);

  const estimatedMonths = Math.max(4, Math.round((safeSqFt / 1000) * pkg.monthsPer1000SqFt));

  return {
    builtUpSqFt: safeSqFt,
    ratePerSqFt,
    totalCost,
    packageTier: tier,
    packageName: pkg.name,
    breakdown: {
      steelAndCement,
      masonryAndStructure,
      flooringAndTiling,
      plumbingAndElectrical,
      laborAndSupervision,
      finishingAndPainting,
    },
    estimatedMonths,
  };
}

export function formatINR(amount: number): string {
  if (amount >= 10000000) {
    const cr = (amount / 10000000).toFixed(2);
    return `₹${cr} Cr`;
  }
  if (amount >= 100000) {
    const lk = (amount / 100000).toFixed(2);
    return `₹${lk} Lakh`;
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatINRExact(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function filterProjects(
  projects: Project[],
  criteria: {
    type?: string;
    areaQuery?: string;
    maxRatePerSqFt?: number | null;
  }
): Project[] {
  return projects.filter((project) => {
    // Type filtering
    if (criteria.type && criteria.type !== 'All Projects' && criteria.type !== 'All Type') {
      if (project.type.toLowerCase() !== criteria.type.toLowerCase()) {
        return false;
      }
    }

    // Mysore Locality / Keyword search
    if (criteria.areaQuery && criteria.areaQuery.trim().length > 0) {
      const q = criteria.areaQuery.toLowerCase().trim();
      const matchLoc = project.location.toLowerCase().includes(q);
      const matchArea = project.areaName.toLowerCase().includes(q);
      const matchTitle = project.title.toLowerCase().includes(q);
      if (!matchLoc && !matchArea && !matchTitle) {
        return false;
      }
    }

    // Max rate per sq ft filter
    if (criteria.maxRatePerSqFt && criteria.maxRatePerSqFt > 0) {
      if (project.ratePerSqFt > criteria.maxRatePerSqFt) {
        return false;
      }
    }

    return true;
  });
}

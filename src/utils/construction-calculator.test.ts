import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateConstructionEstimate,
  formatINR,
  formatINRExact,
  filterProjects,
  PACKAGE_RATES,
} from './construction-calculator';
import { Project } from '../types';

const sampleProjects: Project[] = [
  {
    id: 'p1',
    title: 'Vijayanagar Contemporary Villa',
    type: 'Residential Villa',
    areaSqFt: 3200,
    ratePerSqFt: 2200,
    location: 'Vijayanagar 2nd Stage, Mysore',
    areaName: 'Vijayanagar',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    description: '4BHK custom villa designed and built by Suprith Constructions.',
    structuralSpecs: ['M25 Grade Concrete', 'Fe550D TMT Steel'],
    materialsUsed: ['Ultratech Super Cement', 'Tata Tiscon Steel'],
  },
  {
    id: 'p2',
    title: 'Kuvempunagar Commercial Complex',
    type: 'Commercial Complex',
    areaSqFt: 5800,
    ratePerSqFt: 1950,
    location: 'Kuvempunagar Main Road, Mysore',
    areaName: 'Kuvempunagar',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    description: 'G+3 retail and corporate office space with heavy load structural design.',
    structuralSpecs: ['M30 Grade Concrete', 'Post-Tensioned Beams'],
    materialsUsed: ['Dalmia 53 Grade Cement', 'JSW Neosteel'],
  },
  {
    id: 'p3',
    title: 'Gokulam 3D Modeled Luxury Residence',
    type: '3D Modeling & Design',
    areaSqFt: 2600,
    ratePerSqFt: 2650,
    location: '3rd Cross, Gokulam, Mysore',
    areaName: 'Gokulam',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
    description: '3D Elevation and turnkey residential construction.',
    structuralSpecs: ['Earthquake Resistant Frame'],
    materialsUsed: ['Birla Super Cement', 'Tata TMT'],
  },
];

test('calculateConstructionEstimate calculates exact total for built-up area and tier', () => {
  // 2,000 sq ft with Premium Executive rate (2150/sq.ft) => 43,00,000
  const estimate = calculateConstructionEstimate(2000, 'premium');
  assert.equal(estimate.builtUpSqFt, 2000);
  assert.equal(estimate.ratePerSqFt, 2150);
  assert.equal(estimate.totalCost, 4300000);
  assert.equal(estimate.packageName, 'Premium Executive');

  // Check sum of breakdown components equals totalCost
  const sumBreakdown =
    estimate.breakdown.steelAndCement +
    estimate.breakdown.masonryAndStructure +
    estimate.breakdown.flooringAndTiling +
    estimate.breakdown.plumbingAndElectrical +
    estimate.breakdown.laborAndSupervision +
    estimate.breakdown.finishingAndPainting;

  assert.equal(sumBreakdown, estimate.totalCost);
});

test('calculateConstructionEstimate respects custom rate override', () => {
  const estimate = calculateConstructionEstimate(1500, 'standard', 1800);
  assert.equal(estimate.ratePerSqFt, 1800);
  assert.equal(estimate.totalCost, 1500 * 1800);
});

test('formatINR formats Lakhs and Crores accurately', () => {
  assert.equal(formatINR(4500000), '₹45.00 Lakh');
  assert.equal(formatINR(15000000), '₹1.50 Cr');
});

test('filterProjects filters by project type', () => {
  const commercial = filterProjects(sampleProjects, { type: 'Commercial Complex' });
  assert.equal(commercial.length, 1);
  assert.equal(commercial[0].title, 'Kuvempunagar Commercial Complex');

  const all = filterProjects(sampleProjects, { type: 'All Projects' });
  assert.equal(all.length, 3);
});

test('filterProjects filters by Mysore locality query', () => {
  const gokulam = filterProjects(sampleProjects, { areaQuery: 'Gokulam' });
  assert.equal(gokulam.length, 1);
  assert.equal(gokulam[0].areaName, 'Gokulam');

  const mysore = filterProjects(sampleProjects, { areaQuery: 'Mysore' });
  assert.equal(mysore.length, 3);
});

test('filterProjects filters by maximum rate per sq ft', () => {
  const affordable = filterProjects(sampleProjects, { maxRatePerSqFt: 2000 });
  assert.equal(affordable.length, 1);
  assert.equal(affordable[0].ratePerSqFt, 1950);
});

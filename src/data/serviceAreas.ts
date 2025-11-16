export interface ServiceArea {
  name: string;
  slug: string;
  description: string;
  group: 'downtown' | 'north' | 'south' | 'west' | 'waterfront' | 'palm-beach-gardens' | 'jupiter' | 'boca-raton' | 'delray-beach' | 'wellington' | 'other-cities';
  nearbyAreas: string[];
  popularServices: string[];
  county?: string;
  population?: string;
  medianHomeValue?: string;
}

export const westPalmBeachNeighborhoods: ServiceArea[] = [
  {
    name: 'Flamingo Park',
    slug: 'flamingo-park',
    description: 'Historic neighborhood with Mediterranean Revival and Art Deco homes built in the 1920s-1930s',
    group: 'downtown',
    nearbyAreas: ['el-cid', 'grandview-heights', 'prospect-park', 'south-olive'],
    popularServices: ['divorce-appraisal', 'estate-appraisal', 'retrospective-appraisal', 'pre-listing-appraisals'],
    medianHomeValue: '$450,000'
  },
  {
    name: 'El Cid',
    slug: 'el-cid',
    description: 'Mediterranean-style historic district featuring Spanish Colonial and Mission Revival architecture',
    group: 'downtown',
    nearbyAreas: ['flamingo-park', 'grandview-heights', 'prospect-park'],
    popularServices: ['divorce-appraisal', 'estate-appraisal', 'retrospective-appraisal'],
    medianHomeValue: '$485,000'
  },
  {
    name: 'Grandview Heights',
    slug: 'grandview-heights',
    description: 'Upscale historic neighborhood with lakefront properties and architectural diversity',
    group: 'downtown',
    nearbyAreas: ['flamingo-park', 'el-cid', 'prospect-park'],
    popularServices: ['divorce-appraisal', 'estate-appraisal', 'pre-listing-appraisals'],
    medianHomeValue: '$525,000'
  },
  {
    name: 'Prospect Park',
    slug: 'prospect-park',
    description: 'Tree-lined streets with 1920s bungalows and Mediterranean Revival homes',
    group: 'downtown',
    nearbyAreas: ['flamingo-park', 'el-cid', 'grandview-heights'],
    popularServices: ['divorce-appraisal', 'estate-appraisal', 'pmi-removal'],
    medianHomeValue: '$420,000'
  },
  {
    name: 'Old Northwood',
    slug: 'old-northwood',
    description: 'Historic preservation district with diverse architectural styles from the 1920s',
    group: 'north',
    nearbyAreas: ['northwood', 'northwood-shores', 'flamingo-park'],
    popularServices: ['divorce-appraisal', 'estate-appraisal', 'retrospective-appraisal'],
    medianHomeValue: '$395,000'
  },
  {
    name: 'Northwood',
    slug: 'northwood',
    description: 'Established neighborhood with affordable homes and community amenities',
    group: 'north',
    nearbyAreas: ['old-northwood', 'northwood-shores', 'northwood-hills'],
    popularServices: ['pre-purchase-appraisal', 'pre-listing-appraisals', 'pmi-removal'],
    medianHomeValue: '$325,000'
  },
  {
    name: 'Northwood Shores',
    slug: 'northwood-shores',
    description: 'Waterfront community with single-family homes and canal access',
    group: 'north',
    nearbyAreas: ['old-northwood', 'northwood', 'northwood-harbor'],
    popularServices: ['divorce-appraisal', 'pre-listing-appraisals', 'insurance-replacement-cost'],
    medianHomeValue: '$580,000'
  },
  {
    name: 'Northwood Harbor',
    slug: 'northwood-harbor',
    description: 'Waterfront neighborhood with canal-front properties and boat access',
    group: 'north',
    nearbyAreas: ['northwood-shores', 'northwood-hills'],
    popularServices: ['divorce-appraisal', 'estate-appraisal', 'insurance-replacement-cost'],
    medianHomeValue: '$620,000'
  },
  {
    name: 'Northwood Hills',
    slug: 'northwood-hills',
    description: 'Well-established community with tree-lined streets and single-family homes',
    group: 'north',
    nearbyAreas: ['northwood', 'northwood-harbor', 'pleasant-city'],
    popularServices: ['pre-purchase-appraisal', 'pmi-removal', 'divorce-appraisal'],
    medianHomeValue: '$365,000'
  },
  {
    name: 'SoSo (South of Southern)',
    slug: 'soso',
    description: 'Trendy arts district with galleries, studios, and revitalized historic properties',
    group: 'south',
    nearbyAreas: ['southland-park', 'vedado', 'el-cid'],
    popularServices: ['pre-listing-appraisals', 'divorce-appraisal', 'pre-purchase-appraisal'],
    medianHomeValue: '$380,000'
  },
  {
    name: 'Southland Park',
    slug: 'southland-park',
    description: 'Quiet residential area with parks and family-friendly atmosphere',
    group: 'south',
    nearbyAreas: ['soso', 'vedado', 'south-olive'],
    popularServices: ['pre-purchase-appraisal', 'pmi-removal', 'divorce-appraisal'],
    medianHomeValue: '$340,000'
  },
  {
    name: 'Vedado',
    slug: 'vedado',
    description: 'Compact neighborhood with diverse housing and convenient location',
    group: 'south',
    nearbyAreas: ['soso', 'southland-park'],
    popularServices: ['pre-purchase-appraisal', 'pmi-removal'],
    medianHomeValue: '$315,000'
  },
  {
    name: 'South Olive',
    slug: 'south-olive',
    description: 'Mixed-use area with residential properties near downtown amenities',
    group: 'south',
    nearbyAreas: ['flamingo-park', 'southland-park'],
    popularServices: ['pre-listing-appraisals', 'pre-purchase-appraisal'],
    medianHomeValue: '$295,000'
  },
  {
    name: 'Villages of Palm Beach Lakes',
    slug: 'villages-palm-beach-lakes',
    description: 'Family-oriented community with parks, schools, and recreational facilities',
    group: 'west',
    nearbyAreas: ['westgate', 'wyndam-park', 'pleasant-city'],
    popularServices: ['pre-purchase-appraisal', 'divorce-appraisal', 'pmi-removal'],
    medianHomeValue: '$285,000'
  },
  {
    name: 'Westgate',
    slug: 'westgate',
    description: 'Established neighborhood west of downtown with diverse housing options',
    group: 'west',
    nearbyAreas: ['villages-palm-beach-lakes', 'wyndam-park'],
    popularServices: ['pre-purchase-appraisal', 'pmi-removal'],
    medianHomeValue: '$275,000'
  },
  {
    name: 'Wyndam Park',
    slug: 'wyndam-park',
    description: 'Residential community with single-family homes and townhouses',
    group: 'west',
    nearbyAreas: ['westgate', 'villages-palm-beach-lakes'],
    popularServices: ['pre-purchase-appraisal', 'divorce-appraisal'],
    medianHomeValue: '$260,000'
  },
  {
    name: 'Pleasant City',
    slug: 'pleasant-city',
    description: 'Established community with affordable housing options',
    group: 'west',
    nearbyAreas: ['northwood-hills', 'villages-palm-beach-lakes'],
    popularServices: ['pre-purchase-appraisal', 'pmi-removal'],
    medianHomeValue: '$245,000'
  },
  {
    name: 'Ibis Isle',
    slug: 'ibis-isle',
    description: 'Exclusive waterfront community with luxury estates and Intracoastal access',
    group: 'waterfront',
    nearbyAreas: ['el-cid', 'flamingo-park'],
    popularServices: ['divorce-appraisal', 'estate-appraisal', 'insurance-replacement-cost'],
    medianHomeValue: '$1,200,000'
  },
  {
    name: 'Casa Costa',
    slug: 'casa-costa',
    description: 'Waterfront neighborhood with Mediterranean-style homes and canal views',
    group: 'waterfront',
    nearbyAreas: ['northwood-shores', 'northwood-harbor'],
    popularServices: ['divorce-appraisal', 'estate-appraisal', 'insurance-replacement-cost'],
    medianHomeValue: '$780,000'
  },
  {
    name: 'Lakeside Green',
    slug: 'lakeside-green',
    description: 'Lakefront community with nature preserve and recreational amenities',
    group: 'west',
    nearbyAreas: ['villages-palm-beach-lakes'],
    popularServices: ['pre-purchase-appraisal', 'divorce-appraisal'],
    medianHomeValue: '$320,000'
  }
];

export const otherCities: ServiceArea[] = [
  {
    name: 'Palm Beach Gardens',
    slug: 'palm-beach-gardens',
    description: 'Premier city with golf communities including PGA National, Frenchman\'s Reserve, and Mirasol',
    group: 'palm-beach-gardens',
    nearbyAreas: ['jupiter', 'north-palm-beach'],
    popularServices: ['divorce-appraisal', 'estate-appraisal', 'pre-listing-appraisals', 'gift-tax-appraisal'],
    county: 'Palm Beach County',
    population: '59,000',
    medianHomeValue: '$485,000'
  },
  {
    name: 'Jupiter',
    slug: 'jupiter',
    description: 'Coastal community featuring Jupiter Island, Abacoa, and Jupiter Farms',
    group: 'jupiter',
    nearbyAreas: ['palm-beach-gardens', 'tequesta', 'juno-beach'],
    popularServices: ['divorce-appraisal', 'estate-appraisal', 'insurance-replacement-cost'],
    county: 'Palm Beach County',
    population: '61,000',
    medianHomeValue: '$520,000'
  },
  {
    name: 'Wellington',
    slug: 'wellington',
    description: 'Equestrian capital with premier horse properties and upscale communities',
    group: 'wellington',
    nearbyAreas: ['royal-palm-beach', 'lake-worth'],
    popularServices: ['divorce-appraisal', 'estate-appraisal', 'fractional-interest-valuation'],
    county: 'Palm Beach County',
    population: '61,000',
    medianHomeValue: '$520,000'
  },
  {
    name: 'Boca Raton',
    slug: 'boca-raton',
    description: 'Upscale city with luxury communities including Mizner Park, Addison Reserve, and The Sanctuary',
    group: 'boca-raton',
    nearbyAreas: ['delray-beach', 'deerfield-beach'],
    popularServices: ['divorce-appraisal', 'estate-appraisal', 'gift-tax-appraisal', 'expert-witness-appraisal'],
    county: 'Palm Beach County',
    population: '98,000',
    medianHomeValue: '$575,000'
  },
  {
    name: 'Delray Beach',
    slug: 'delray-beach',
    description: 'Vibrant coastal city with Atlantic Avenue, Tropic Isle, and Seagate communities',
    group: 'delray-beach',
    nearbyAreas: ['boca-raton', 'boynton-beach'],
    popularServices: ['divorce-appraisal', 'estate-appraisal', 'pre-listing-appraisals'],
    county: 'Palm Beach County',
    population: '69,000',
    medianHomeValue: '$465,000'
  },
  {
    name: 'Boynton Beach',
    slug: 'boynton-beach',
    description: 'Coastal city featuring Ocean Ridge, Villages of Oriole, and Canyon Lakes',
    group: 'other-cities',
    nearbyAreas: ['delray-beach', 'lake-worth'],
    popularServices: ['pre-purchase-appraisal', 'divorce-appraisal', 'pmi-removal'],
    county: 'Palm Beach County',
    population: '78,000',
    medianHomeValue: '$340,000'
  },
  {
    name: 'Lake Worth',
    slug: 'lake-worth',
    description: 'Historic city with College Park, Palm Heights, and Lake Osborne neighborhoods',
    group: 'other-cities',
    nearbyAreas: ['wellington', 'boynton-beach', 'lantana'],
    popularServices: ['pre-purchase-appraisal', 'pmi-removal', 'divorce-appraisal'],
    county: 'Palm Beach County',
    population: '42,000',
    medianHomeValue: '$285,000'
  },
  {
    name: 'Riviera Beach',
    slug: 'riviera-beach',
    description: 'Waterfront city with Singer Island, Harbour Isle, and Old Port Cove',
    group: 'other-cities',
    nearbyAreas: ['north-palm-beach', 'palm-beach-shores'],
    popularServices: ['divorce-appraisal', 'insurance-replacement-cost', 'estate-appraisal'],
    county: 'Palm Beach County',
    population: '35,000',
    medianHomeValue: '$395,000'
  },
  {
    name: 'North Palm Beach',
    slug: 'north-palm-beach',
    description: 'Village featuring Lost Tree Village and Anchorage Park waterfront communities',
    group: 'other-cities',
    nearbyAreas: ['palm-beach-gardens', 'riviera-beach', 'juno-beach'],
    popularServices: ['divorce-appraisal', 'estate-appraisal', 'insurance-replacement-cost'],
    county: 'Palm Beach County',
    population: '13,000',
    medianHomeValue: '$625,000'
  },
  {
    name: 'Palm Beach',
    slug: 'palm-beach',
    description: 'Exclusive island with Worth Avenue, El Brillo Way, and oceanfront luxury estates',
    group: 'other-cities',
    nearbyAreas: ['west-palm-beach', 'palm-beach-shores'],
    popularServices: ['estate-appraisal', 'gift-tax-appraisal', 'insurance-replacement-cost', 'expert-witness-appraisal'],
    county: 'Palm Beach County',
    population: '9,000',
    medianHomeValue: '$3,500,000'
  },
  {
    name: 'Royal Palm Beach',
    slug: 'royal-palm-beach',
    description: 'Growing community with Madison Green, Toscana, and Saratoga developments',
    group: 'other-cities',
    nearbyAreas: ['wellington', 'westlake'],
    popularServices: ['pre-purchase-appraisal', 'divorce-appraisal', 'pmi-removal'],
    county: 'Palm Beach County',
    population: '41,000',
    medianHomeValue: '$365,000'
  },
  {
    name: 'Juno Beach',
    slug: 'juno-beach',
    description: 'Small beach town with beachfront condos and oceanfront properties',
    group: 'other-cities',
    nearbyAreas: ['north-palm-beach', 'jupiter'],
    popularServices: ['divorce-appraisal', 'insurance-replacement-cost', 'estate-appraisal'],
    county: 'Palm Beach County',
    population: '3,500',
    medianHomeValue: '$685,000'
  },
  {
    name: 'Tequesta',
    slug: 'tequesta',
    description: 'Village featuring Jupiter Hills and Tequesta Country Club',
    group: 'other-cities',
    nearbyAreas: ['jupiter', 'palm-beach-gardens'],
    popularServices: ['divorce-appraisal', 'estate-appraisal', 'pre-listing-appraisals'],
    county: 'Palm Beach County',
    population: '6,000',
    medianHomeValue: '$595,000'
  },
  {
    name: 'Greenacres',
    slug: 'greenacres',
    description: 'Family-friendly city with diverse neighborhoods and convenient shopping',
    group: 'other-cities',
    nearbyAreas: ['lake-worth', 'wellington'],
    popularServices: ['pre-purchase-appraisal', 'pmi-removal', 'divorce-appraisal'],
    county: 'Palm Beach County',
    population: '41,000',
    medianHomeValue: '$265,000'
  },
  {
    name: 'Lantana',
    slug: 'lantana',
    description: 'Coastal town with Hypoluxo Island and oceanfront properties',
    group: 'other-cities',
    nearbyAreas: ['lake-worth', 'boynton-beach'],
    popularServices: ['divorce-appraisal', 'insurance-replacement-cost', 'pre-purchase-appraisal'],
    county: 'Palm Beach County',
    population: '11,000',
    medianHomeValue: '$385,000'
  }
];

export const allServiceAreas = [...westPalmBeachNeighborhoods, ...otherCities];

export const getAreaBySlug = (slug: string): ServiceArea | undefined => {
  return allServiceAreas.find(area => area.slug === slug);
};

export const getAreasByGroup = (group: ServiceArea['group']): ServiceArea[] => {
  return allServiceAreas.filter(area => area.group === group);
};

export const getNearbyAreas = (slug: string): ServiceArea[] => {
  const area = getAreaBySlug(slug);
  if (!area) return [];
  return area.nearbyAreas.map(nearbySlug => getAreaBySlug(nearbySlug)).filter(Boolean) as ServiceArea[];
};

// Type definitions for historical events data

export interface HistoricalEvent {
  id: string;
  title: string;
  year: number;
  category: 'Wars' | 'Science' | 'Discoveries' | 'Culture' | 'Catastrophes' | 'Architecture' | 'Political';
  continent: 'Africa' | 'Asia' | 'Europe' | 'Americas' | 'Oceania';
  country: string;
  location: {
    lat: number;
    lng: number;
  };
  shortDescription: string;
  fullDescription: string;
  globalImpact: string;
  imageUrl: string;
  era: 'Ancient' | 'Medieval' | 'Renaissance' | 'Industrial' | 'Modern';
  civilization?: string;
  isTopInfluential?: boolean;
}

export interface Era {
  id: string;
  name: string;
  title: string;
  icon: string;
  description: string;
  timeRange: string;
}

export interface Story {
  id: string;
  title: string;
  description: string;
  icon: string;
  relatedEvents: string[];
}

export interface FilterOptions {
  era?: string;
  continent?: string;
  category?: string;
  yearFrom?: number;
  yearTo?: number;
}

export interface Analytics {
  eventsByCentury: { century: string; count: number }[];
  eventsByContinent: { continent: string; count: number }[];
  eventsByCategory: { category: string; count: number }[];
}

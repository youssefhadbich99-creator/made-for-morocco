export interface ItineraryRequest {
  duration: number;
  travelers: number;
  interests: string[];
  style: 'relaxing' | 'adventure' | 'cultural' | 'luxury';
}

export interface GeneratedItinerary {
  title: string;
  summary: string;
  days: {
    day: number;
    title: string;
    activities: string[];
  }[];
}

export enum NavigationSection {
  HOME = 'home',
  EXPERIENCE = 'experience',
  DESTINATIONS = 'destinations',
  BESPOKE_PLANNER = 'bespoke-planner',
  CONTACT = 'contact'
}

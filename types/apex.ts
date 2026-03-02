// Intent classification types for AI Navigator
export type IntentType = 
  | 'training-goal'
  | 'weather-condition'
  | 'sport-specific'
  | 'technical-question'
  | 'product-search'
  | 'size-predictor'
  | 'general-inquiry';

export interface ParsedIntent {
  type: IntentType;
  confidence: number; // 0-1
  keywords: string[];
  suggestedRoute: string;
  metadata?: Record<string, string | number>;
}

// Navigation state types
export type NavigationState = 'idle' | 'processing' | 'navigating' | 'error';

export interface ApexPilotState {
  query: string;
  state: NavigationState;
  parsedIntent: ParsedIntent | null;
  error: string | null;
  isOpen: boolean;
}

// Product & Category types
export type SportCategory = 
  | 'running'
  | 'football'
  | 'basketball'
  | 'cycling'
  | 'swimming'
  | 'tennis'
  | 'hiking'
  | 'yoga'
  | 'crossfit';

export interface ProductItem {
  id: string;
  name: string;
  category: SportCategory;
  price: number;
  image: string;
  modelUrl?: string; // GLB/USDZ 3D model
  tags: string[];
  weatherResistant?: boolean;
  proLevel?: boolean;
}

// Bento Grid layout types
export interface BentoGridItem {
  id: string;
  product: ProductItem;
  span: 'small' | 'medium' | 'featured'; // featured = 2x2
  order: number;
}

// Training bundle types
export interface TrainingBundle {
  id: string;
  name: string;
  duration: number; // in weeks
  sportType: SportCategory;
  products: ProductItem[];
  description: string;
}

// User session types
export interface UserSession {
  userId: string;
  recentQueries: string[];
  favoriteCategories: SportCategory[];
  savedBundles: string[]; // Bundle IDs
}
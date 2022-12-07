export interface EditionItem {
  id: string;
  name: string;
  description: string;
}

export interface FeatureEditionsItem {
  edition: {
    id: string;
    name: string;
  };
  limit: number | null;
  limitType: string | null;
  constraint: number | null;
  constraintType: string | null;
  speed: number | null;
  speedType: string | null;
}

export interface Baremetrics {
  id: string;
  name: string;
  tagline: string;
  description: string | null;
  URL: string;
  modeDesktopLight: boolean;
  modeDesktopDark: boolean;
  modeMobileLight: boolean;
  modeMobileDark: boolean;
  editions: {
    items: EditionItem[];
  };
  features: {
    items: {
      id: string;
      name: string;
      description: string;
      URL: string;
      selector: string;
      takeScreenshot: boolean;
      timeOfScreenshot: string;
      filename: string;
      filepathDesktopLight: string;
      filepathDesktopDark: string | null;
      filepathMobileLight: string | null;
      filepathMobileDark: string | null;
      FeatureEditions: {
        items: FeatureEditionsItem[];
      };
    }[];
  };
}

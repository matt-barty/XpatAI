'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export interface LegalData {
  visaRequirements: string;
  pathToResidency: string;
  requiredDocuments: string[];
}

export interface QualityData {
  healthcare: {
    system: string;
    quality: string;
    cost: string;
  };
  safety: {
    index: string;
    details: string;
  };
  environment: {
    airQuality: string;
    climate: string;
    sustainability: string;
  };
  education: {
    system: string;
    universities: string;
    internationalSchools: string;
  };
}

interface CountryData {
  legal?: LegalData;
  quality?: QualityData;
}

interface CountryDataContextType {
  countryData: Record<string, CountryData>;
  getLegalData: (country: string) => Promise<LegalData>;
  getQualityData: (country: string) => Promise<QualityData>;
  isLoading: boolean;
}

const CountryDataContext = createContext<CountryDataContextType | undefined>(undefined);

export function CountryDataProvider({ children }: { children: ReactNode; }) {
  const [countryData, setCountryData] = useState<Record<string, CountryData>>({});
  const [isLoading, setIsLoading] = useState(false);

  const getLegalData = async (country: string): Promise<LegalData> => {
    if (countryData[country]?.legal) {
      return countryData[country].legal!;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/generateCountryData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          country,
          section: 'legal'
        }),
      });

      const data = await response.json();

      setCountryData(prev => ({
        ...prev,
        [country]: {
          ...prev[country],
          legal: data
        }
      }));

      return data;
    } catch (error) {
      console.error('Failed to generate legal data:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const getQualityData = async (country: string): Promise<QualityData> => {
    if (countryData[country]?.quality) {
      return countryData[country].quality!;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/generateCountryData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          country,
          section: 'quality'
        }),
      });

      const data = await response.json();

      setCountryData(prev => ({
        ...prev,
        [country]: {
          ...prev[country],
          quality: data
        }
      }));

      return data;
    } catch (error) {
      console.error('Failed to generate quality data:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CountryDataContext.Provider value={{
      countryData,
      getLegalData,
      getQualityData,
      isLoading
    }}>
      {children}
    </CountryDataContext.Provider>
  );
}

export function useCountryData() {
  const context = useContext(CountryDataContext);
  if (context === undefined) {
    throw new Error('useCountryData must be used within a CountryDataProvider');
  }
  return context;
} 
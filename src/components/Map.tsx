import dynamic from 'next/dynamic';
import { Destination } from '@/constants/baliDestinations';

interface MapProps {
  destinations: Destination[];
  selectedDestination?: string;
}

// Dynamic import with no SSR
const ClientMap = dynamic(() => import('./ClientMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[600px] bg-gray-100 flex items-center justify-center">
      <p>Loading map...</p>
    </div>
  ),
});

export const Map = (props: MapProps) => {
  return <ClientMap {...props} />;
};
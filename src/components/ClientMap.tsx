"use client";

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Destination } from '@/constants/baliDestinations';

interface ClientMapProps {
  destinations: Destination[];
  selectedDestination?: string;
}

const ClientMap = ({ destinations, selectedDestination }: ClientMapProps) => {
  const [icon, setIcon] = useState<L.Icon | null>(null);
  const centerPosition: [number, number] = [-8.4095, 115.1889];

  useEffect(() => {
    setIcon(
      new L.Icon({
        iconUrl: '/marker-icon.png',
        shadowUrl: '/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41]
      })
    );
  }, []);

  if (!icon) {
    return (
      <div className="w-full h-full min-h-[600px] bg-gray-100 flex items-center justify-center">
        <p>Loading map...</p>
      </div>
    );
  }

  return (
    <MapContainer
      center={centerPosition}
      zoom={10}
      className="w-full h-full min-h-[600px]"
      style={{ background: '#f0f0f0' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {destinations.map((dest) => (
        <Marker
          key={dest.id}
          position={dest.location}
          icon={icon}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-lg">{dest.name}</h3>
              <p className="text-sm text-gray-600">{dest.description}</p>
              <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                {dest.type}
              </span>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ClientMap;
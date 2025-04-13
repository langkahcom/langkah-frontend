export interface Destination {
  id: string;
  name: string;
  description: string;
  location: [number, number]; // [latitude, longitude]
  type: 'beach' | 'temple' | 'nature' | 'culture';
}

export const baliDestinations: Destination[] = [
  {
    id: 'uluwatu',
    name: 'Uluwatu Temple',
    description: 'Ancient sea temple perched on cliffs above the Indian Ocean',
    location: [-8.8291, 115.0849],
    type: 'temple'
  },
  {
    id: 'ubud',
    name: 'Ubud Sacred Monkey Forest',
    description: 'Natural forest sanctuary with temples and hundreds of monkeys',
    location: [-8.5187, 115.2582],
    type: 'nature'
  },
  {
    id: 'tegalalang',
    name: 'Tegalalang Rice Terrace',
    description: 'Famous terraced rice paddies showcasing traditional Balinese irrigation',
    location: [-8.4316, 115.2775],
    type: 'nature'
  },
  {
    id: 'kuta',
    name: 'Kuta Beach',
    description: 'Popular beach known for surfing and stunning sunsets',
    location: [-8.7185, 115.1686],
    type: 'beach'
  },
  {
    id: 'tanah-lot',
    name: 'Tanah Lot Temple',
    description: 'Ancient Hindu shrine perched on a rocky islet',
    location: [-8.6215, 115.0865],
    type: 'temple'
  }
];
export interface MedicalData {
  babyName: string;
  dateOfBirth: string;
  medicalHistory: string;
  previousConsultations: string;
  medicalTests: string;
}

export interface Location {
  lat: number;
  lng: number;
  address: string;
}

export interface Hospital {
  id: string;
  name: string;
  location: Location;
  price: number;
  rating: number;
  distance: number;
  walkingTime: string;
  drivingTime: string;
  reviews: Review[];
  facilities: string[];
  openingHours: string;
}

export interface DeliveryRequest {
  id: string;
  driverName: string;
  price: number;
  estimatedTime: string;
  rating: number;
  phoneNumber: string;
  currentLocation: Location;
  route: Location[];
}

export interface MilkOrder {
  type: string;
  quantity: number;
  paymentMethod: string;
  deliveryOption: 'pickup' | 'delivery';
  location?: Location;
  store?: Store;
}

export interface Store {
  id: string;
  name: string;
  location: Location;
  distance: number;
  walkingTime: string;
  drivingTime: string;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Nursery {
  id: string;
  name: string;
  location: Location;
  price: number;
  rating: number;
  distance: number;
  walkingTime: string;
  drivingTime: string;
  reviews: Review[];
  facilities: string[];
  ageGroups: string[];
  openingHours: string;
}
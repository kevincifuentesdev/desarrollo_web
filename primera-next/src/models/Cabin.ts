export default interface Cabin {
  id: string;
  name: string;
  location: string;
  price: number;
  capacities: number;
  comodities: string[];
  weather: string;
  rating: number;
  pictures: string[];
  videos?: string[];
  cancellationPolicy: string;
  categories: string[];
}
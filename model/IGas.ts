export interface IGas {
  id: string;
  car: string | undefined;
  date: string;
  mileage: number;
  fuelVolume: number;
  amount: number;
  note: string;
  photo?: string;
}

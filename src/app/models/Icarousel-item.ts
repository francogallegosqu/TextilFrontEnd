export interface ICarouselItem {
  id: number;
  title: {
    nombre: string;
    trabajo: string;
  };
  frase: string;
  order?: number;
  marginLeft?: number;
}

export interface CarouselItem {
  id: number;
  title: {
    nombre: string;
    trabajo: string;
  };
  frase: string;
  image?: string;
  order?: number;
  marginLeft?: number;
}

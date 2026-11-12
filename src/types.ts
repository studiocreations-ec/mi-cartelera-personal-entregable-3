export type TipoContenido = 'pelicula' | 'serie';
export type Estado = 'por_ver' | 'viendo' | 'vista';
export interface Titulo {
  tmdb_id: number;
  titulo: string;
  tipo_contenido: TipoContenido;
  poster_url: string | null;
  sinopsis: string;
  fecha_estreno: string | null;
  calificacion_tmdb: number | null;
  duracion: number | null;
  generos: string[];
  reparto?: string[];
}
export interface MiItem extends Omit<Titulo, 'duracion' | 'generos'> {
  id: number;
  estado: Estado;
  calificacion_personal: number | null;
  comentario: string | null;
  fecha_agregado: string;
}

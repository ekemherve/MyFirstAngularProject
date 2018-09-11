import { ICategorie } from './icategorie';

export interface IProduit {
  id: number;
  nom: string;
  prix: number;
  description: string;
  categorie?: ICategorie;
  quantite: number;
  image: string;
}

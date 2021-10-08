import {Commentaire} from "./commentaire.model";

export interface Restaurant {
  id: number,
  nom: string,
  adresse: string,
  evaluations: Commentaire[]
}

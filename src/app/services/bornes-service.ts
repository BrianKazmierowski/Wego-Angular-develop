import { Injectable } from "@angular/core"
import { Borne } from "../models/Borne"

@Injectable({
  providedIn: 'root'
})

export class BorneService {

  bornes: Borne[] = [
    {
      name: 'Bavilliers-02',
      serie: 'BU_00152_BELFORT',
      location: 'Zone Industrielle, 90800 Bavilliers, France',
      statut: 'Actif',
      puissance: 22,
      courant: 'AC',
      id: 1
    },
    {
      name: 'bornedracy01',
      serie: 'BU_03923_DRACY',
      location: 'La Tuilerie, 71640 Dracy-le-Fort, France',
      statut: 'Actif',
      puissance: 22,
      courant: 'AC',
      id: 2
    },

    {
      name: 'bornedracy02',
      serie: 'BU_03923_DRACY',
      location: 'La Tuilerie, 71640 Dracy-le-Fort, France',
      statut: 'Actif',
      puissance: 22,
      courant: 'AC',
      id: 3
    },
    {
      name: 'Chemaudin-01',
      serie: 'BU_00153_BESANCON',
      location: 'Zone Industrielle 25320 CHEMAUDIN',
      statut: 'Actif',
      puissance: 22,
      courant: 'AC',
      id: 4
    },
    {
      name: 'EIFFAGEMETZ-01',
      serie: 'BU_00320_METZ',
      location: '3 Rue des Nonnetiers, 57070 Metz, France',
      statut: 'Actif',
      puissance: 22,
      courant: 'AC',
      id: 5
    },

    {
      name: 'EIFFAGEMETZ-02',
      serie: 'BU_00320_METZ',
      location: '3 Rue des Nonnetiers, 57070 Metz, France',
      statut: 'Actif',
      puissance: 22,
      courant: 'AC',
      id: 6
    },
    {
      name: 'Initial_Nex',
      serie: 'BU_00317_LUDRES',
      location: '130 Rue Pierre Gilles de Gennes, Ludres, France',
      statut: 'Actif',
      puissance: 22,
      courant: 'AC',
      id: 7
    },
    {
      name: 'LOHNER_DUPPIGHEM',
      serie: 'LOHNER_BU_03515',
      location: '32 Rue de la Gare, 67120 Duppigheim, France',
      statut: 'Actif',
      puissance: 22,
      courant: 'AC',
      id: 8
    },

    {
      name: 'LudresSlave3',
      serie: 'BU_00317_LUDRES',
      location: '130 Rue Pierre Gilles de Gennes, Ludres, France',
      statut: 'Actif',
      puissance: 22,
      courant: 'AC',
      id: 9
    },
    {
      name: 'LudresSlave3',
      serie: 'BU_00317_LUDRES',
      location: '130 Rue Pierre Gilles de Gennes, Ludres, France',
      statut: 'Actif',
      puissance: 22,
      courant: 'AC',
      id: 10
    },
    {
      name: 'LudresSlave3',
      serie: 'BU_00317_LUDRES',
      location: '130 Rue Pierre Gilles de Gennes, Ludres, France',
      statut: 'Actif',
      puissance: 22,
      courant: 'AC',
      id: 11
    },
    {
      name: 'LudresSlave3',
      serie: 'BU_00317_LUDRES',
      location: '130 Rue Pierre Gilles de Gennes, Ludres, France',
      statut: 'Actif',
      puissance: 22,
      courant: 'AC',
      id: 12
    }
  ]

  constructor() { }

  getAllBornes(): Borne[] {
    return this.bornes;
  }

  getAllBornesBySearchTerm(searchTerm: string) {
    return this.getAllBornes().filter(bornes => bornes.location.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

  getBornesByName(borneName: string): Borne {
    const borne = this.bornes.find(bornes => bornes.name === borneName);
    if (!borne) {
      throw new Error('Borne introuvable');
    } else {
      return borne;
    }
  }

  getBornesById(borneId: number): Borne {
    const borne = this.bornes.find(bornes => bornes.id === borneId);
    if (!borne) {
      throw new Error('Borne introuvable');
    } else {
      return borne;
    }
  }
}

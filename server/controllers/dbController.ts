import { Request, Response } from "express";

import { getAllRegioniQuery } from "../utils/constant";
import axios from "axios";
import RegionModel from "../models/region";


/**
 * Set db data from urls
 * 
 * @param req 
 * @param res 
 */
export const saveDataIntoDB = async (req: Request, res: Response) => {

    await RegionModel.deleteMany();
    fetchFromUrl(getAllRegioniQuery)
        .then(data => {
            saveRegions(data);
        })
        .catch(err => console.log(err));
    

};

/**
 * Utilizzo axios per ottenere i dati dalla sorgente (url)
 * 
 * @param url 
 * @returns a json
 */
const fetchFromUrl = async (url: string) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch(error) {
        console.log('Error: ' + error)
    }
};

/**
 * Ciclo su tutti i codici regione di "data".
 * Per ogni elemento salvo nel db un oggetto con la coppia di valori
 * COD_REGIONE e DESC_REGIONE
 * 
 * @param data 
 */
const saveRegions = async (data: any) => {
    try {
        for (let index = 0; index < data.COD_REGIONE.length; index++) {
            const region = new RegionModel({
                COD_REGIONE: data.COD_REGIONE[index],
                DESC_REGIONE: data.DESC_REGIONE[index]
            })
            region.save()
                .then(result => console.log(result))
                .catch(err => console.log(err))
        }
    } catch(err) {
        console.log('Error: ' + err)
    }
}
import { Request, Response, response } from "express";

import { getAllRegioniQuery } from "../utils/constant";
import axios from "axios";

/** 
 * set db data from urls
 * 
 */

export const saveDataIntoDB = async (req: Request, res: Response) => {
    fetchRegionFromUrl(req, res);
};


const fetchRegionFromUrl = async (req: Request, res: Response) => {
    try {
        axios.get(getAllRegioniQuery)
            .then(response => console.log(response.data))
            .catch(err => console.log(err))
        res.status(200);
    } catch(error) {
        console.log('Error: ' + error)
        res.status(500).json({ message: 'Internal server error' });
    }
};
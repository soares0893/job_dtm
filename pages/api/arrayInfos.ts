import infocards from '../../src/data/arrayInfos';
import Infos from '../../src/models/Infos';

import connect from '../../src/utils/connection';

export default async function handler(req, res) {
    const { db } = await connect();

    const array = []
    for (let i = 0; i < infocards.length; i++){
        array.push(infocards[i].toObject())
    }
    
    if (req.method === 'GET') {
        const getData = await db.collection('infos').find().toArray()
        res.status(200).json(getData)
    }    
    
    if (req.method === 'POST') {
        const { data, type, units, forecast } = req.body
        if (!data && !type && !units && !forecast) { res.status(200).json('Missing data') }
        
        const sendData = await db.collection('infos').insertOne({
            data, type, units, forecast
        })
        res.status(200).json(sendData)
    }

    if (req.method === 'DELETE') {
        for (let i = 0; i < infocards.length; i++) {
            if (infocards[i].toObject().id == req.body.id) {
                infocards.splice(+infocards[i], 1)
                const newArray = []
                for (let i = 0; i < infocards.length; i++){
                newArray.push(infocards[i].toObject())    }
                res.status(200).json(newArray)
            }
        }
        res.status(200).json(req.body)
    }

    res.status(202).json('ok')
}
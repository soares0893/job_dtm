import connect from '../../src/utils/connection';

export default async function handler(req, res) {
    const { db } = await connect();
    const { data, type, units, forecast } = req.body
    
    if (req.method === 'GET') {
        const getData = await db.collection('infos').find().toArray()
        res.status(200).json(getData)
    }    
    
    if (req.method === 'POST') {
        if (!data || !type || !units || !forecast) { res.status(404).json('Missing data') }
        
        const sendData = await db.collection('infos').insertOne({
            data, type, units, forecast
        })
        res.status(200).json(sendData)
    }

    res.status(404).json('Not allowed')
}
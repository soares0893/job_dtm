import connect from '../../src/utils/connection';
import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
    const { db } = await connect();
    const { data, type, units, forecast } = req.body

    await NextCors(req, res, {
      // Options
        //https://www.npmjs.com/package/nextjs-cors
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
    
    if (req.method === 'GET') {
      const getData = await db.collection('infos').find().toArray()
      return res.status(200).json(getData)
    }    
    
    if (req.method === 'POST') {
        if (!data || !type || !units || !forecast) { res.status(404).json('Missing data') }
        
        const sendData = await db.collection('infos').insertOne({
            data, type, units, forecast
        })
        return res.status(200).json(sendData)
    }

    res.status(404).json('Not allowed')
}
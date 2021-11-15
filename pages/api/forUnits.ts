import connect from '../../src/utils/connection';
import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  const { db } = await connect();
  const { data, title, subtitle, subject, width } = req.body

  await NextCors(req, res, {
    // Options
      //https://www.npmjs.com/package/nextjs-cors
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  
  if (req.method === 'DELETE') {
    const title = req.body
    const deletedOne = await db.collection('forUnits').deleteOne({'title': title.title})
    return res.status(200).json(deletedOne)
  }
    
    if (req.method === 'GET') {
      const getData = await db.collection('forUnits').find().toArray()
      return res.status(200).json(getData)
    }    
    
    if (req.method === 'POST') {
        if (!data || !title || !subtitle || !subject || !width) { res.status(404).json('Missing data') }
        
        const sendData = await db.collection('forUnits').insertOne({
            data, title, subtitle, subject, width
        })
        return res.status(200).json(sendData)
    }

  res.status(404).json({message: 'Not Allowed'})
}
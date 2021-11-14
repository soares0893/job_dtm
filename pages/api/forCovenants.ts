import connect from '../../src/utils/connection';
import NextCors from 'nextjs-cors';

export default async function Header(req, res) {
    const { db } = await connect()
    const { data, title, subtitle, subject, width } = req.body

    await NextCors(req, res, {
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200,
    });

    if (req.method === 'DELETE') {
        const title = req.body
        const deletedOne = await db.collection('forCovenants').deleteOne({'title': title.title})
        return res.status(200).json(deletedOne)
    }
    
    if (req.method === "GET") {
        const getData = await db.collection('forCovenants').find().toArray()
        return res.status(200).json(getData)        
    }

    if (req.method === "POST") {
        if (!data || !title || !subtitle || !subject || !width) {
            return res.status(200).json({'message': 'Missing data'})
        }

        const saveData = await db.collection('forCovenants').insertOne(
            {data, title, subtitle, subject, width}
        )        
        return res.status(200).json(saveData);
    }

}
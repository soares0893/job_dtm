import infocards from '../../src/data/arrayInfos';
import Infos from '../../src/models/Infos';

export default function handler(req, res) {

    const array = []
    for (let i = 0; i < infocards.length; i++){
        array.push(infocards[i].toObject())
    }
    
    if (req.method === 'GET') {
        res.status(200).json(array)
    }

    if (req.method === 'POST') {
        res.status(200).json('post')
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
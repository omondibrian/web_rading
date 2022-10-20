// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { data } from './data';

type Data = {
  name: string,
  categoryId:string;
  url: string;
  description: string;
  price:string;
  id:number;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{msg:string,products:Array<Data>}>
) {
    const products = data.products.map((p,i)=>{
       return {
        name: p.name,
        categoryId:p.categoryId,
        url: p.url+"",
        description: p.description,
        price:p.price,
        id:i
       }
    })
  res.status(200).json({ msg:"available products",products })
}



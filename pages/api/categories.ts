// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { data } from './data';

type Data = {
  name: string,
  id:string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{msg:string,categories:Array<Data>}>
) {

  res.status(200).json({ msg:"available categories",categories: data.categories })
}



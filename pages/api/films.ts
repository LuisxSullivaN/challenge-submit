// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import films from '../../data/large-dataset.json';
import { FilmsCollectionData } from '../../types';

export default function filmsHandler(
  req: NextApiRequest,
  res: NextApiResponse<FilmsCollectionData>
) {
  res.status(200).json(films);
}
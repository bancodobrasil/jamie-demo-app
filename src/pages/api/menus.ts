// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  name: string;
};

const { JAMIE_SERVICE_API } = process.env;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await axios.post(
      `${JAMIE_SERVICE_API}/api/v1/menus/jamie-demo/eval`,
      {}
    );
    // console.log("DATA: ", response.data);
    res.status(200).send(response.data);
  } catch (e: any) {
    console.error("error", e);
    res.status(500).send(e.message);
  }
}

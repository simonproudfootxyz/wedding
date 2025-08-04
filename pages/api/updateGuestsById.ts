// This API route returns a Reservation record and its Guests from Airtable

import { getGuestsByIds, updateGuests } from "@/app/utilities/airtable";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { ids }: { ids: string } = req.body;
    const formattedIds: string[] =
      typeof ids === "string" ? ids.split(",") : Array.isArray(ids) ? ids : [];
    const guests: any = await getGuestsByIds(formattedIds);
    const updates = await updateGuests(guests);

    // Return the records as JSON
    res.status(200).json(updates);
  } catch (error) {
    console.error("Error in Airtable API route:", error);
    res.status(500).json({ error: error });
  }
}

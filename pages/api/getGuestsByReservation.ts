// This API route returns a Reservation record and its Guests from Airtable

import { getAirtableRecords, getGuestsByIds } from "@/app/utilities/airtable";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Extract table name from query parameters
    const { slug } = req.query;

    if (!slug || typeof slug !== "string") {
      return res
        .status(400)
        .json({ error: "Slug is required and must be a string." });
    }

    // Fetch records from Airtable
    const reservation = await getAirtableRecords(
      "Reservations",
      "Grid view",
      slug
    );
    const assignees = reservation.fields.Assignee;

    const guests = await getGuestsByIds(assignees);

    // Return the records as JSON
    res.status(200).json(guests);
  } catch (error) {
    console.error("Error in Airtable API route:", error);
    res.status(500).json({ error: error });
  }
}

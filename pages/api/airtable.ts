import { getAirtableRecords } from "@/app/utilities/airtable";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Extract table name from query parameters
    const { tableName, searchByField, searchByIdentifier } = req.query;
    console.log("Table name:", tableName);
    console.log("Identifier:", searchByIdentifier);

    if (!tableName || typeof tableName !== "string") {
      return res
        .status(400)
        .json({ error: "Table name is required and must be a string." });
    }

    // Normalize identifier to string or undefined
    const normalizedIdentifier =
      typeof searchByIdentifier === "string"
        ? searchByIdentifier
        : Array.isArray(searchByIdentifier)
        ? searchByIdentifier[0]
        : undefined;

    // Normalize searchByField to string or undefined
    const normalizedSearchByField =
      typeof searchByField === "string"
        ? searchByField
        : Array.isArray(searchByField)
        ? searchByField[0]
        : undefined;

    // Fetch records from Airtable
    const records = await getAirtableRecords(
      tableName,
      "Grid view",
      normalizedIdentifier,
      normalizedSearchByField // Assuming 'Invite Code' is the field to search by
    );

    // Return the records as JSON
    res.status(200).json(records);
  } catch (error) {
    console.error("Error in Airtable API route:", error);
    res.status(500).json({ error: error });
  }
}

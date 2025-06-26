import Airtable from "airtable";
import {
  AIRTABLE_ATTENDING,
  AIRTABLE_DIETARY_RESTRICTIONS,
  AIRTABLE_EMAIL,
  AIRTABLE_FIRST_NAME,
  AIRTABLE_GUEST_INVITE_TYPE,
  AIRTABLE_LAST_NAME,
  AIRTABLE_OTHER_DIETARY_NOTES,
} from "./consts";

// Initialize Airtable base
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID as string
);

// Function to fetch records from a specific table
export const getAirtableRecords = async (
  tableName: string,
  view = "Grid view",
  searchByIdentifier?: string,
  searchByField: string = "Invite_Code" // Default field to search by
) => {
  console.error(`Fetching records from table: ${tableName} with view: ${view}`);
  try {
    if (searchByIdentifier) {
      const records = await base(tableName)
        .select({
          view,
          filterByFormula: `${searchByField} = "${searchByIdentifier}"`,
        })
        .firstPage();
      return records[0] || null;
    }
    const records = await base(tableName).select({ view }).all();

    return records;
  } catch (error) {
    console.error("Error fetching Airtable records:", error);
    throw error;
  }
};

export const getGuestsByIds = async (assignees: string[]) => {
  console.error(`Fetching guests for assignees: ${assignees}`);
  try {
    const records = await Promise.all(
      assignees.map(async (id) => {
        try {
          // Use select to only fetch the specific field by its ID
          const records = await base("Guests")
            .select({
              filterByFormula: `RECORD_ID() = '${id}'`,
              returnFieldsByFieldId: true,
              fields: [
                AIRTABLE_FIRST_NAME,
                AIRTABLE_LAST_NAME,
                AIRTABLE_EMAIL,
                AIRTABLE_ATTENDING,
                AIRTABLE_GUEST_INVITE_TYPE,
                AIRTABLE_DIETARY_RESTRICTIONS,
                AIRTABLE_OTHER_DIETARY_NOTES,
              ],
              pageSize: 1,
            })
            .firstPage();
          if (records.length === 0) {
            console.error(`No guest found with ID ${id}`);
            return null;
          }
          // Return just the value of the specific field
          return records[0];
        } catch (err) {
          console.error(`Error fetching guest with ID ${id}:`, err);
          return null;
        }
      })
    );
    // Filter out any nulls in case some IDs were not found
    return records.filter((record) => record !== null);
  } catch (error) {
    console.error("Error fetching guests by reservation:", error);
    throw error;
  }
};

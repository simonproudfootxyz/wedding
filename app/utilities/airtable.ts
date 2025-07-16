import Airtable from "airtable";
import {
  AIRTABLE_ATTENDING,
  AIRTABLE_EMAIL,
  AIRTABLE_FIRST_NAME,
  AIRTABLE_GUEST_INVITE_TYPE,
  AIRTABLE_LAST_NAME,
  AIRTABLE_OTHER_DIETARY_NOTES,
} from "./consts";
import { Guest } from "./types";

// Initialize Airtable base
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID as string
);

// Function to fetch records from a specific table
export const getAirtableRecords = async (
  tableName: string,
  view = "Grid view",
  searchByIdentifier?: string,
  searchByField: string = "InviteCode" // Default field to search by
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
          return base("Guests").find(id);
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

export const updateGuests = async (guests: Guest[]) => {
  console.error(`Fetching guests for assignees: ${guests}`);
  try {
    const records = guests.map((guest) => {
      return {
        id: guest.id,
        fields: {
          [AIRTABLE_FIRST_NAME]: guest.fields[AIRTABLE_FIRST_NAME],
          [AIRTABLE_LAST_NAME]: guest.fields[AIRTABLE_LAST_NAME],
          [AIRTABLE_EMAIL]: guest.fields[AIRTABLE_EMAIL],
          [AIRTABLE_ATTENDING]: guest.fields[AIRTABLE_ATTENDING],
          [AIRTABLE_OTHER_DIETARY_NOTES]:
            guest.fields[AIRTABLE_OTHER_DIETARY_NOTES],
          [AIRTABLE_GUEST_INVITE_TYPE]:
            guest.fields[AIRTABLE_GUEST_INVITE_TYPE],
        },
      };
    });
    // Filter out any nulls in case some IDs were not found
    const updatedRecords = await base("Guests").update(records);
    return updatedRecords;
  } catch (error) {
    console.error("Error fetching guests by reservation:", error);
    throw error;
  }
};

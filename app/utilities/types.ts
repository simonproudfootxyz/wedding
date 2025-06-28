export type Guest = {
  id: string;
  fields: {
    FirstName: string;
    LastName: string;
    Email: string;
    DietaryRestrictions?: string;
    OtherDietaryNotes?: string;
    Attending?: boolean;
    [key: string]: any;
  };
};

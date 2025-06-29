export type Guest = {
  id: string;
  fields: {
    FirstName: string;
    LastName: string;
    Email: string;
    OtherDietaryNotes?: string;
    Attending?: boolean;
    [key: string]: string;
  };
};

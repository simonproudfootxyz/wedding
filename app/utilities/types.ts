export type Guest = {
  id: string;
  fields: {
    FirstName: string;
    LastName: string;
    Email: string;
    OtherDietaryNotes?: string;
    Attending?: boolean;
    Reservation?: string[];
    [key: string]: string;
  };
};

export type Reservation = {
  id: string;
  fields: {
    Invite_Code: string;
    ReservationType: string;
    Assignee: string[];
    [key: string]: string | string[];
  };
};

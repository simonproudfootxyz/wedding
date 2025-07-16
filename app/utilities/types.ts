export type Guest = {
  id: string;
  fields: {
    FirstName: string;
    LastName: string;
    Email: string;
    OtherDietaryNotes?: string;
    Attending?: boolean;
    Reservation?: string[];
    InviteCode?: string[];
    [key: string]: string;
  };
};

export type Reservation = {
  id: string;
  fields: {
    InviteCode: string;
    ReservationType: string;
    Assignee: string[];
    [key: string]: string | string[];
  };
};

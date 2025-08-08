export type Guest = {
  id: string;
  fields: {
    FirstName: string;
    LastName: string;
    Email: string;
    OtherDietaryNotes?: string;
    Attending?: string | undefined;
    Reservation?: string[];
    InviteCode?: string[];
    ReservationType?: string[];
    [key: string]: string | string[] | undefined;
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

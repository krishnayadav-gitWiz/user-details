export interface User {
    name: {
      first: string,
      last: string,
      title: string
    };
    dob: {
      date: Date
    };
    phone: string;
    location: {
      street: string,
      city: string,
      state: string
    };
    email: string;
    picture: {
      large: string
    };
    id: {
      value: string,
    };
  }
  
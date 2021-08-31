export interface Customer {
  name:     string;
  lastName: string;
  phone:    number;
  email:    string;
  address:  Address;
}

export interface Address {
  department: string;
  city:       string;
  street:     string;
  number:     string;
}

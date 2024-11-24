export type Department = 'IT' | 'Management' | 'Customer Support' | 'Sales';

export interface UserProfile {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  department: Department;
  role: 'user' | 'admin';
}
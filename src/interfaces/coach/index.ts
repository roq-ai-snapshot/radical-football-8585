import { AcademyInterface } from 'interfaces/academy';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CoachInterface {
  id?: string;
  name: string;
  academy_id: string;
  user_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;

  academy?: AcademyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface CoachGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  academy_id?: string;
  user_id?: string;
}

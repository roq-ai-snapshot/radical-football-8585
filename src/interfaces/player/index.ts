import { ParentRequestInterface } from 'interfaces/parent-request';
import { AcademyInterface } from 'interfaces/academy';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  name: string;
  status: string;
  academy_id: string;
  user_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;
  parent_request?: ParentRequestInterface[];
  academy?: AcademyInterface;
  user?: UserInterface;
  _count?: {
    parent_request?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  academy_id?: string;
  user_id?: string;
}

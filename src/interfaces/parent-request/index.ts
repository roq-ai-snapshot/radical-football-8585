import { PlayerInterface } from 'interfaces/player';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ParentRequestInterface {
  id?: string;
  status: string;
  player_id: string;
  user_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;

  player?: PlayerInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ParentRequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  player_id?: string;
  user_id?: string;
}

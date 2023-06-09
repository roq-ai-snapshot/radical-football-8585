import * as yup from 'yup';
import { parentRequestValidationSchema } from 'validationSchema/parent-requests';

export const playerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  academy_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
  parent_request: yup.array().of(parentRequestValidationSchema),
});

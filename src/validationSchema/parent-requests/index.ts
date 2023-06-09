import * as yup from 'yup';

export const parentRequestValidationSchema = yup.object().shape({
  status: yup.string().required(),
  player_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});

import dotenv from 'dotenv';

import { authenticate } from './services/auth/authenticate';

dotenv.config();

export const bootstrap = async () => {
  if (process.env.BROKERAGE_API_KEY === 'FILL_ME_IN') {
    throw Error(
      'No brokerage api key detected. Please add a brokerage api key to your .env file.'
    );
  }

  await authenticate();

  // setup strategies
};

import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: parseInt(process.env.PORT || '5000'),
  database_url: process.env.DATABSE_URL,
  bcrypt_salt_round: process.env.BCRYPT_SALT_ROUNDS,
  defult_password: process.env.PH_University_DIFULT_PASSWORD,
};

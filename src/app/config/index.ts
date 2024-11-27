import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: parseInt(process.env.PORT || '5000'),
  database_url: process.env.DATABSE_URL,
};

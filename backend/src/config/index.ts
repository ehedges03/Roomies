import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const config = z.object({
    PORT: z.coerce.number().default(8080),
    DB: z.string(),
    DB_ROOT_PASSWORD: z.string(),
    DB_USER: z.string(),
    DB_PASSWORD: z.string()
}).parse(process.env)

export default config;
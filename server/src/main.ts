import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { DEFAULT_EXPRESS_PORT } from './utils/constants';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const expressPort = process.env.EXPRESS_PORT || DEFAULT_EXPRESS_PORT;
app.listen(expressPort, () => {
  console.log(`[STATUS] Express listening on port ${expressPort}...`);
});

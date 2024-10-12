import express from 'express';
import { GFGScraping, LeetCodeScraping } from './controllers/scrapingController.js';
const app = express();

app.get('/leetcode', LeetCodeScraping);
app.get('/GFG', GFGScraping);

export default app;

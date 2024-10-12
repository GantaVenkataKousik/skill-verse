import { exec } from 'child_process';
import fs from 'fs';

// Function to scrape LeetCode data
export const LeetCodeScraping = (req, res) => {
    exec('python ./scraped-content/leetcode-data.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).json({ success: false, error: 'Error executing LeetCode scraping script' });
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);

        fs.readFile('leetcode_data.json', 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading JSON file:', err);
                return res.status(500).json({ success: false, error: 'Error reading JSON file' });
            }
            try {
                const jsonData = JSON.parse(data);
                res.json(jsonData);
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
                res.status(500).json({ success: false, error: 'Error parsing JSON' });
            }
        });
    });
};

// Function to scrape GFG data
export const GFGScraping = (req, res) => {
    exec('python ./scraped-content/GFG.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).json({ success: false, error: 'Error executing GFG scraping script' });
        }

        fs.readFile('GFG_stats.json', 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading JSON file:', err);
                return res.status(500).json({ success: false, error: 'Error reading JSON file' });
            }
            try {
                const jsonData = JSON.parse(data);
                console.log(jsonData);
                res.json(jsonData);
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
                res.status(500).json({ success: false, error: 'Error parsing JSON' });
            }
        });
    });
};

SkillVerse Backend

🌟 Overview
This is the backend service for SkillVerse, a comprehensive platform aimed at enhancing skills through coding platforms, online courses, job notifications, and more. The backend is built using Express.js, with Python scripts handling the scraping of data from LeetCode and GeeksforGeeks (GFG).

🛠 Features
LeetCode Data: Fetches real-time coding stats from LeetCode.
GeeksforGeeks Data: Retrieves GeeksforGeeks profile statistics.
EJS View Engine: Renders dynamic content with EJS templates.
JSON API: Provides a RESTful API for accessing scraped data.
Python Integration: Executes Python scripts to fetch and serve data from coding platforms.
🚀 Getting Started
Prerequisites
Node.js and npm
Python 3.x (for scraping scripts)
📥 Installation
Clone the repository:

git clone https://github.com/your-username/skillverse-backend.git
Navigate to the project directory:


cd skillverse-backend
Install the dependencies:


npm install
Make sure Python 3.x is installed and accessible via command line.

🏃‍♂️ Usage
Start the backend server:

npm run start
Access the API:

LeetCode Data:

GET http://localhost:9002/skill2040/coding/leetcode
GeeksforGeeks Data:

GET http://localhost:9002/skill2040/coding/GFG
🔧 Endpoints
/skill2040/coding/leetcode: Executes a Python script to fetch and return LeetCode data as JSON.
/skill2040/coding/GFG: Executes a Python script to fetch and return GeeksforGeeks stats as JSON.
⚙️ Configuration
Port: By default, the server runs on port 9002. You can change this by modifying the PORT variable in the code.
📂 Project Structure
bash
Copy code
.
├── public/                     # Static files
├── scraped-content/             # Python scripts and scraped data files
├── views/                       # EJS templates
├── server.js                    # Main server file
├── package.json                 # Project metadata and dependencies
└── README.md                    # Project documentation

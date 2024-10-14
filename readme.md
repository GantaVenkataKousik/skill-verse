# 🌟 SkillVerse 🌟
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="900">
## 📑 Table of Contents
- 💡 Overview
- 🚀 Features
- 🔧 Getting Started
- ⚙️ Installation
- 🖥️ Usage
- 🤝 Contributing
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="900">
## 💡 Overview
SkillVerse is a comprehensive platform for students, offering a wide range of features to enhance their skills and knowledge. Whether you're looking to learn, practice coding, or find job opportunities, SkillVerse has you covered!

## 🚀 Features
✨ **Courses**: Access a variety of online courses and tutorials to build your knowledge.  
💻 **Coding Platforms**: Practice coding and participate in exciting coding challenges.  
📊 **Tracking**: Track your progress and stay updated on upcoming events and deadlines.  
🔔 **Job Notifications**: Get timely alerts about job opportunities and internships.
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="900">
## 🔧 Getting Started
Follow these steps to get started with SkillVerse:

**Step 1️⃣**: Clone the Repository
```bash
git clone https://github.com/your-username/skillverse.git
```
**Step 2️⃣**: Install Dependencies
```bash
npm install
```
**Step 3️⃣**: Start the Application
```bash
npm start
```
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="900">
## ⚙️ Installation
To install the application, follow these steps:

**Step 1️⃣**: Install Node.js and npm  
Download and install Node.js and npm from the official website.

**Step 2️⃣**: Install Dependencies
```bash
npm install
```
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="900">
## 🖥️ Usage
To use the application, follow these steps:

**Step 1️⃣**: Start the Application
```bash
npm start
```
**Step 2️⃣**: Access the Application  
Open a web browser and navigate to [http://localhost:3000](http://localhost:3000) to access the application.

## 🤝 Contributing
We love contributions! 💖 To contribute to SkillVerse, follow these steps:

**Step 1️⃣**: Fork the Repository  
Fork the repository to create your copy.

**Step 2️⃣**: Make Changes  
Make changes to the code, add new features, or fix bugs.

**Step 3️⃣**: Submit a Pull Request  
Submit a pull request to the original repository and we'll review it!

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="900">
# SkillVerse Backend

## 🌟 Overview
This is the backend service for SkillVerse, a comprehensive platform aimed at enhancing skills through coding platforms, online courses, job notifications, and more. The backend is built using Express.js, with Python scripts handling the scraping of data from LeetCode and GeeksforGeeks (GFG).

## 🛠 Features
- **LeetCode Data**: Fetches real-time coding stats from LeetCode.
- **GeeksforGeeks Data**: Retrieves GeeksforGeeks profile statistics.
- **EJS View Engine**: Renders dynamic content with EJS templates.
- **JSON API**: Provides a RESTful API for accessing scraped data.
- **Python Integration**: Executes Python scripts to fetch and serve data from coding platforms.

## 🚀 Getting Started
### Prerequisites
- Node.js and npm
- Python 3.x (for scraping scripts)
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="900">
### 📥 Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/skillverse-backend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd skillverse-backend
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Make sure Python 3.x is installed and accessible via command line.
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="900">
## 🏃‍♂️ Usage
1. Start the backend server:
    ```bash
    npm run start
    ```
2. Access the API:
   - **LeetCode Data**:
     ```
     GET http://localhost:9002/skill2040/coding/leetcode
     ```
   - **GeeksforGeeks Data**:
     ```
     GET http://localhost:9002/skill2040/coding/GFG
     ```
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="900">
## 🔧 Endpoints
- **/skill2040/coding/leetcode**: Executes a Python script to fetch and return LeetCode data as JSON.
- **/skill2040/coding/GFG**: Executes a Python script to fetch and return GeeksforGeeks stats as JSON.

## ⚙️ Configuration
- **Port**: By default, the server runs on port 9002. You can change this by modifying the `PORT` variable in the code.



## About
SkillVerse's backend service integrates Node.js and Python to provide real-time coding data from platforms like LeetCode and GeeksforGeeks, leveraging Express.js for API endpoints and serving JSON responses with Python script execution.

## Live Demo
[skill-verse-backend.vercel.app](https://skill-verse-backend.vercel.app)

# Country Info Backend

## Description
This backend provides detailed information about countries, including:
- List of border countries.
- Historical population data.
- URL of the country's flag.

The project is built using **Node.js** with **Express** and integrates external APIs to provide the data.

---

## Technologies Used
- **Node.js**
- **Express**
- **Axios**

---

## Project Structure
```plaintext
BE/
├── src/
│   ├── controllers/       # Handles endpoint logic
│   ├── routes/            # Defines routes
│   ├── services/          # Contains logic for external API calls
│   ├── app.js             # Main Express configuration
│   ├── server.js          # Server initialization
├── .env                   # Environment variables
├── .gitignore             # Git ignored files
├── package.json           # Project dependencies and scripts
└── README.md              # Backend documentation
```

## Setup Steps

### 1. Clone the Repository
```bash
git clone <repository-url>
cd BE
```

### 2. Install Dependencies
Install all required dependencies:
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory of the project and add the following content:
```plaintext
PORT=3000
NAGER_API_BASE_URL=https://date.nager.at/api/v3
COUNTRIES_NOW_API_BASE_URL=https://countriesnow.space/api/v0.1
```

### 4. Run the Server
Start the backend server:
```bash
npm run dev
```

The server will be available at: `http://localhost:3000`
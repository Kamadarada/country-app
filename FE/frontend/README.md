
# Country Explorer

This is a **Country Explorer** project that allows you to view details about different countries and their borders. The application is built with **Next.js** and **React**, using an external API to fetch country information. The project has an interactive interface that allows users to search for countries, view population charts, and explore country borders by clicking on links.

## Project Structure

The directory and file structure is organized as follows:

```
/app
    /[code]
      page.js
  /page.js
/globals.css
```

### How It Works:

1. **Home Page (`/page.js`)**: Displays a list of countries with links to their detail pages. You can search countries by name and filter the results.
   
2. **Country Detail Page (`/country/[code]/page.js`)**: Each country has a dynamic page accessible by its country code. It shows the country name, flag, population chart, and a list of clickable border countries.

3. **Country Search**: The list of countries is fetched from an external API using the URL defined in `NEXT_PUBLIC_BACKEND_BASE_URL`. The search is based on the country's name.

4. **Population Chart**: A line chart is displayed with the country's historical population.

## Technologies Used

- **Next.js**: React framework for building websites and APIs.
- **Axios**: Library for making HTTP requests.
- **Chart.js**: Library for displaying interactive charts.
- **React Table**: Library for displaying interactive tabular data.
- **React Icons**: For icons used in the interface.

## How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/country-explorer.git
```

### 2. Install Dependencies

Navigate to the project folder and install the dependencies:

```bash
cd country-explorer
npm install
```

### 3. Configure the API URL

Create a `.env.local` file at the root of the project and configure the external API URL. Example:

```
NEXT_PUBLIC_BACKEND_BASE_URL=http://localhost:8080/api
```

### 4. Run the Project

After configuring the `.env.local` file, start the development server:

```bash
npm run dev
```

Access the project in your browser at `http://localhost:3000`.

## Route Structure

- **Home page**: `http://localhost:3000/`
- **Country detail page**: `http://localhost:3000/[code]`
  - Example: `http://localhost:3000/US`

## How Navigation Works

- **Home Page**: Displays a list of countries with the ability to filter them by the search bar.
- **Country Detail Page**: Shows the country's name, flag, population chart, and a table with the country's borders. The borders are clickable links that redirect to the pages of neighboring countries.

## Contributing

If you want to contribute to the project, please fork this repository and submit a pull request.

1. Fork this repository.
2. Create a branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

---

**Country Explorer** - 2024

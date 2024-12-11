"use client"

import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './globals.css';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/countries`);
        setCountries(res.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center">
      <main className="w-full max-w-3xl mt-6 px-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search for a country..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-700"
          />
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCountries.map((country) => (
            <li key={country.code || country.name} className="bg-white shadow rounded p-4 hover:bg-blue-100 transition flex justify-between items-center">
              <Link href={`/${country.countryCode}`} className="text-blue-700 hover:text-blue-900 font-medium flex items-center">
                {country.name}
                <FaArrowRight className="ml-2 text-blue-700" />
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer className="w-full mt-auto bg-blue-500 text-white py-3 text-center">
        <p className="text-xs">&copy; 2024 Felipe Kamada</p>
      </footer>
    </div>
  );
}

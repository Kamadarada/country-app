"use client";

import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender
} from "@tanstack/react-table";
import Image from "next/image";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

export default function CountryInfo() {
  const { code } = useParams();
  const router = useRouter();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/countries/${code}`
        );
        setCountry(res.data);
      } catch (error) {
        console.error("Error fetching country details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryDetails();
  }, [code]);

  if (!country && !loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Country not found.</p>
      </div>
    );
  }

  const populationData = useMemo(() => {
    if (!country) return null;
    return {
      labels: country.population.map((entry) => entry.year),
      datasets: [
        {
          label: "Population",
          data: country.population.map((entry) => entry.value),
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          tension: 0.4
        }
      ]
    };
  }, [country]);

  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Year"
        }
      },
      y: {
        title: {
          display: true,
          text: "Population"
        },
        beginAtZero: true
      }
    },
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true
          },
          pinch: {
            enabled: true
          },
          mode: "xy"
        },
        pan: {
          enabled: true,
          mode: "xy"
        }
      },
      legend: {
        display: true
      },
      title: {
        display: true,
        text: country ? `Population of ${country.name}` : ""
      }
    }
  };

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("border", {
      header: () => <span>Border Country Code</span>,
      cell: (info) => {
        const value = info.getValue();
        return (
          <span className="text-blue-600 font-medium">
            {value}
          </span>
        );
      }
    })
  ];

  const borderData = useMemo(() => {
    if (!country || !country.borders) return [];
    return country.borders.map((b) => ({ border: b }));
  }, [country]);

  const table = useReactTable({
    data: borderData,
    columns,
    getCoreRowModel: getCoreRowModel()
  });
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6">
        {loading ? (
          <div className="text-center p-10 text-xl font-semibold text-gray-600">
            Loading...
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center space-x-6 mb-6">
              <Image
                width={150}
                height={220}
                src={country.flag}
                alt={`${country.name} flag`}
                className="w-16 h-10 object-contain"
              />
              <h1 className="text-4xl font-bold text-blue-600">{country.name}</h1>
            </div>

            {country.borders.length > 0 ? (
              <div className="overflow-x-auto rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-100">
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                          <th
                            key={header.id}
                            scope="col"
                            className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {table.getRowModel().rows.map((row) => (
                      <tr key={row.id} className="hover:bg-blue-50">
                        {row.getVisibleCells().map((cell) => (
                          <td
                            key={cell.id}
                            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-600">No bordering countries found.</p>
            )}

            <h2 className="text-xl font-semibold text-blue-600 mt-8 mb-4">Population Chart</h2>
            <div className="h-[400px] mb-8">
              {populationData && (
                <Line data={populationData} options={chartOptions} />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

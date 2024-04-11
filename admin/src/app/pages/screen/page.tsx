"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

interface Screen {
  name: string;
  location: string;
  seats: any[]; // Change the type to an array of numbers
  city: string;
  screenType: string;
}

const CreateScreenPage: React.FC = () => {
  const tempseatlayout = [
    {
      // platinum
      type: "platinum",
      rows: [
        {
          // row 2
          rowname: "H",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          rowname: "G",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          // row 2
          rowname: "F",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
      ],
      price: 500,
    },
    {
      // gold
      type: "gold",
      rows: [
        {
          // row 2
          rowname: "E",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          rowname: "D",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          // row 2
          rowname: "C",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
      ],
      price: 300,
    },
    {
      // silver - 20 objects
      type: "silver",
      rows: [
        {
          rowname: "B",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          // row 2
          rowname: "A",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
      ],
      price: 150,
    },
  ];

  const [screen, setScreen] = useState<Screen>({
    name: "",
    location: "",
    seats: tempseatlayout,
    city: "",
    screenType: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setScreen({ ...screen, [name]: value });
  };
  const handleScreenTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setScreen({ ...screen, screenType: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (
        screen.name === "" ||
        screen.location === "" ||
        screen.seats.length == 0 ||
        screen.city === "" ||
        screen.screenType === ""
      ) {
        toast.error("Please fill all the fields", {
          position: "top-center",
        });
        return;
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/movie/createscreen`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(screen),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Screen creation successful", data);

        toast.success("Screen Created Successfully", {
          position: "top-center",
        });
      } else {
        console.error("Screen creation failed", response.statusText);
        toast.error("Screen Creation Failed", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="formpage bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-lg rounded-xl">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Create a Screen
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={screen.name}
                onChange={handleInputChange}
                autoComplete="name"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Name"
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                value={screen.location}
                onChange={handleInputChange}
                autoComplete="location"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Location"
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                value={screen.city}
                onChange={handleInputChange}
                autoComplete="city"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="City"
              />
            </div>
            <div className="flex items-center">
              <p className="text-sm text-gray-700 mr-4">Screen Type:</p>
              <div className="flex items-center">
                <label htmlFor="3D" className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    id="3D"
                    name="screenType"
                    value="3D"
                    checked={screen.screenType === "3D"}
                    onChange={handleScreenTypeChange}
                    className="form-radio h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">3D</span>
                </label>
                <label htmlFor="2D" className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    id="2D"
                    name="screenType"
                    value="2D"
                    checked={screen.screenType === "2D"}
                    onChange={handleScreenTypeChange}
                    className="form-radio h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">2D</span>
                </label>
                <label htmlFor="4D" className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    id="4D"
                    name="screenType"
                    value="4D"
                    checked={screen.screenType === "4D"}
                    onChange={handleScreenTypeChange}
                    className="form-radio h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">4D</span>
                </label>
                <label htmlFor="IMAX" className="inline-flex items-center">
                  <input
                    type="radio"
                    id="IMAX"
                    name="screenType"
                    value="IMAX"
                    checked={screen.screenType === "IMAX"}
                    onChange={handleScreenTypeChange}
                    className="form-radio h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">IMAX</span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Screen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateScreenPage;

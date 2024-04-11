"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

interface Celeb {
  celebType: string;
  celebName: string;
  celebRole: string;
  celebImage: string;
}

const AddCelebToMoviePage = () => {
  const [celeb, setCeleb] = useState<Celeb>({
    celebType: "cast",
    celebName: "",
    celebRole: "",
    celebImage: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCeleb({ ...celeb, [name]: value });
  };

  const handleAddCeleb = async () => {
    try {
      if (
        celeb.celebName === "" ||
        celeb.celebRole === "" ||
        celeb.celebImage === ""
      ) {
        toast.error("Please fill all the fields", {
          position: "top-center",
        });
        return;
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/movie/addcelebtomovie`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(celeb),
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Celeb added successfully", data);

        toast.success("Celeb Added Successfully", {
          position: "top-center",
        });
      } else {
        console.error("Celeb addition failed", response.statusText);
        toast.error("Celeb Addition Failed", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("An error occurred during celeb addition", error);
    }
  };

  return (
    <div className="formpage mx-auto max-w-md p-8 bg-white rounded-lg shadow-lg">
      <label className="block mb-2 text-gray-700">Celeb Type</label>
      <select
        name="celebType"
        value={celeb.celebType}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
      >
        <option value="cast">Cast</option>
        <option value="crew">Crew</option>
      </select>
      <input
        type="text"
        name="celebName"
        placeholder="Name"
        value={celeb.celebName}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        name="celebRole"
        placeholder="Role"
        value={celeb.celebRole}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        name="celebImage"
        placeholder="Image URL"
        value={celeb.celebImage}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={handleAddCeleb}
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Add Celeb
      </button>
    </div>
  );
};

export default AddCelebToMoviePage;

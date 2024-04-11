"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

interface Movie {
  title: string;
  description: string;
  portraitImgUrl: string;
  portraitImg: File | null;
  landscapeImgUrl: string;
  landscapeImg: File | null;
  rating: number;
  genre: string[];
  duration: number;
}

const CreateMoviePage = () => {
  const [movie, setMovie] = useState<Movie>({
    title: "",
    description: "",
    portraitImgUrl: "",
    portraitImg: null,
    landscapeImgUrl: "",
    landscapeImg: null,
    rating: 0,
    genre: [],
    duration: 0,
  });

  const genres = [
    "Action",
    "Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Science Fiction",
    "Thriller",
    "Other",
  ];

  const handleGenreChange = (genre: string) => {
    if (movie.genre.includes(genre)) {
      setMovie({
        ...movie,
        genre: movie.genre.filter((selectedGenre) => selectedGenre !== genre),
      });
    } else {
      setMovie({ ...movie, genre: [...movie.genre, genre] });
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
  };

  const uploadImage = async (image: File) => {
    try {
      const formData = new FormData();
      formData.append("myimage", image);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/image/uploadimage`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Image uploaded successfully:", data);
        return data.imageUrl;
      } else {
        console.error("Failed to upload the image.");
        return null;
      }
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };
  const handleCreateMovie = async () => {
    try {
      if (
        movie.title === "" ||
        movie.description === "" ||
        movie.rating === 0 ||
        movie.genre.length === 0 ||
        movie.duration === 0
      ) {
        toast.error("Please fill all the fields", {
          position: "top-center",
        });
        return;
      }

      let portraitImgUrl = movie.portraitImgUrl;
      let landscapeImgUrl = movie.landscapeImgUrl;

      if (movie.portraitImg) {
        portraitImgUrl = await uploadImage(movie.portraitImg);
        if (!portraitImgUrl) {
          toast.error("Portrait Image upload failed", {
            position: "top-center",
          });
          return;
        }
      }
      if (movie.landscapeImg) {
        landscapeImgUrl = await uploadImage(movie.landscapeImg);
        if (!landscapeImgUrl) {
          toast.error("Landscape Image upload failed", {
            position: "top-center",
          });
          return;
        }
      }

      const newMovie = { ...movie, portraitImgUrl, landscapeImgUrl };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/movie/createmovie`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMovie),
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Movie creation successful", data);

        toast.success("Movie Created Successfully", {
          position: "top-center",
        });
      } else {
        console.error("Movie creation failed", response.statusText);
        toast.error("Movie Creation Failed", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("An error occurred during movie creation", error);
    }
  };

  return (
    <div className="formpage bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Create a New Movie
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter the movie title"
              value={movie.title}
              onChange={handleInputChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              placeholder="Enter the movie description"
              value={movie.description}
              onChange={handleInputChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="portraitImg"
                className="block text-sm font-medium text-gray-700"
              >
                Portrait Image
              </label>
              <input
                type="file"
                id="portraitImg"
                accept="image/*"
                onChange={(event) => {
                  if (event.target.files && event.target.files.length > 0) {
                    setMovie({ ...movie, portraitImg: event.target.files[0] });
                  }
                }}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="landscapeImg"
                className="block text-sm font-medium text-gray-700"
              >
                Landscape Image
              </label>
              <input
                type="file"
                id="landscapeImg"
                accept="image/*"
                onChange={(event) => {
                  if (event.target.files && event.target.files.length > 0) {
                    setMovie({ ...movie, landscapeImg: event.target.files[0] });
                  }
                }}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-gray-700"
              >
                Rating
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                placeholder="Enter movie rating"
                value={movie.rating}
                onChange={handleInputChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Select Genres
              </label>
              <div className="flex flex-wrap">
                {genres.map((genre) => (
                  <label
                    key={genre}
                    className="inline-flex items-center mr-4 mb-2"
                  >
                    <input
                      type="checkbox"
                      name="genre"
                      checked={movie.genre.includes(genre)}
                      onChange={() => handleGenreChange(genre)}
                      className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                    <span className="ml-2 text-sm text-gray-700">{genre}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-gray-700"
            >
              Duration (minutes)
            </label>
            <input
              type="number"
              id="duration"
              name="duration"
              placeholder="Enter movie duration"
              value={movie.duration}
              onChange={handleInputChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="w-full">
            <button
              type="button"
              onClick={handleCreateMovie}
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMoviePage;

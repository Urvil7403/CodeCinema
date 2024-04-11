"use client";
import React from "react";
import Select from "react-select";
import "../Popup.css";
import axios from "axios";
import { toast } from "react-toastify";
const LocationPopup = ({
  setShowLocationPopup,
}: {
  setShowLocationPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [cities, setCities] = React.useState<any[]>([]);

  const [selectedCity, setSelectedCity] = React.useState<any>(null);

  const getcities = async () => {
    const indianCities = [
      "Barrie",
      "Belleville",
      "Brampton",
      "Brant",
      "Brantford",
      "Brockville",
      "Burlington",
      "Cambridge",
      "Clarence-Rockland",
      "Cornwall",
      "Dryden",
      "Elliot Lake",
      "Greater Sudbury",
      "Guelph",
      "Haldimand County",
      "Hamilton",
      "Kawartha Lakes",
      "Kenora",
      "Kingston",
      "Kitchener",
      "London",
      "Markham",
      "Mississauga",
      "Niagara Falls",
      "Norfolk County",
      "North Bay",
      "Orillia",
      "Oshawa",
      "Ottawa",
      "Owen Sound",
      "Pembroke",
      "Peterborough",
      "Pickering",
      "Port Colborne",
      "Prince Edward County",
      "Quinte West",
      "Richmond Hill",
      "Sarnia",
      "Sault Ste. Marie",
      "St. Catharines",
      "St. Thomas",
      "Stratford",
      "Temiskaming Shores",
      "Thorold",
      "Thunder Bay",
      "Timmins",
      "Toronto",
      "Vaughan",
      "Waterloo",
      "Welland",
      "Windsor",
      "Woodstock",
    ];

    const cities = indianCities.map((city) => {
      return {
        label: city,
        value: city,
      };
    });

    setCities(cities);
  };

  React.useEffect(() => {
    getcities();
  }, []);

  const handleSave = () => {
    // setShowLocationPopup(false)
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/changeCity`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        city: selectedCity,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          // toast(data.message, {
          //     type: 'success'
          // })
          setShowLocationPopup(false);
          window.location.reload();
        }
      })
      .catch((err) => {
        toast(err.message, {
          type: "error",
        });
        console.log(err);
      });
  };

  return (
    <div className="popup-bg">
      <div className="popup-cont">
        <select
          className="select"
          onChange={(e) => {
            setSelectedCity(e.target.value);
          }}
        >
          <option value="" disabled selected>
            Select your city
          </option>
          {cities.map((city: any) => {
            return (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            );
          })}
        </select>

        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default LocationPopup;

"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import MovieCaraousel from "@/components/MovieCaraousel/MovieCaraousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeSlider />
      <MovieCaraousel />
    </main>
  );
}

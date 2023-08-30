"use client"
import { Header, Nav, Results } from "@/components";
import requests from "@/utils/requests";
import axios from 'axios'

export default async function Home({ searchParams }) {

  const response = await axios.get(`https://api.themoviedb.org/3${requests[searchParams.genre]?.url || requests.fetchTrending.url}`);
  const movieData = response?.data?.results

  return (
    <div>

      {/* Header */}
      <Header />
      {/* Nav */}
      <Nav />
      {/* Results */}
      <Results results={movieData} />

    </div>
  )
}

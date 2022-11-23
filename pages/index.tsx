import Header from "../components/HeaderComponent/Header";
import LeftBar from "../components/Home/LeftBar";
import HomeLayoyt from "../layout/HomeLayout";
import React from 'react'

export default function HomePage({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {

  return (
    <HomeLayoyt>

    </HomeLayoyt>

  )
}

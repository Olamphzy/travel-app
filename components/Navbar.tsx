'use client'

import { useState } from "react"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-50">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}/>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="text-gray-50 regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}

        </ul>

        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>

        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={toggleMenu}
        />

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden">
            <ul className="flex flex-col gap-4 p-4">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="text-gray-900 regular-16 cursor-pointer pb-1.5 transition-all hover:font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flexCenter">
                <Button
                  type="button"
                  title="Login"
                  icon="/user.svg"
                  variant="btn_dark_green"
                />
              </div>
            </ul>
          </div>
        )}
    </nav>
  )
}

export default Navbar

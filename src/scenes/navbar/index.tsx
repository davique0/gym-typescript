import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png"
import Link from "@/scenes/navbar/Link"
import { SelectedPage } from "@/shared/types";



type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}


const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        {/* Center navbar and also giving it an specific width */}
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* left side */}
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />
          </div>
          {/* Right Side */}
          <div className={`${flexBetween} w-full`}>
            {/* inner left side of right side */}
            <div className={`${flexBetween} gap-8 text-sm`}>
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            {/* inner right side of right side */}
            <div className={`${flexBetween} gap-8`}>
              <p>Sign In</p>
              <button>Become a Member</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

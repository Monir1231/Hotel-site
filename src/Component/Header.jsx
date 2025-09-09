import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";


import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import MYSearch from "./Common/Search";
import { FaEarthAmericas } from "react-icons/fa6";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section>
    <section className="my-3 border-b-1 border-b-[#DCDCDC] md:pb-4 pb-1">
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="2xl"
        className="w-full"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand className="hidden md:flex">
            <img className="md:w-32  w-24 md:mt-2" src="sitelogo.png" />
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="center">
          <NavbarItem>
           
           <div className="flex items-center justify-between  boder border-1 border-[#7A7A7A] rounded-full md:w-[500px] w-[300px] py-1  px-1 ">
             <input type="text" placeholder="restaurant, hotel, service...." className=" outline-none md:text-sm text-[9px] px-1.5" />
              <input type="text" placeholder="| Singapour..." className=" outline-none md:text-sm text-[9px]" />
              <NavLink to="/search">
                <img className="md:w-fit w-7" src="SearchLogo.png"/>
              </NavLink>
            </div> 

            

          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
              
          <NavbarItem className="hidden  md:flex">
            <div className="flex items-center gap-4">
            <FaEarthAmericas className="text-[20px] "/>
             <Button className=" rounded-full bg-black text-white ">MyFeedback for business</Button>
            </div>
            
          </NavbarItem>
        </NavbarContent>
           
       



        <NavbarMenu >

         <NavbarItem >
            <div className="flex items-center gap-4 mt-5 ">
            <FaEarthAmericas className="text-[20px] "/>
             <Button className=" text-[12px] rounded-full bg-black text-white ">MyFeedback for business</Button>
            </div>
          </NavbarItem>
           
        

         
        
        </NavbarMenu>


      </Navbar>

      <div>
      
      </div>
    </section>

    
    </section>
  );
}

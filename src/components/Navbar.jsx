import React from "react";
import Link from "./Link";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
const navLinks = [
  {
    id: 1,
    name: "Products",
    path: "/products"
  },
  {
    id: 2,
    name: "Features",
    path: "/features"
  },
  {
    id: 3,
    name: "Pricing",
    path: "/pricing"
  },
  {
    id: 4,
    name: "Testimonials",
    path: "/testimonials"
  },
  {
    id: 5,
    name: "FAQ",
    path: "/faq"
  }
];


const Navbar = ({carts}) => {
    const [open, setOpen] = useState(false);
    const links = navLinks.map( (link) => <Link key = {link.id} name={link.name} path={link.path}/>);
    

  return (
    <nav className="flex items-center justify-between p-5">


       <span className=" flex items-center gap-2 cursor-pointer " onClick={() => setOpen(!open)}>

        {
            open ? <X className="md:hidden"/> :  <Menu className="md:hidden" />
        }
        <ul className={`md:hidden absolute z-50 bg-sky-300 text-black duration-700
            ${open ? 'top-15 left-11' : '-top-50'} `}>
            {links}
        </ul>
       
       <p className="font-semibold text-3xl bg-clip-text text-transparent bg-[linear-gradient(to_right,#4F39F6,#9514FA)]">Digitools</p>
       </span>

     
        

        <div className="hidden md:block">
            <ul className="flex items-center gap-5">
                {links}
            </ul>
        </div>


        <div className="flex items-center gap-2" >
            <span>
              <ShoppingCart />
              <span className="rounded-full bg-sky-200 text-black absolute top-3 right-43">{carts.length}</span>
            </span>
              <p>login</p>
              <button className="btn text-white bg-[linear-gradient(to_right,#4F39F6,#9514FA)]">Get Started</button>

        </div>
  





    </nav>
  );
};

export default Navbar;

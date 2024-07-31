import Container from "../Container";
import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-700 text-slate-200 w-full mb-5">
      <Container>
        <div className="flex flex-col items-center justify-between md:flex-row  mt-20 mb-5 ">
          <div className="gap-4">
            <h1 className="font-bold text-xl">Shoap Categories</h1>
            <ul>
              <li>Phones</li>
              <li>Laptopes</li>
              <li>Tv</li>
              <li>Tablet</li>
              <li>Acceries</li>
            </ul>
          </div>
          <div>
            <h3>Customer Services</h3>
            <ul>
              <li>Phones</li>
              <li>Laptopes</li>
              <li>Tv</li>
              <li>Tablet</li>
              <li>Acceries</li>
            </ul>
          </div>
          <div>
            <h3>About Us</h3>
            <ul>
              <li>Phones</li>
              <li>Laptopes</li>
              <li>Tv</li>
              <li>Tablet</li>
              <li>Acceries</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl">Follow Us</h3>
            <ul>
              <li>Phones</li>
              <li>Laptopes</li>
              <li>Tv</li>
              <li>Tablet</li>
              <li>Acceries</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

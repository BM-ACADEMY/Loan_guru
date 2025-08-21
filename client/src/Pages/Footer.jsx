import React from "react";
import Logo from "../assets/img/footerlogo.png";

export default function Footer() {
  return (
    <footer
      className="pt-10 px-6 md:px-16 lg:px-24 xl:px-32 w-full text-gray-300 relative overflow-hidden bg-gradient-to-tl from-slate-950 via-slate-900 to-violet-950"
      id="contact"
    >
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        {/* Logo & Description */}
        <div className="md:max-w-96">
          <div className="flex items-center space-x-4 justify-start">
            <img src={Logo} alt="logo" className="w-20 object-contain" />
          </div>
          <p className="mt-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Links & Contact */}
        <div className="flex-1 flex flex-col md:flex-row items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-100">Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-gray-100">Working Hours:</h2>
            <p>
              Monday - Saturday: 10:00 AM - 7:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
          {/* Address Section */}
          <div className="max-w-sm md:max-w-xs lg:max-w-md leading-relaxed">
            <h2 className="font-semibold mb-5 text-gray-100">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+91 81109 76021</p>
              <p>contact@example.com</p>
              <p className="break-words">
                LOKESH TOWER Old Door No.110/2, then Door No.18, Now New Door
                No.37, Kodambakkam High road, Nungambakkam, Chennai - 600 034,
                Tamilnadu, India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="py-4 text-center text-sm md:text-base text-gray-300/80">
        © <span id="year"></span>{" "}
        <a
          href="https://bmtechx.in/"
          target="_blank"
          className="hover:underline text-[#07bf69]"
        >
          BMTechx.in
        </a>
        . All Rights Reserved.
      </p>
    </footer>
  );
}

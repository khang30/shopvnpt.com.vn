import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Dropdown, Navbar, Accordion } from 'flowbite-react';
import { BiPhoneCall } from "react-icons/bi";
function Header() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const [open2, setOpen2] = React.useState(false);

  const handleOpen2 = () => {
    setOpen2(!open2);
  };
  const [open3, setOpen3] = React.useState(false);

  const handleOpen3 = () => {
    setOpen3(!open3);
  };

  return (
    <div className="sticky shadow-xl" >
      <div className="container mx-auto">
        <div className=" py-2 sm:py-2 md:py-3 lg:py-4  flex justify-between  items-center">
          <Link href="/" className="inline-block lg:w-[130px] lg:h-[33px]">
            <Image
              src={"/logo-vnpt12.jpg"}
              width={130}
              height={33}
              className="w-auto"
              alt="logo"
            />
          </Link>
          <Navbar fluid className="flex-row lg:flex gap-8 md:hidden hidden text-xs font-family: Arial">
            <Navbar.Collapse className="flex-row lg:flex gap-8 text-xs font-family: Arial">
              <Navbar.Link className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                href="/">
                Trang Chủ
              </Navbar.Link>
              <Navbar.Link className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                href="/internet-ca-nhan">
                Internet Cá Nhân
              </Navbar.Link>
              {/* <Navbar.Link className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                href="/internet-truyen-hinh">
                Internet & Truyền Hình
              </Navbar.Link> */}
              <div className="text-sm hover:bg-gray-100 text-gray-700 transition-all">
                <Dropdown label="Internet Combo" inline>
                  <li>
                    <Link className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 block  border-b border-gray-200" href="/internet-truyen-hinh">
                  
                      Internet & Truyền Hình
                    </Link>
                  </li>
                  <li>
                    <Link className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 block  border-b border-gray-200" href="/internet-va-di-dong">
                  
                    Internet & Di Động
                    </Link>
                  </li>
                  <li>
                    <Link className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 block  border-b border-gray-200" href="/internet-va-di-dong2">
                  
                      Internet, Truyền Hình & Di Động
                    </Link>
                  </li>
                  <li>
                    <Link className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 block" href="/internet-va-di-dong3">
                  
                    Combo Ưu Đãi
                    </Link>
                  </li>
                </Dropdown>
                <Navbar.Toggle />
              </div>

              <Navbar.Link className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                href="/internet-doanh-nghiep">
                Internet Doanh Nghiệp
              </Navbar.Link>
              <div className="text-sm hover:bg-gray-100 text-gray-700 transition-all">
                <Dropdown label="Khác" inline>
                  <li>
                    <Link className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 block  border-b border-gray-200" href="/sim-vinaphone">
                  
                    Sim Vinaphone
                    </Link>
                  </li>
                  <li>
                    <Link className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 block" href="/lien-he">
                  
                     Liên Hệ
                    </Link>
                  </li>
                  
                  {/* <li className="text-sm hover:bg-gray-100 text-gray-700 block  border-b border-gray-200">
                  <Dropdown.Item>
                    <Link href="/sim-vinaphone">
                      Sim Vinaphone
                    </Link>
                  </Dropdown.Item> 
                  </li>
                  <li className="text-sm hover:bg-gray-100 text-gray-700 block  border-b border-gray-200">
                  <Dropdown.Item>
                    <Link href="/sim-vinaphone">
                      Sim Vinaphone
                    </Link>
                  </Dropdown.Item> 
                  </li> */}
                </Dropdown>
                <Navbar.Toggle />
              </div>
            </Navbar.Collapse>
          </Navbar>




          <div class="max-w-2xl lg:hidden">

            <nav class="border-gray-200">
              <div class="container mx-auto flex flex-wrap items-center justify-between">
                {/* <button data-collapse-toggle="mobile-menu" type="button" class="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                  <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <div class="hidden md:block w-full md:w-auto" id="mobile-menu">
                  <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                    <li>
                      <a href="#" class="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">Home</a>
                    </li>
                    <li>
                      <Dropdown label="KHÁC" inline>
                        <Dropdown.Item>
                          <Link className="uppercase font-semibold hover:text-main text-gray-900" href="/sim-vinaphone">
                            Sim Vinaphone
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link className="uppercase font-semibold hover:text-main text-gray-900" href="/sim-vinaphone">
                            Sim Vinaphone
                          </Link>
                        </Dropdown.Item>
                      </Dropdown>
                    </li>
                    <li>
                      <a href="#" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Services</a>
                    </li>
                    <li>
                      <a href="#" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Pricing</a>
                    </li>
                    <li>
                      <a href="#" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Contact</a>
                    </li>
                  </ul>
                </div>

                <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown hover
                  <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button> */}
                <div className="dropdown">
                  <button onClick={handleOpen} class="lg:hidden">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg class="hidden w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </button>
                  {open ? (
                    <ul className="menu">
                      <li className="menu-item">
                        <a href="#" class="text-center text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0" href="/">Trang chủ</a>
                      </li>
                      <li className="menu-item">
                        <a href="#" class="text-center text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0" href="/internet-ca-nhan">Internet Cá Nhân</a>
                      </li>
                      <li className="menu-item">
                        <div className="text-center text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">
                          <button onClick={handleOpen3} className="text-center inline-flex justify-center items-center px-4" type="button" data-dropdown-toggle="dropdown">
                              Internet Combo
                             <svg class="w-4 h-4 m-0" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                          </button>
                          {open3 ? (
                            <ul>
                              <li>
                                <a href="internet-truyen-hinh" class="text-center text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Internet & Truyền Hình</a>
                              </li>
                              <li>
                                <a href="internet-va-di-dong" class="text-center text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Internet & Di Động</a>
                              </li>
                              <li>
                                <a href="internet-va-di-dong2" class="text-center text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Internet, Truyền Hình & Di Động</a>
                              </li>
                              <li>
                                <a href="internet-va-di-dong3" class="text-center text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Combo Ưu Đãi</a>
                              </li>
                            </ul>
                          ) : null}
                        </div>
                      </li>
                      
                      <li className="menu-item">
                        <a href="#" class="text-center text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0" href="/internet-doanh-nghiep">Internet Doanh Nghiệp</a>
                      </li>
                      <li className="menu-item">
                        <a href="#" class="text-center text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0" href="/sim-vinaphone">Sim Vinaphone</a>
                      </li>
                      <li className="menu-item">
                        {/* <Dropdown label="KHÁC" inline>
                          <Dropdown.Item>
                            <Link className="uppercase font-semibold hover:text-main text-gray-900" href="/sim-vinaphone">
                              Sim Vinaphone
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link className="uppercase font-semibold hover:text-main text-gray-900" href="/sim-vinaphone">
                              Sim Vinaphone
                            </Link>
                          </Dropdown.Item>
                        </Dropdown> */}


                        <div className="text-center text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">
                          <button onClick={handleOpen2} className="text-center inline-flex justify-center items-center px-4" type="button" data-dropdown-toggle="dropdown">
                              Khác
                             <svg class="w-4 h-4 ml-1" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                          </button>
                          {open2 ? (
                            <ul>
                              {/* <li>
                                <a href="sim-vinaphone" class="text-center text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Sim Vinaphone</a>
                              </li> */}
                              <li>
                                <a href="lien-he" class="text-center text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Liên Hệ</a>
                              </li>
                            </ul>
                          ) : null}
                        </div>
                      </li>
                    </ul>
                  ) : null}
                </div>
              </div>

            </nav>

          </div>


          {/* <div className="flex items-center gap-4 text-text font-semibold hidden xl:block">
            <BiPhoneCall className="text-white w-[40px] h-[40px] text-2xl bg-main rounded-2xl " />{" "}
            Gọi hotline
            <br></br>
            0888829119
            <br></br>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;

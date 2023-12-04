import React from "react"
// Initialization for ES Users
import {Collapse,Ripple,initTE,} from "tw-elements";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
// import PersonContext from "../../Contexts/person-context";
  
  initTE({ Collapse, Ripple });
const Header = props =>{
  // const ctx = useContext(PersonContext)
    return (
      <header>
      {/* <!-- Navigation bar --> */}
      <nav className="relative flex w-full items-center justify-between bg-zinc-500 py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 "
        data-te-navbar-ref>
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          
          {/* <div className="flex items-center">
            <!-- Hamburger menu button -->
            <button
              className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
              type="button"
              data-te-collapse-init
              data-te-target="#navbarSupportedContentY"
              aria-controls="navbarSupportedContentY"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <!-- Hamburger menu icon -->
              <span className="[&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-7 w-7">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </span>
            </button>
          </div> */}
    
          {/* <!-- Navigation links --> */}
          <div
            className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContentY"
            data-te-collapse-item>
            <ul
              className="mr-auto flex flex-col lg:flex-row"
              data-te-navbar-nav-ref>
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a
                  className="block transition duration-150 text-slate-100 ease-in-out hover:text-slate-400 focus:text-slate-200 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href="#!"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  >Home
                </a>
                
              </li>
              
              <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a
                  className="block transition duration-150 text-slate-100 ease-in-out hover:text-slate-400 focus:text-slate-200 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href="#!"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  >About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
      {/* <!-- Hero section with heading, subheading and button --> */}
      <Card>
      <div
        className="p-6 text-center text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
        <h1 className="mb-6 text-5xl font-bold">Persons Managment</h1>
        {/* <h3 className="mb-8 text-3xl font-bold">Subeading</h3> */}
        <Button input = {{type:"button" ,onClick:props.onShowForm}}>Add New Person</Button>
      </div>
      </Card>
    </header>
    )
  }
export default Header
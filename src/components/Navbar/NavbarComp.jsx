import React from 'react';
import './Navbar.css';

const NavbarComp = () => {
  return (
    <>
        <div className="">
        <nav class="navbar navbar-expand-lg navbar-light bg-light position-sticky">
        <a class="navbar-brand mx-5" href="/">Health 
            <span>coach.</span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span> 
            {/* <span class="text-dark  fw-bold">Menu</span> */}
        </button>

        <div class="collapse navbar-collapse ml-5" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto">
            <li class="nav-item">
                <a class="nav-link mx-3" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link mx-3" href="/">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link mx-3" href="/">Service</a>
            </li>
            <li class="nav-item">
                <a class="nav-link mx-3" href="/">Blog</a>
            </li>
            <li class="nav-item">
                <a class="nav-link mx-3" href="/">Contact</a>
            </li>
            </ul>
            <form class="form-inline mx-auto">
            <button class="btn btn-success my-2 my-sm-0" type="submit">Make a Appointment</button>
            </form>
        </div>
        </nav>
        </div>
    </>
  )
}

export default NavbarComp
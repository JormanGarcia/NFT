import React from "react";
import { Stack, Button } from "react-bootstrap";
import Logo from "../Logo";
import "./style.scss";

export const Navbar = () => {
  return (
    <div class="d-flex justify-content-between py-4 px-4 navbar mb-5">
      <div class="hstack gap-4 align-items-center">
        <Logo />
        <input class="navbar--searchbar" placeholder="Search" />
        <a class="navbar--link">Artworks</a>
        <a class="navbar--link">Artist</a>
      </div>

      <Button>Add Wallet</Button>
    </div>
  );
};

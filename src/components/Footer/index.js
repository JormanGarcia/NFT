import React from "react";
import FooterGroup from "../FooterGroup";
import FooterIcon from "../FooterIcon";
import FooterLink from "../FooterLink";
import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import "./style.scss";
import Statics from "../Statics";
import Button from "react-bootstrap/Button";
import { FiPlusCircle } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer class="footer--container flex-column">
      <div class="section top pb-5  align-items-start">
        <div class="left-side">
          <FooterGroup title="Discover">
            <FooterLink>Artists</FooterLink>
            <FooterLink>Activity</FooterLink>
          </FooterGroup>

          <FooterGroup title="Featured">
            <FooterLink>Art</FooterLink>
            <FooterLink>Photography</FooterLink>
            <FooterLink>Games</FooterLink>
            <FooterLink>Metaverse</FooterLink>
          </FooterGroup>

          <FooterGroup title="Music">
            <FooterLink>Domains</FooterLink>
            <FooterLink>DeFi</FooterLink>
            <FooterLink>Memes</FooterLink>
            <FooterLink>18+</FooterLink>
          </FooterGroup>

          <FooterGroup title="">
            <FooterLink>How to Sell</FooterLink>
            <FooterLink>How to buy</FooterLink>
            <FooterLink>Support & Help Center</FooterLink>
            <FooterLink>Metaverse</FooterLink>
          </FooterGroup>
        </div>

        <FooterGroup title="Social:">
          <div class="hstack gap-2">
            <FooterIcon>
              <FaTelegramPlane />
            </FooterIcon>
            <FooterIcon>
              <FaInstagram />
            </FooterIcon>
            <FooterIcon>
              <FaFacebook />
            </FooterIcon>
            <FooterIcon>
              <FaYoutube />
            </FooterIcon>
          </div>
        </FooterGroup>
      </div>
      <div class="sub-footer">
        <div class="section top">
          <div class="left-side">
            <Statics title="Artists" number="123.232" />
            <Statics title="Products" number="532.232" />
            <Statics title="Buyers" number="123.232" />
          </div>
          <div>
            <Button style={{ width: "200px" }}>
              <span class="d-flex align-items-center justify-content-center">
                <FiPlusCircle class="mr-4" />
                <p class="icon-text mb-0">Create</p>
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div class="footer--foot">
        <div>
          <span class="copyrigth">Copyright © 2020, NFT</span>
          <span></span>
          <span></span>
          <span></span>
          <div class="terms">
            <p class="mr-4">Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

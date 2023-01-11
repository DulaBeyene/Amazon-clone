import React from 'react'
import "./Home.css"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel
          className="home__image"
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Events/NYNY/GW/DesktopTallHero_3000x1200_NYNY_LP_12.22._CB619040395_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Consumables/Events/Deepi/BeautynWellnessGuide/AMZ-Winter23-BWGuide_GatewayHero-D-3000x1200-EN._CB619399607_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/71rHVP2bkuL._SX3000_.jpg"
              alt=""
            />
          </div>
        </Carousel>
        <div className="home__row">
          <Product
            id="12321341"
            title="Hoseili【2022new editionBluetooth Headphones】.Bluetooth 5.0 Wireless Earphones in-Ear Stereo Sound Microphone Mini Wireless Earbuds with Headphones and Portable Charging Case for iOS Android PC. XGB13"
            price={17.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/41sOHgxB2yS._AC_UF452,452_FMjpg_.jpg"
          />
          <Product
            id="12321342"
            title="Apple 2021 MacBook Pro (14-inch, M1 Pro chip with 8‑core CPU and 14‑core GPU, 16GB RAM, 512GB SSD) - Silver"
            price={1948.54}
            rating={5}
            image="https://m.media-amazon.com/images/I/31D9KKKl9aL._AC_SY328_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321343"
            title="2021 Apple 11-inch iPad Pro (Wi-Fi, 256GB) - Space Gray"
            price={165.13}
            rating={5}
            image="https://m.media-amazon.com/images/I/41viAWscfNS._AC_SY328_.jpg"
          />
          <Product
            id="12321344"
            title="Men's Zip Up Hoodie Heavyweight Winter Sweatshirt Fleece Sherpa Lined Warm Jacket"
            price={47.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81VIWgh2bSL._AC_UY879_.jpg"
          />
          <Product
            id="12321345"
            title="LYANER Women's Satin Spaghetti Straps Cowl Neck Sexy Ruch Cocktail Midi Dresses"
            price={32.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61w86yDJoZL._MCnd_AC_UL480_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321346"
            title="Acer 21.5 Inch Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Computer Monitor (HDMI & VGA Port), SB220Q bi"
            price={89.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81QpkIctqPL._AC_SL1500_.jpg"
          />
          <Product
            id="12321347"
            title="LYANER Women's Satin Drape Cowl Neck Sleeveless Strappy Cami Split Slit Party Midi Dress"
            price={35.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51KYDnqp+vL._AC_UY879_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321348"
            title="LIANLAM 1000 Thread Count Cotton Queen Size Sheets, Luxury Egyptian 100% Cotton Bed"
            price={67.9}
            rating={4}
            image="https://m.media-amazon.com/images/I/41yL9FpdR2L._AC_SR480,480_.jpg"
          />
          <Product
            id="12321349"
            title="HUANUO Dual Monitor Stand, Adjustable Spring Dual Monitor Desk Mount for 17-30 inch, Dual Monitor Mount Holds Max 14.3lbs"
            price={59.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/41xqsPrMrSL._AC_SR480,480_.jpg"
          />
          <Product
            id="12321361"
            title="Litteking Men's Tracksuits 2 Piece Outfit Casual Long Sleeve Sweat Suit Set Full Zipper Sports Jogging Suits"
            price={39.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51NWxumVn6L._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321362"
            title="Kasa Indoor Pan/Tilt Smart Security Camera, 1080p HD Dog Camera 2.4GHz with Night Vision"
            price={64.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51lGcD26GoL._AC_UL232_SR232,232_.jpg"
          />
          <Product
            id="12321363"
            title="seyfocnia Men's Leather Messenger Bag, 15.6 Inches Laptop Briefcase Business Satchel Computer Handbag Shoulder Bag for Men"
            price={39.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71-w8LdCmUL._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

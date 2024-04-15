import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox_navigator">
        <div className="descriptionbox_nav_box">Description</div>
        <div className="descriptionbox_nav_box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox_description">
        <p>
          An e-commerce website is an online piatform that faciitates the buying
          and selling of products or services over the internet. it serves as a
          virtual marketplace where businesses and individuals can showcase
          their products, interact with customers, and conduct transactions
          without the need for a physical presence. E-commerce websites have
          goined immense popularity due to their canvenience, occessibility, and
          the global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, ond any avoiloble variations
          (eg. sizes, colors). Fach product usually has its own dedicated poge
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;

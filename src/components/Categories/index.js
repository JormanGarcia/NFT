import React from "react";
import { Category } from "../Category";
import "./style.scss";

const Categories = () => {
  return (
    <div class="categories--container d-flex justify-content-center hstack gap-4">
      <Category>On Sale</Category>
      <Category active>Created</Category>
      <Category>Collectibles</Category>
      <Category>Liked</Category>
      <Category>Following</Category>
      <Category>Followers</Category>
    </div>
  );
};

export default Categories;

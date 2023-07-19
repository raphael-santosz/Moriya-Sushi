import React from "react";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section_padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu que se adapta à sua paleta" />
      <h1 className="headtext__cormorant">Especial de hoje</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Sushi's</p>
        <div className="app__specialMenu_menu_items">
          {data.sushis.map((sushi, index) => (
            <MenuItem
              key={sushi.title + index}
              title={sushi.title}
              price={sushi.price}
              tags={sushi.tags}
            />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu2} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Porções</p>
        <div className="app__specialMenu_menu_items">
          {data.porçoes.map((porçao, index) => (
            <MenuItem
              key={porçao.title + index}
              title={porçao.title}
              price={porçao.price}
              tags={porçao.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        Veja mais
      </button>
    </div>
  </div>
);

export default SpecialMenu;

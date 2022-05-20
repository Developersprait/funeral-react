import React from "react";
import { slide as Menu } from "react-burger-menu";
import ModalAbout from "./Modals/ModalAbout";
import ModalServices from "./Modals/ModalServices";
import ModalContacts from "./Modals/ModalContacts";


export default props =>{
    return (
        <Menu {...props}>
            <ul className="menu__list">
                <li>
                  <ModalAbout />
                </li>
                <li>
                  <ModalServices />
                </li>
                <li>
                  <ModalContacts />
                </li>
              </ul>
        </Menu>
    )
}
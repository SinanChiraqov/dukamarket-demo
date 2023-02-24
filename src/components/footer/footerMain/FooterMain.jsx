import React, { useState } from "react";
import { footer } from "../../../data/footer";
import { SlEarphonesAlt } from "react-icons/sl";
import "./footerMain.scss";

const FooterMain = () => {
  const [showFooterOption, setShowFooterOption] = useState(false);

  const handleClickItem = (id) => {
    footer.find
    setShowFooterOption(!showFooterOption)
  }
  
  
  return (
    <section className="footer_main">
      <div className="footer_main_container">
        <ul className="footer_heading">
          {footer.map((item) => {
            return (
              <li onClick={() => handleClickItem(item.id)}key={item.id} className="heading_item">
                {item.heading}
                <ul className={`footer_submenu ${showFooterOption ? "show" : "hide"}`}>
                  {item.submenu.map((subItem) => {
                    return (
                      <li key={subItem.subMenuTitle}>
                        <a className={item.id === 5 ? "last_item" : "item"} href={subItem.subMenuLink}>{subItem.subMenuTitle}</a>
                        <div className="footer_questinonary">
                          {item.id === footer.length && <SlEarphonesAlt className="earphones_icon" />}
                          <div className="phone_info">
                            <h6 className="">{subItem.callinfo}</h6>
                            <h6 className="phone">{subItem.phone}</h6>
                          </div>
                        </div>
                        <p className="address">{subItem.address}</p>
                        <p className="mail_address">{subItem.mail}</p>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FooterMain;

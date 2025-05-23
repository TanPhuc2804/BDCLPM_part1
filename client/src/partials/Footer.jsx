import React from "react";
import {
  DiscordFilled,
  FacebookFilled,
  InstagramFilled,
} from "@ant-design/icons";
import {footerData} from '../localData/localData'
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  const footerItems=footerData()
  return (
    <div>
      <div className="h-[50%] bg-[#003580]">
        <div className="row">
          <div className="col"></div>
          <div className="col-10">
            <div className="row">
            <div className="col-4">
            <div>
              <h3 className="font-lobster text-white mt-10">Take A Breath</h3>
              <p className="text-white">{t('footer-describe')}</p>
            <div className="flex text-white justify-center space-x-4 text-[24px] my-8">
              <FacebookFilled></FacebookFilled>
              <InstagramFilled></InstagramFilled>
            <DiscordFilled></DiscordFilled>
            </div>
            </div>
          </div>
          <div className="col-8">
          <div className="flex text-white text-start space-x-20 pt-12 pl-8">
     {footerItems.map((fData,fIndex)=>(
      <div key={fIndex}>
        <ul className="space-y-3">
          <li className="font-bold text-[18px]">{fData.title}</li>
          {fData.props.map((pData,pIndex)=>(
            <li key={pIndex}>{pData}</li>
          ))}
        </ul>
      </div>
     ))}
    </div>
          </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

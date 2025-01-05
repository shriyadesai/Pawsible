import React from "react";
import style from "../Carousel.module.css";
import Button from "../../Medical_Buttons";

/**
 *
 * @param {String} name Takes the name of the speaker
 * @param {Image} image Takes the image of the speaker
 * @param {Number} key Takes the unique key for the speaker
 * @param {String} key Takes the description for the speaker
 * @returns SpeakerBox visible on the Speakers page
 * @author ammrit2312 <amriteshc101@icloud.com>
 */
const SpeakersBox = ({ name, image, key, description }) => {
  return (
    <div className={style.SpeakersBox}>
      <div className={style.SpeakersBox__img}>
        <img src={image} alt="" />
        {/*idk how to insert text on an img -- name shld be on the img*/}
      </div>
      <div className={style.speakersbox__data}>
        <div className={style.webImg__title}>{name}
        <Button
                onHandle={() => {
                    window.location.href = "https://docs.google.com/spreadsheets/d/1Q7lmfuJX7OLKasiWWMMVEE8UsflvNVpmmsQHCWG3cVM/edit?usp=sharing";
                    console.log("Hi");
                  }}
                  disabled={false}>
                VIEW
                </Button></div>
        
        <div className={style.SpeakersBox__text}>{description}</div>
        
      </div>
    </div>
  );
};

export default SpeakersBox;

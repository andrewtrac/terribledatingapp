import "./ProfilePage.css";
import { useState, useEffect } from "react";

function ProfilePage() {

  const randomMcD = [
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374.13635412964504!2d-79.39681227051344!3d43.648941387566815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34db6565a1cb%3A0xfb8a7529ad4e464b!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1665852418725!5m2!1sen!2sca" width="600" height="450" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="McD 1"></iframe>,
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23088.044807193106!2d-79.42098140716553!3d43.66885333711834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34ae070fde51%3A0xb8f0cb4aa227ae8b!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1665856177671!5m2!1sen!2sca" width="600" height="450" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="McD 2"></iframe>,
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27663.395994262133!2d-79.44303983510383!3d43.65155694614594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b351fdd75c413%3A0xdc7e288ffe101f6b!2zTWNEb25hbGTigJlz!5e0!3m2!1sen!2sca!4v1665856305683!5m2!1sen!2sca" width="600" height="450" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="McD 3"></iframe>,
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11219.012868586937!2d-79.39290193684327!3d43.64944411375658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb328c89c2b1%3A0x5b4b3c9133656b23!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1665856320744!5m2!1sen!2sca" width="600" height="450" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="McD 4"></iframe>,
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33135.96104176413!2d-79.43318842735194!3d43.651439082019834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3508acae1d73%3A0x99d2d90988c696c7!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1665856339024!5m2!1sen!2sca" width="600" height="450" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="McD 5"></iframe>,
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7817.671609967619!2d-79.39353002191746!3d43.661992670939455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b394b07db7%3A0x3883e318c698746c!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1665856643999!5m2!1sen!2sca" width="600" height="450" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="McD 6"></iframe>,
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7817.671609967619!2d-79.39353002191746!3d43.661992670939455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ad58abdd35b35%3A0x3dbeac6c0ec54142!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1665856659878!5m2!1sen!2sca" width="600" height="450" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="McD 7"></iframe>,
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7817.671609967619!2d-79.39353002191746!3d43.661992670939455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405752e28341039b%3A0x82b30f1d29198fa1!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1665856668505!5m2!1sen!2sca" width="600" height="450" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="McD 8"></iframe>,
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4549.45966854639!2d-79.39476255079875!3d43.653410771565575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cf5ce3e445%3A0x8e933d1db556290b!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1665856680852!5m2!1sen!2sca" width="600" height="450" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="McD 9"></iframe>,
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4549.641326419615!2d-79.3826324981356!3d43.65101277793728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d15205c27d3%3A0xaf0f05573b62f1f4!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1665856692404!5m2!1sen!2sca" width="600" height="450" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="McD 10"></iframe>,
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4549.659861873761!2d-79.38425570842065!3d43.650768092834326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d15205c27d3%3A0xf89ee7b8c8cb4843!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1665856702505!5m2!1sen!2sca" width="600" height="450" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="McD 11"></iframe>
  ]
  
  const [ mcdLocation, setMcdLocation ] = useState()

  useEffect(() => {
    const chosenMcD = Math.floor(Math.random() * (randomMcD.length - 1))
    setMcdLocation(chosenMcD)
  },[])

  if (!mcdLocation) {
    return (
      <h1>... Matching ...</h1>
    )
  }
  
  return (  
    <div className="profile-page">
      <div className="profile-page__container">
        <h1>Here you go!</h1>
        <h2>Take it or leave it!</h2>
        <div className="google-iframe">{randomMcD[mcdLocation]}</div>
        <div></div>
      </div>
    </div>
  )
}

export default ProfilePage
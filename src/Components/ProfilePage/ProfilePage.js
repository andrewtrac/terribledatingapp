import "./ProfilePage.css";
import { useState, useEffect } from "react";
import axios from "axios";

function ProfilePage() {

  const userName = "Addison"

  const asciiProfile = [
    '······················································································································pb·DDDDDDDDDDDDDDDbp··························································Q·DDDDDDDDDDDDDDDDDDDDD·b·····················································pQ·DDDDDDDDDDQ·D·DDD·DDDDDD·b·················································)Q·DDDDDDDDDDDDDD·WQDQQQ·DDDDDDb················································Q·DDDDDDDDDDDDD·DQQWuWQQQDDDDDD·C··············································WpDDDDDD··DDPPWPPPPW·····PQQ·DDDDW··············································QQDDD·QQWC·················W)QDDD·C············································)·DDDDQQWC····················WQ·D·C············································)QDDD·QWW······················)QQ·b············································)·DD··WWW·······················QDDP············································Q·D·QQQW(························Q·b···········································Q·DDQQQ·QQDbbWp··········ppWP·····)·DC··········································QQ··QQQQQpb·WQWWWc······apWWWpp···)W············································)QQQQQQQQWQ)C··W)W········SC·d·····(·············································QQQQQWWC········WC······························································)QQQQWWW·······WWC·································································QQQWWc·····sQWC··································································QQQWWW····)WW···································································QQQQWWW···WDWW···································································QQQQQWWW·········································································QQQQWWWWWPPPW····································································QQQQWWWWWQ······································································)QQWQWWWWW······································································)QQQQQWWW·······································································QQQQQQWQWWWs···································································pQQQWWWWWWW····································································QQQQQWWG·····································································pQQWWQQWWW···································································dQW·····WWWWW·······························································sW··········WWW············································································sWWW····················································ss······················WP··················································QW···········································································aQW········································································',
    '····································································································································································································spQQQWWpppu································································sQQQQQWQQQDWbWQWWQWp························································qQQQQbQbWDQD·WbWQQQWWQWWW·····················································qQQQQ·bQQWQQQQQQWQQQ·QWQQQQWp·················································QQQ··bQ···QbQQWQQQ··QQQQbQQ·QbQW···············································aQQ··D··DQWQQWQQ·bWQQWGWPWWWWQQQQWW·············································QQDDQDQPGPWP··PP··············QQpWWW···········································QQQD·bWWWG·····················sQQWQPC··········································QWQ·DWWWW······················)QWQWQ···········································)W··QWWC························QQWQWW···········································)QQ·WWpbDbbWp··········qs·s·····QWWW············································)QQbWWCGaaWWWWWp····WW(QQQ)·PPW·QWWP·············································QQbWWWWC)WW·SWQW····)C·WWC)b···QWQ·············································(WQWC··WWGC···QWC···············)W·s············································QWQWG········sWWC················W··············································)QQW·sG·······WC·································································WQWW)WW·····asWp··Wu·····························································)WWWWWWW·····WW····································································WWWWWW·s··)·····································································(WWWWGWWssQsWWWq·································································WWWQW··sWWW(·QG································································)WWWWWWW·WWWWWWW································································(QQWQQWQW··············WW·······················································sWQQQQQWWWW·WGs·s·QQWWWC························································WWWWQQQQQQWWWpWWWQWWP·······················································qWWWWWWWWWQWQQQQWWWW···········W·············································WWWWWWQWWWWs·WWWWWWW··················s·····································sQWWQW···WWWWWW······W···················ssC································sQQWWWWQWQC··WWWWWWG·····GC·················sWWssu·ss·······················sWWWWQWWWWWQWQW···SG···sG·······················WQWWsW·WssGW················sWWWWWWQQWWWWWWWQWWQ·········W····················(WWWWQQWCWGscGWss··········QWWWWWWWWWWWQWWWQWQWWWWW·······W····················QsWsSWGWQQWssWWWsG(W·······WWWWWWQWWWWQQWQWWQWWQWQQWQW························sWWWWaWsWGsQWGWWWWWWsWss·s···QQQWWWWQQWQQWQWWWWWQWQWWWWWQp····················sWWQQ(WWWWQ·WsWWWWWsWQWWsWWWWsC',
    '···················································································································································································································································································ppppppp·································································qpppQDDDDDDbDDbD··bpC·······················································)pDDDbbDbbbbbbbbbbDbbbbDDDbWp··················································)·DDbbbbbbbbbbbbbbDDDbDDDDDDD·W················································)DbDbbbbbDDbbDDDDDDDDQDDDDDDDDD·W···············································DDbbbbDDDDDDQ·QQ······QD···DDDDDDW·············································QDbbbbDDD·DQQQQQQQQQQQQQWQQGWQDDD·DW···········································)DbbbDQQQQWWWWWW·······WW·W····)QDDDb···········································QDbbDQQWWWW·····················Q·DDD···········································QbbbbWWWWWW·····················sQ·D············································)bbDbQWWWWW·····················sQ·DDu··········································)bbDbQWWWWW······················)Q·DP···········································QQDWQQWWQG·······················)Q·C···········································)b·WWQb·bDDbWpQ·······WPPPPPPC····QC············································)·WWWWWQQqpWWpQpWC····spDbQPWp····)C············································()WWWWQQWWWPQQQQWW·················bu············································QWWWWWWWWsWWWWWWW·················Ps············································)·WWWWWGWW··sQQWC················(···············································QWWWWG·····QWWW··································································)WWW·····sQQQWC···s······························································WWW···WQQQQWWWWWW·······W························································WW···)QWWpQ(·····QbP·····························································WWQ··)QWQWQPWWWS·········sq······················································)WWQQWWWWQQsep·········GC)bWp···················································QQWQWWWWWQPC·········sW··QbbbC·················································QQWQQQQQWWW··········W···sQQP··················································sWWWQQQQQWpc······sQW·s··sQDP·················································spQWWWWWQQQWQQQWWWSC······QQ·P·······sC····································sWWQQQQWWWWWWQWQQWWPWWWWW···sQQPP(·······)··········sWs·····················sWWWWWWWWWWQWWWWQWQWWapWGC··GQWpPPC·Q·p···················s················sWWWW···WG·WWWWWWQWWWQWWW)b··Q··WQQP····QQQbb·······························ssG········s···sWs·WssQWWWWWPPWWWWWGWQW····au·SWQbp··················································sWP·)WCQWQWsWWWWQC··········WWbQ)·····················',
    '····························pbDDDQQ···WQ·DDDDD·Q·WQDb····················································qbDDDDDDDD··QQ·QDDDDDQDD·QWQWb·················································pDDbbbbbD·DQQQQWGWQQ·DDbbbD·WQQQp·············································)DDDbDDDDWWWWWW······WWGQQQDbbDQWQQW···········································QDbbbbDDWWWWW··············)Q·DDDbQQQW·········································pbbbbbDbWWWWW··················DQDQQQWWW·······································)DbbbbDWWWWWWW···················)Q·QQQWWW·······································Dbbbb·WWWWWW·····················)QDQWQWQu····································(DbbbbbbWWWW··············QppPPC·····QQQWQbQu···································)bbbbbbbWQpbDPDbbbbWW···)PQQWQQQPWp··)DQQQQWWC··································)bbbbbDWpWWQWQQQbWQQWWC··sQWQDDpWbGC··)QQQQQWQ··································)bbbbbbWWQQ·DQDWDPWWQWC···WWWWWWWe·····QQQWWWQW·································)bbbbDWWQQGWWWWWQWWQQWC·····WW·········QQQQQWWW·································)bbbDDbWWWW····WW·WWWWG·····Q··········QQQWQWWW··································QbbD·QWWWWW·····sQWWWC·····)QWW·······PQQbQQW·sW································)bbQPWWWWWWWsWW(QQWQQWW·······DWp····)bWQWWWWuWWC································)bWWQQbWWWWWW)QQQQQQQQWWW····sQWC···DbDQQQWW(WW·C································QbbbbbWWQWWWQbbbPQbPPP·····)DQW···)·bQQWQWQWWWWC·································QbbbbbWQQWWQQQbp(·····)qDP···P·····QQQQWWQWQWWW··································)DbDQQWQQWWWQQQQbGGPWC··········D·QQQQWQQWQQWWW····································PPDDQQQQWWWQWQQQWWWs······)DDDbDQQQQQQQWQWWWC·······································QQQQQWWWWWWWWWWG·····pbDD·QQQQQQQQQWWWWWC······································QQQQQQQQWWQQ·sWWW···a·bbDD·DQQQQQQQQQWWWWC·····································QQQQQQQQWQQQQWWWW···QQbbbbDD··QQQQQQQQQQQWCs·································qQQQQQQQWWWWWWWQWWWWW··WQbbbbDDD·QbQQQQQQWQQW·WW······························QQQQWWQQQQWWWWWG··WW·W··sWQbbbbbDDD··bQWQQQQQQWWWW···························dWWWWWWWWWWQQWWWWG········sWQDbDbbDDDDDD·Q·QQWQQWWWWW·························QWWWWWWWWWWWWWWQWWW········sGWQDbbbbDDDDDD·QQQQQQQWWWWWC······················QWWWWW·········WWWQWW········sWsQQDbbbbDDDD·bQ·QWQWWWWWWWW·················)C·····G················WW········WWWWWQbbbbDDDD·QQQQWQWWQQWWQWW················WW··s·····························WWGWCWQbbbbbDD·D·DQQQWQQWQWQWWC··············WsW·G··············WWWWWWWW··········P·WWQQbbbbDDDD·DQDbWWQWWQQWWW·············W····································W··)WQQQbbbDDDD·bQ·QQWQQQQQWWW···········sWWWsGWWWC·················u···············sWQQDbbbbDD·Q··QQbQQQQWWWW··········sWWWWWWWWWac···············s···············sWQpPWQbbbbDDD·D·bQQbQQQWWWW········sWWQWWWQWWs·s·s··············c·············WSWC···QQbbbbD···DD·QQQQQQWWWW··',
    '··················WQWC·····QpW·saaQppppppWQpWQp·········WWQQQQQQQQQQbQQbDDQWWC····················WW·····WsaWPPbQPWWWpQQPQ·bQWQDbp···········WGWQQQQQ··QQQQWW·························WQWQWGQQQWQQpWQQQQ·QWQWQQWQQW················GWQQQQQQWW·····················)ppbDQWWWQWWQQWQ·QQ·bQbD·QWQQWWWW·····················WWQWW····················)WbDDDQbDQQWbWWQD·WQWQQbQQQQWQpQQW···········································)p·bQ·DDDDQ·DD·DQbbQPPW)GWQQWQQbQQ·QWQp········································)pbQQbbbbDDQQ·DDPPPP···············D·QWQW·······································)Q·DQDbDD·DDDP······················)QWQQW······································Q·DbbbDDbDQWW························Q·QQQW·····································QDbbbbbbbDWW·························QDbDWQQp··································)QQDbbbbbbbWW··························bbbDQQQu·································s)·QbbbbbbDWW·························Qbbbb·b·W································)WQ·Qbbbbbb·Qp·bQWppWWu····QQppbQQDbbW·)bbbbb·DbWQQW····························)pQWDDbbbbb·W·Q···DDD·bWpbWpDb·D·WQQW·bPQbbbDQQ·QWWWQs···························)pD·bbbbbbWQWQQ·QQGQQQbC··QWWWWWWW··)··)QQDD·PP)sC··WWWWWWs·····················QPW)Q·DDbbWW)······P·pC····S·······)···)DWQb·············WWWWWWps···············)C··(bWQQQWWW·bWuuedWP·······)s·eC·····(·SP···················WWWWWW·············)·····WWQQWWG·························C··························WW····················ss·WWW······)QQWWQPP···········QPW··············································DQb·WWWW···QpQDDQDbWp·········sbDP··············································)D·DQQWQWQQpQpQppQppQQWW···s·)QbWC···············································)QbDDQQWQQWW············W)CQQ·WP··················································QQQ·QQWWWQQbbbbWW······WWC)W······················································QQDDbWpQQ)GC······QWpP···)W·····················································QQQQQb·QQQpWWQWWppbP······WW···WPWp············································WDQQQQQQDDDDDDD··QWW·······)W····dW·bWp········································QWQ·QQQQQQQQQQQQQWWW······)··WW····Q···DbW···································a·QQQQb·QQQQQQQQQQQWWWG·····sC··WWs···)W·s··WQWp······························cGaQWQQQQb·)WQWWWWWWWWWWW····sQ···WCGs···sC·W···)QWp····························WQWWQQQQQQp··WWWWWWWWWGWGG···WC···WW))C··WW·)W····)bpW·······················)WWW)WWQQQQQQQ····WWG·········sWC····W··QW···W··)W····WQp)W····················WWWW·QWQWQQQQQ·b···············P······WWCQWC··G···)W····WWC)Dp···C·············(·WW·WQWWWWQQQQD·Q······················Qp)WW····W···WC··sQWsQ·WCs··············WW··GQDWWQQQWQQQD·Q·····)Qp·············)W·WWW···s····Wp··sWWQQDW·W·············WWGsWQWWWQQQWQQQQQbbp···········u········bWWWWC··WW····WW·sWWQQQ·QW·············WWGsWQWWQWQQWQWQWQQQ·bW··················QWQWQW···sW····WW·WWsQQbWW'
  ]

  const randomMcD = [
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374.13635412964504!2d-79.39681227051344!3d43.648941387566815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34db6565a1cb%3A0xfb8a7529ad4e464b!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1665852418725!5m2!1sen!2sca" width="400" height="300" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="McD 1"></iframe>,
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23088.044807193106!2d-79.42098140716553!3d43.66885333711834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34ae070fde51%3A0xb8f0cb4aa227ae8b!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1665856177671!5m2!1sen!2sca" width="400" height="300" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="McD 2"></iframe>,
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27663.395994262133!2d-79.44303983510383!3d43.65155694614594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b351fdd75c413%3A0xdc7e288ffe101f6b!2zTWNEb25hbGTigJlz!5e0!3m2!1sen!2sca!4v1665856305683!5m2!1sen!2sca" width="400" height="300" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="McD 3"></iframe>,
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11219.012868586937!2d-79.39290193684327!3d43.64944411375658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb328c89c2b1%3A0x5b4b3c9133656b23!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1665856320744!5m2!1sen!2sca" width="400" height="300" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="McD 4"></iframe>,
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33135.96104176413!2d-79.43318842735194!3d43.651439082019834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3508acae1d73%3A0x99d2d90988c696c7!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1665856339024!5m2!1sen!2sca" width="400" height="300" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="McD 5"></iframe>,
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7817.671609967619!2d-79.39353002191746!3d43.661992670939455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b394b07db7%3A0x3883e318c698746c!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1665856643999!5m2!1sen!2sca" width="400" height="300" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="McD 6"></iframe>,
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7817.671609967619!2d-79.39353002191746!3d43.661992670939455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ad58abdd35b35%3A0x3dbeac6c0ec54142!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1665856659878!5m2!1sen!2sca" width="400" height="300" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="McD 7"></iframe>,
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7817.671609967619!2d-79.39353002191746!3d43.661992670939455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405752e28341039b%3A0x82b30f1d29198fa1!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1665856668505!5m2!1sen!2sca" width="400" height="300" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="McD 8"></iframe>,
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4549.45966854639!2d-79.39476255079875!3d43.653410771565575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cf5ce3e445%3A0x8e933d1db556290b!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1665856680852!5m2!1sen!2sca" width="400" height="300" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="McD 9"></iframe>,
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4549.641326419615!2d-79.3826324981356!3d43.65101277793728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d15205c27d3%3A0xaf0f05573b62f1f4!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1665856692404!5m2!1sen!2sca" width="400" height="300" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="McD 10"></iframe>,
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4549.659861873761!2d-79.38425570842065!3d43.650768092834326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d15205c27d3%3A0xf89ee7b8c8cb4843!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1665856702505!5m2!1sen!2sca" width="400" height="300" style={{border:'0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="McD 11"></iframe>
  ]
  
  const [ mcdLocation, setMcdLocation ] = useState([])
  const [ usersData, setUsersData ] = useState([])
  const [ currentUser, setCurentUser ] = useState({})

  useEffect(() => {
    
    const chosenMcD = Math.floor(Math.random() * (randomMcD.length - 1))
    setMcdLocation(chosenMcD)

    axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    axios.get('https://terribledatingapp-api.herokuapp.com/').then((response) => {
      setUsersData(response.data)
      console.log(response.data)
      return axios.get(`https://terribledatingapp-api.herokuapp.com/${userName}`)
    }).then((singleResponse) => {
      console.log(singleResponse)
      const newState = {...singleResponse.data}
      setCurentUser(newState)
    }).then(() => {
      // console.log(usersData)
    }).catch((e) => {
      console.log(e)
    })
  },[])

  useEffect(() => {
    if(currentUser && usersData.length > 0) {
      findMatch()
    }
  },[currentUser])

  const findMatch = () => {
    let highestFalseScores = 0
    let highestFalseScoresUser
    // console.log(currentUser)
    // console.log(usersData)

    for (const user of Object.keys(usersData)) {
      // console.log(usersData[user].user)
      console.log(usersData[user])
      
      const falseAnswers = []
      for (const answer of Object.keys(usersData[user])) {
        // console.log(currentUser[answer])
        // console.log(usersData[user][answer])
        if(currentUser[answer] !== usersData[user][answer]) {
          falseAnswers.push(true)
        }
        // falseAnswers.push(users)
      }
      if (highestFalseScores < falseAnswers.length) {
        // console.log('anythign')
        highestFalseScores = falseAnswers.length
        highestFalseScoresUser = usersData[user].user
      }
      console.log(highestFalseScores)
      console.log(highestFalseScoresUser)
    }
    
  }

  if (!mcdLocation || !usersData || !currentUser) {
    return (
      <>
        <h1>... Matching ...</h1>
        <p>If it takes too long, reload page</p>
      </>
    )
  }

  return (  
    <div className="profile-page">
      <div className="profile-page__container">
        <h1 className="profile-page__title">Here you go!</h1>
        <h2 className="profile-page__text">Take it or leave it!</h2>
        <div className="ascii-image">{asciiProfile[0]}</div>
        <span>Your meetup location</span>
        <div className="google-iframe">{randomMcD[mcdLocation]}</div>
      </div>
    </div>
  )
}

export default ProfilePage
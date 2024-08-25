import "../pages/Home.css";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useGSAP } from "@gsap/react";
import { gsap  } from "gsap";
import map from "../assets/map.jpg"
import noBg from "../assets/noBg.png";
import { FaOm } from "react-icons/fa6";
import bell from "../assets/bell.png";


const Home = () => {
  useGSAP(() => {
    var tl = gsap.timeline();
    tl.from(".menu", {
      duration: 1,
      transform: "translateX(45vw)",
    });
    tl.from(".menu h1", {
      x: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    });

    tl.pause();
    const menuBtn = document.querySelector(".right-nav");
    menuBtn.addEventListener("click", () => {
      tl.play();
    });

    const crossBtn = document.querySelector(".cross");
    crossBtn.addEventListener("click", () => {
      tl.reverse();
    });

    window.addEventListener("wheel", (dets) => {
      if (dets.deltaY > 0) {
        gsap.to(".marque", {
          transform: "translateX(-200%)",
          duration: 8,
          ease: "none",
          repeat: -1,
        });
      } else {
        gsap.to(".marque", {
          transform: "translateX(0%)",
          duration: 8,
          ease: "none",
          repeat: -1,
        });
      }
    });

  

    window.addEventListener("mousemove", (dets) => {
      gsap.to(".cursor", {
        x: dets.clientX,
        y: dets.clientY,
        duration: 0.2,
      });
    });


    var heading = document.querySelector(".heading").textContent.split("");
    
    document.querySelector(".heading").textContent = "";

    heading.forEach((e,ind) => {
      var halfLen = heading.length /2 ;
      if(ind < halfLen){
        let spanTag = document.createElement("span");
        spanTag.textContent = e;
        spanTag.classList.add("classA");
        document.querySelector(".heading").appendChild(spanTag);
      }
      else{
        let spanTag = document.createElement("span");
        spanTag.textContent = e;
        spanTag.classList.add("classB");
        document.querySelector(".heading").appendChild(spanTag);
      }
    })
    
    gsap.from(".classA" , {
      
      y:100,
      duration:0.8,
      opacity:0,
      color:"white",
      stagger:0.25,
      repeat:-1,
      ease: "power2.out",
      scrollTrigger:{
        trigger:".heading",
        scroller:"body",
        start:"top 50%",
        
      }
      
    })

    gsap.from(".classB" , {
      
      
      duration:0.8,
      opacity:0,
      stagger:-0.25,
      color:"white",
      repeat:-1,
      ease: "power2.out",
      scrollTrigger:{
        trigger:".heading",
        scroller:"body",
        duration:0.8,
        start:"top 50%",
        delay:.5,
        markers:true
        
      }
      
    })

    // let finalPath = "M 20 125 Q 750 125 1500 125";

    // let svgContainer = document.querySelector(".svg-container");

    // svgContainer.addEventListener("mousemove" , (dets) => {
    //    let path = `M 20 125 Q 750 ${dets.y} 1500 125` ;
    //    console.log(dets.y)
    //    gsap.to(".svgPath" , {
    //     attr:{
    //       d:path
    //     },
    //     duration:0.4,
    //     ease:"power3.out"
    //    })
    // })

    // svgContainer.addEventListener("mouseleave" , () => {
    //   gsap.to(".svgPath" , {
    //     attr:{
    //       d:finalPath
    //     },
    //     duration:1.5,
    //     ease:"elastic.out(1,0.2)"
    //   })
    // })




  });

  return (
    <div className="main">
      <div className="cursor"></div>

      <img src={bell} className="bell" alt="" />

      <div className="menu">
        <div className="cross">
          <RxCross2 />
        </div>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Contact us</h1>
        <h1>Donate</h1>
        <h1>Location</h1>
      </div>
      <div className="navBar">
        <div className="left-nav">
          <h2>Akshardham Temple</h2>
        </div>
        <div className="right-nav">
          <RiMenu3Fill />
        </div>
      </div>

      <div className="hero">
        <div className="topHero">
          <div className="sun"></div>
          <img className="temple" src={noBg} alt="" />
        </div>
        <div className="bottomHero">
          <div className="floatingText">
            <div className="marque">
              <h1>वसुदॆवसुतं दॆवं कंसचाणूरमर्दनम्।</h1>
              <h1>
                <FaOm />
              </h1>
            </div>

            <div className="marque">
              <h1>वसुदॆवसुतं दॆवं कंसचाणूरमर्दनम्।</h1>
              <h1>
                <FaOm />
              </h1>
            </div>

            <div className="marque">
              <h1>वसुदॆवसुतं दॆवं कंसचाणूरमर्दनम्।</h1>
              <h1>
                <FaOm />
              </h1>
            </div>

            <div className="marque">
              <h1>वसुदॆवसुतं दॆवं कंसचाणूरमर्दनम्।</h1>
              <h1>
                <FaOm />
              </h1>
            </div>
          </div>

          <div className="history">
            <h1>WHAT IS AKSHARDHAM</h1>
            <p>Akshardham means the divine abode of God. It is hailed as an eternal place of devotion, purity and peace. Swaminarayan Akshardham at New Delhi is a Mandir – an abode of God, a Hindu house of worship, and a spiritual and cultural campus dedicated to devotion, learning and harmony. Timeless Hindu spiritual messages, vibrant devotional traditions and ancient architecture all are echoed in its art and architecture.The mandir is a humble tribute to Bhagwan Swaminarayan (1781- 1830), the avatars, devas and great sages of Hinduism. The traditionally-styled complex was inaugurated on 6 November 2005 with the blessings of HH Pramukh Swami Maharaj and through the devoted efforts of skilled artisans and volunteers. Each element of Akshardham echoes with spirituality – the Mandir, the Exhibitions and even the Gardens.
            The Akshardham mandir has over two hundred murtis, representing many of the spiritual stalwarts over many millennia. The spiritual premise of Akshardham is that each soul is potentially divine. Whether we are serving the family, the country our neighbors or all living beings the world over , each service can help one move towards divinity. Each prayer is a call towards improving oneself and moving closer to God.</p>
            <div>
              <h1>SPIRITUAL SIGNIFICANCE</h1>
              <div className="imgCanvas"></div>
            </div>

            

            

          </div>

          <div className="locationContainer">
            <h1 className="heading">Location</h1>
            <div className="location-sub">
              <img className="map" src={map} alt="" />
              <h2>Address: NH 24, Pramukh Swami Maharaj Marg, Pandav Nagar, New Delhi, Delhi, 110092</h2>

            </div>
           
          </div>


        </div>
      </div>
    </div>
  );
};

export default Home;

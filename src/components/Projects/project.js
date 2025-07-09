import React from "react";
import './project.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';




const Project = () =>{
    return(
        <section id='works'>
           <h2 className="worksTitle">My Projects</h2>
           <span className="worksDesc">
            I take pride in paying attention to the smallest details and making sure that my work is pixel perfect . I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
           </span>

           <div className="worksImgs">
                
                
                <div className="img1">
                <img src={Portfolio1} alt='' className="worksImg"/>
                <div className="infoImg1">
                <a className="name" href="https://memorycardgame55.netlify.app/"><p className="info">Memory Card Game</p></a>
                <a className="git" href="https://github.com/Ayaan4555/MemoryCardGame"><p className="info">GitHub</p></a>
                </div>
                </div>
                    
                <div className="img2">
                <img src={Portfolio2} alt='' className="worksImg"/>
                <div className="infoImg1">
                <a className="name" href="https://youtubecloneayaan.netlify.app/"><p>YouTube Clone</p></a>
                <a className="git" href="https://github.com/Ayaan4555/YoutubeClone">GitHub</a>
                </div>
                </div>

                <div className="img3">
                <img src={Portfolio3} alt='' className="worksImg"/>
                <div className="infoImg1">
                <a className="name" href="https://sportsync-frontend.onrender.com"><p>SportSync</p></a>
                <a className="git" href="https://github.com/Ayaan4555/SportSync">GitHub</a>
                </div>
                </div>

                <div className="img4">
                <img src={Portfolio4} alt='' className="worksImg"/>
                <div className="infoImg1">
                <a className="name" href="https://chat-mate-s1dg.onrender.com"><p>ChatMate</p></a>
                <a className="git" href="https://github.com/Ayaan4555/Chat_Application"><p>GitHub</p></a>
                </div>
                </div>

                <div className="img5">
                <img src={Portfolio5} alt='' className="worksImg"/>
                <div className="infoImg1">
                <a className="name" href="https://stabs-frontend.onrender.com"><p>STABS</p></a>
                <a className="git" href="https://github.com/Ayaan4555/STABS">GitHub</a>
                </div>
                </div>

                <div className="img6">
                <img src={Portfolio6} alt='' className="worksImg"/>
                <div className="infoImg1">
                <a className="name" href="https://safe-flame.onrender.com"><p>Safe-Flame</p></a>
                <a className="git" href="https://github.com/Ayaan4555/Safe_Flame">GitHub</a>
                </div>
                </div>

                
           </div>

           

        </section>
    )
}

export default Project;
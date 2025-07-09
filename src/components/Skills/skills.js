import React from "react";
import './skills.css';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import express from '../../assets/express.png';
import mongo from '../../assets/mongo.png';

const Skills = () => {
    return(
        <section id="skills">
            <span className="skillTitle">
                What I Do 
            </span>
            <span className="skillDesc">
            As a full stack web developer, I specialize in both front-end and back-end development, creating comprehensive and functional web applications from start to finish. On the front-end, I design and build user interfaces using HTML, CSS, and JavaScript, ensuring that websites are responsive, visually appealing, and user-friendly. I use frameworks like React to enhance interactivity and user experience. On the back-end, I develop server-side logic, manage databases, and implement secure and efficient APIs using technologies such as Node.js, Express, and MongoDB. This dual expertise allows me to handle the complete development process, from designing and implementing user interfaces to managing servers, databases, and business logic, ensuring seamless integration and functionality across the entire application. My role involves continuous learning and adaptation to new tools and technologies to deliver robust, scalable, and high-performance web solutions.
            </span>

            <div className="skillBars">
                <div className="skillBar">
                    <img  src={html} alt='htmlImg' className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>HTML</h2>
                        <p>HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It employs a system of tags and attributes to define elements like paragraphs, links, images, and more, enabling browsers to render and display web pages correctly. HTML is essential for building the structure of web pages, often used alongside CSS for styling and JavaScript for functionality.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img  src={css} alt='cssImg' className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>CSS</h2>
                        <p>CSS (Cascading Style Sheets) is the standard language used to style and layout web pages. It defines the appearance of HTML elements, such as colors, fonts, spacing, and positioning. By separating content (HTML) from presentation (CSS), it allows for greater flexibility and control in web design. CSS can be applied inline, internally, or externally, making it a versatile tool for enhancing the visual appeal and user experience of web pages.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img  src={js} alt='jsImg' className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>JavaScript</h2>
                        <p>JavaScript is the standard programming language used to add interactivity and dynamic behavior to web pages. It enables developers to create responsive features, such as form validation, animations, and interactive content. JavaScript can manipulate HTML and CSS, allowing for real-time updates and changes without reloading the page. Often used alongside HTML and CSS, JavaScript is essential for creating engaging and interactive user experiences on the web.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img  src={react} alt='reactImg' className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>React JS</h2>
                        <p>React is a popular JavaScript library used for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components, making code more modular and maintainable. React efficiently updates and renders components based on data changes, improving performance. Often used alongside other tools and libraries, React is essential for developing dynamic and interactive web applications.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img  src={node} alt='nodeImg' className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Node JS</h2>
                        <p>Node.js is a popular JavaScript runtime environment that allows developers to run JavaScript on the server side. It uses an event-driven, non-blocking I/O model, making it efficient and scalable for building fast and lightweight web applications. Node.js enables the development of server-side scripts and backend services, often used with frameworks like Express. Its ability to handle multiple simultaneous connections makes it ideal for real-time applications and APIs.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img  src={express} alt='expressImg' className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Express JS</h2>
                        <p>Express.js is a popular web application framework for Node.js, used for building robust and scalable server-side applications. It provides a simple and flexible set of features for handling routes, middleware, and HTTP requests, making development more streamlined. Express.js is often used to create APIs and web services, allowing developers to build server-side functionality efficiently. Its lightweight and unopinionated nature makes it a versatile tool for various web development projects.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img  src={mongo} alt='mongoImg' className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>MongoDB</h2>
                        <p>MongoDB is a popular NoSQL database designed for handling large volumes of unstructured data. It stores data in flexible, JSON-like documents, allowing for easy scaling and high performance. MongoDB supports dynamic schemas, making it ideal for applications with evolving data structures. Often used with Node.js and other technologies, MongoDB is a key tool for building scalable and efficient data-driven applications.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills;
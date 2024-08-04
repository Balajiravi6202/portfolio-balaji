import React from "react";


const About = () => {

  const handleDownload = () => {
 
    const pdfUrl = './BALAJI RESUME.pdf ';
   
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Balaji,R_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="body-font">
      <div className="p-5 mt-3 mx-auto md:mt-5 md:mx-10 lg:mx-16">
        <div id="about" className="flex flex-col text-center w-full mb-3">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
            About Me
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg mx-auto leading-relaxed font-medium text-dark-orange text-center"
          >
            Why hire me ?
          </p>
        </div>
        <div className="mx-auto flex lg:flex-row flex-col items-center justify-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="lg:max-w-lg sm:w-2/3 lg:w-1/2 w-full mb-10 md:mb-0"
          >
            <img
              className="object-cover object-center pointer-events-none rounded backdrop-contrast-200 backdrop-brightness-200"
              alt="hero"
              src={require("../assets/Images/about.png")}
            />
          </div>
          <div className="lg:w-1/2 justify-center lg:p-5 xl:p-7 md:p-5 flex flex-col items-center text-justify">
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="false"
              className="font-medium text-gray-700 text-lg lg:text-base xl:text-xl leading-loose xl:leading-8"
            >
              I’m a dedicated software developer with  1 years of experience crafting scalable and efficient web applications.
               My expertise spans JavaScript, React, and Node.js, Express Js , MySql <br />
              <br /> My strong technical skills and experience in delivering high-quality solutions make me a valuable asset. <br /> <br /> 
              I excel at working collaboratively with cross-functional teams to turn complex challenges into successful outcomes. 
              My commitment to continuous learning and adapting ensures that I stay ahead of industry trends and bring the latest best practices to every project
            </p>
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="false"
              className="mt-7 flex gap-x-4 md:gap-x-5 justify-center md:justify-between"
            >
             
            
                <button className="inline-flex font-medium text-white bg-dark-orange border-2 border-dark-orange py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10" onClick={handleDownload}>
                  Get Resume
                </button>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

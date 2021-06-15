// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import adobeIcon from "./images/adobe-creative.svg"
import blazorIcon from "./images/blazor.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"
import facebookIcon from "./images/facebook.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "sooyeon",
  headerTagline: [
    //Line 1 For Header
    "I want to make",
    //Line 2 For Header
    "things that make",
    //Line 3 For Header
    "a difference",
  ],
  //   Header Paragraph
  headerParagraph:
    "I'm a current junior at UC Berkeley studying Computer Science. I'm passionate about tech, design, and everything in between.",

  //Contact Email
  contactEmail: "sooyeonoh48@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Recipe App", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "/",
    },
    {
      title: "Dungeon Escape", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "../images/dungeon.png",
      //Project URL - Add Your Project Url Here
      url: "https://gitlab.com/sooyeonoh/worldgeneration",
    },
    {
      title: "Bear Maps", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "../images/maps.png",
      //Project URL - Add Your Project Url Here
      url: "https://gitlab.com/sooyeonoh/bearmaps",
    },
    {
      title: "NBody Simulation", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "../images/nbody.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Berkeley-CS61B-Student/fa20-s515/tree/master/proj0",
    },
    {
      title: "Personal Portfolio", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "/",
    },
    {
      title: "Ants vs. Bees", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "./images/ants.png",
      //Project URL - Add Your Project Url Here
      url: "https://gitlab.com/sooyeonoh/cs61a",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I'm a rising junior at UC Berkeley studying Computer Science. I'm from the Bay Area, but I've previously lived in Texas and South Korea as well. ",
  aboutParaTwo:
    "This summer, I'm working at Thermo Fisher Scientific as a Product Engineering Intern, where I primarily work in building the software for medical R&D devices using Blazor. I'm learning a lot, and I look forward to successfully completing my intern project over the next couple of weeks. Beyond my regular 9-5, I'm a Computer Science Fellow for Edlyft, an education startup in the Bay Area, where I mentor other students at UC Berkeley in computer science courses and work on software engineering projects to make improvements to the Edlyft web application.",
  aboutParaThree:
    "In my free time, you can find me exploring new restaurants (I'm a major foodie), getting crafty with my sewing machine, watching soapy k-dramas, or making plans to travel the world!",
  aboutImage:
    "./imgs/me.JPG",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "HTML",
    },
    {
      img: cssIcon,
      para:
        "CSS",
    },
    {
      img: jsIcon,
      para:
        "Javascript (Node.js)",
    },
    {
      img: reactIcon,
      para:
        "React",
    },
    {
      img: blazorIcon,
      para:
        "Blazor",
    },
    {
      img: adobeIcon,
      para:
        "Adobe Creative Suite",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Python, Java, Javascript, C",
  promotionPara:
    "",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's chat if you love tech + design!",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/sooyeonoh" },
    {
      img: linkedinIcon,
      url: "https://dribbble.com/chetanverma",
    },
    {
      img: facebookIcon,
      url: "https://www.instagram.com/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com

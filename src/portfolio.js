/* Change this file to get your personal Porfolio */

const illustration = {
  animated: true // set to false to use static SVG
};

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Gabriel de Oliveira",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Gabriel Portfolio",
    type: "website",
    url: "github.com/gabrieloliveirasobrinho",
  },
};

//Home Page
const greeting = {
  title: "Hello there, I'm Gabriel!",
  logo_name: "Gabriel O Sobrinho",
  nickname: "👋🏻",
  subTitle:
    "⭐️ Welcome to my portfolio! I'm a driven intern eager to thrive in demanding electrical engineering environment. Well-informed on the latest technology advancements. Ready to combine hunger for new skills with desire to exploit cutting-edge technology. Scroll down the page to check my skills out and use the header bars for more detailed information! Feel free to explore and contact me anytime! 😀",
    
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/gabrieloliveirasobrinho",
  displayGreeting: true
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/gabrieloliveirasobrinho",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "微信",
    link: "weixin://dl/chat?gabenii",
    fontAwesomeIcon: "fa-weixin", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#7bb32e", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gabriel-oliveira-昱明-16225a13a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:gabrieldeoliveirasobrinho@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Whatsapp",
    link: "http://my-whats.com/e95bbd15da",
    fontAwesomeIcon: "fa-whatsapp", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#25D366", // Reference https://simpleicons.org/?q=github
  },
];


const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases;",
        "⚡ Experience of working with Computer Vision and Natural Language Processing projects;",
        "⚡ I have explored data in a variety of ways and across multiple visualizations, using advanced PowerBI techniques; ",
        "⚡ I developed strategic expertise in design of data collection, analysis and visualization;",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
      ],
    },
    {
      title: "Data Center Facility",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience in managing mission critical operations, staffing and assets to include Power Distribution, Cooling, Controls, Communications, and Change Management Process;",
        "⚡ Planning and budgeting local infrastructure operations, touching base with datacenter facilities suppliers and providing support at both the tactical and strategic level;",
        "⚡ I worked with AutoCAD, SketchUp and REVIT to design data center environment rooms;",
      ],
      softwareSkills: [
        {
          skillName: "AutoCad",
          fontAwesomeClassname: "simple-icons:autodesk",
          style: {
            color: "#0696D7",
          },
        },
        {
          skillName: "SketchUp",
          fontAwesomeClassname: "simple-icons:sketchup",
          style: {
            color: "#005F9E",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Word",
          fontAwesomeClassname: "file-icons:microsoft-word",
          style: {
            color: "#3776AB",
          },
        },
        {
        skillName: "Microsoft Office ",
        fontAwesomeClassname: "mdi:microsoft-office",
        style: {
          color: "#DC3E15",
        },
      },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
  
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Brasília (UnB)",
      subtitle: "B. in Electrical Engineering",
      logo_path: "UnB.png",
      alt_name: "UnB",
      duration: "Expected graduation date: December 2023",
      descriptions: [
        "⚡ UnB provides its students with a complete education in the field of electrical engineering. I have had the opportunity to study different areas of electrical engineering and participated in several research groups. I am very interested in the area of electrical installations, communication systems and programming.",
      ],
      website_link: "https://unb.br",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "-  Kirill Eremenko",
      logo_path: "ML.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-f81adbaf-de04-4145-b340-c821c8ae5294/",
      alt_name: "Udemy",
      color_code: "#FFFFFF",
    },
    {
      title: "Deep Learning",
      subtitle: "-  Kirill Eremenko",
      logo_path: "Deep-Learning-logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-8a481c5d-7b9e-4b4f-9138-958c051f135c/",
      alt_name: "Udemy",
      color_code: "#ECECEC",
    },
    {
      title: "Image Processing and Computer Vision",
      subtitle: "- Minerva Singh",
      logo_path: "opencv-python-logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-4fe62a79-4f91-4c6b-a0db-a3dae7582958/",
      alt_name: "Udemy",
      color_code: "#0C9D5899",
    },
    {
      title: "1st Place in Best Game Developed",
      subtitle: "- TGF",
      logo_path: "TFG_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1PBsx54yBsGBeJeJrHD3OKzRM1ilJl1R4/view?usp=sharing",
      alt_name: "TGF",
      color_code: "#FEE12B",
    },
    {
      title: "2nd Place in Best Code Implementation in Games",
      subtitle: "- TGF",
      logo_path: "TFG_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/10X-MhuvISePaKWE18UU7fbox_w9s2Syf/view?usp=sharing",
      alt_name: "TGF",
      color_code: "#D83B0199",
    },
    {
      title: "汉语水平考试 level 1 - course",
      subtitle: "- Pula Muralha",
      logo_path: "HSK.png",
      certificate_link:
        "https://drive.google.com/file/d/14hyWV6uvC1H3vE1BKN6sah52irFtXjsy/view?usp=sharing",
      alt_name: "中文",
      color_code: "#1F70C199",
    },
    {
      title: "Power BI",
      subtitle: "- Alura",
      logo_path: "Power+BI.png",
      certificate_link:
        "https://drive.google.com/file/d/1JDKpSU5YWQGoLM_erw1VSw6fY-Hm4NZT/view?usp=sharing",
      alt_name: "Alura",
      color_code: "#0C9D5899",
    },
    {
      title: "Keras",
      subtitle: "- Alura",
      logo_path: "keras.png",
      certificate_link:
        "https://cursos.alura.com.br/user/gabriel-oliveira-go/course/deep-learning-introducao-com-keras/certificate",
      alt_name: "alura.com",
      color_code: "#FAFAFF",
    },
    {
      title: "Excel",
      subtitle: "- Alura",
      logo_path: "excel.png",
      certificate_link:
        "https://cursos.alura.com.br/user/gabriel-oliveira-go/course/excel-introducao/certificate",
      alt_name: "alura.com",
      color_code: "#FFA500",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship & Volunteership",
  description:
    "I have more than two years of internship experience in the field of data science and data center engineering.",
  header_image_path: "experience.svg",
  sections: [
    
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science & AI Research Intern",
          company: "National Civil Aviation Agency",
          company_url: "https://www.anac.gov.br/en",
          logo_path: "anac-logo.png",
          duration: "December 2020 - Present",
          location: "Brasília, Brazil",
          description:
            " I have been developing highly complex and scalable production ready supervised learning models for various deeplearning and statistical use cases, such as dynamic forecasting and time series analysis. Under the supervision of the IT engineer, I wrote a paper about the Machine Learning techniques I used to implement a classification model to the company's Customer Service Call Center. I have also explored data in a variety of ways and across multiple visualizations, using advanced PowerBI techniques. I developed strategic expertise in design of data collection, analysis and visualization. Check the Projects section for more detailed information.",
          color: "#ee3c26",
          //https://app.powerbi.com/view?r=eyJrIjoiODg4ZWRjMGItOTdiYS00OTQ4LTliOTQtYjNhZjYxNmMzNDM4IiwidCI6ImI1NzQ4ZjZlLWI0YTQtNGIyYi1hYjJhLWVmOTUyMjM2ODM2NiIsImMiOjR9
        },
        {
          title: "Data Center Engineering Operations Intern",
          company: "Bank of Brazil",
          company_url:
            "https://www.bb.com.br/pbb/pagina-inicial#/",
          logo_path: "bb.png",
          duration: "November 2019 - November 2020",
          location: "Brasília, Brazil",
          description:
            "I worked at the Bank of Brazil's main datacenter facility. I planned and budgeted local and outsider infrastructure operations, contacted datacenter facilities suppliers and provided support at both the tactical and strategic level utilising softwares like Excel, Power BI and Revit. I also worked with AutoCAD, SketchUp and REVIT to design data center environment rooms. I supported the entire construction process of the new Bank of Brazil's datacenter in the São Paulo state, from the bidding process to the monitoring of the construction works. I had the opportunity to design a hallway in this datacenter. For more details about this project, check out the projects tab.",
          color: "#0071C5",
        },
        {
          title: "Tutor",
          company: "UnB",
          company_url: "https://unb.br",
          logo_path: "UnB.png",
          duration: "September 2020 - June 2021",
          location: "Brasília, Brazil",
          description:
            "I have worked as a tutor during my junior years for classes including electrical circuits and signals and systems. By running lab sessions and office hours, I got to work with many different, sharp minds. ",
          color: "#000000",
        },
        {
          title: "Data Science Intern",
          company: "Brazilian National Agency of Electrical Energy",
          company_url: "https://www.aneel.gov.br",
          logo_path: "aneel.png",
          duration: "March 2019 - November 2019",
          location: "Brasília, Brazil",
          description:
            "I performed data preprocessing to transform unstructured data to a state where the features can now be easily interpreted by Power BI. I developed a dashboard that updates in real time and shows information about the electricity transmission system in Brazil. This system is used to generate reports on the transmission system by ANEEL and supports fines applied to transmission companies in Brazil that fail to comply with their requirements.",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "English Tutor",
          company: "Inglês na Estrutural",
          company_url: "http://www.coletivodacidade.org/ingles-na-estrutural/",
          logo_path: "ine.png",
          duration: "March 2019 - Present",
          location: "Brasília, Brazil",
          description:
            "As an English Tutor, I provided extra help to English students. My responsibilities included assessing a student's strengths and weaknesses in different areas, planning session plans to target specific skills and developing ways to help them improve.",
          color: "#D83B01",
        },
        {
          title: "IEEE Member",
          company: "Institute of Electrical and Electronics Engineers",
          company_url: "https://about.google/",
          logo_path: "IEEE.png",
          duration: "June 2017 - January 2020",
          location: "Brasília, Brazil",
          description:
            "IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE and its members inspire a global community through its highly cited publications, conferences, technology standards, and professional and educational activities. My responsabilities included researching, writing, and performing award-winning professional development workshops and training experiences with a customized comedic element that relates to each audience’s industry.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects use a wide variety of the latest technology tools. I worked with both data analysis and 2D and 3D infrastructure projects in a Tier 1 mission critical environment.",
  avatar_image_path: "projects_image.svg",
};


// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "gabriel_teste.png",
    description:
      "My name is Gabriel 昱明, I'm 22 years old and I am an electrical engineering student. Driven intern eager to thrive in demanding electrical engineering environment. Well-informed on the latest technology advancements. Ready to combine hunger for new skills with desire to exploit cutting-edge technology. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://gabrieloiiveirasobrinho.medium.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "I'm based in Brasília, Distrito Federal - Brazil 🇧🇷",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+55 (61) 9 9101-7256",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};

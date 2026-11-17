export const personalInfo = {
  name: "Siyethaba Hlabisa",
  shortName: "Siyethaba H.",
  email: "siyethabahla@gmail.com",
  linkedin: "https://www.linkedin.com/in/siyethaba-hlabisa-3746583b6/",
  github: "https://github.com",
  heroBio: {
    en: "Hi, I'm Siyethaba Hlabisa, a Programming and Robotics student at East Cape Midlands TVET College. My work spans IoT systems, embedded electronics, and software development. I build intelligent robotic systems and connected hardware solutions.",
    xh: "Molo, ndingusiyethaba Hlabisa, umfundi we-Programming ne-Robotics e-East Cape Midlands TVET College. Umsebenzi wam uquka i-IoT, ii-electronics, nophuhliso lwesoftware. Ndakha iirobhothi ezikrelekrele nezisombululo zehardware."
  },
  location: "Eastern Cape, Uitenhage (Kariega), South Africa",
  accentColor: "#E28D69"
};

export const carouselSlides = [
  {
    id: 1,
    title: "Siyethaba Hlabisa.",
    subtitle: "Robotics & Embedded Systems Engineer",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80",
    fallbackBg: "linear-gradient(135deg, #1c1815 0%, #2b221b 50%, #151311 100%)",
    tag: "Robo Wars & Automation",
    isLocal: false
  },
  {
    id: 2,
    title: "Siyethaba Hlabisa.",
    subtitle: "W3Node Hackathon — Cape Town",
    image: null,
    localImage: "FirstImage",
    fallbackBg: "linear-gradient(135deg, #18191f 0%, #1c262e 50%, #121417 100%)",
    tag: "W3Node Networking",
    isLocal: true
  },
  {
    id: 3,
    title: "Siyethaba Hlabisa.",
    subtitle: "SRC Deputy President — EC Midlands TVET",
    image: null,
    localImage: "TheSecond",
    fallbackBg: "linear-gradient(135deg, #1b1c1d 0%, #262927 50%, #131414 100%)",
    tag: "Student Leadership",
    isLocal: true
  },
  {
    id: 4,
    title: "Siyethaba Hlabisa.",
    subtitle: "Robo Rumble Finale — Soweto 2nd Place",
    image: null,
    localImage: "TheThird",
    fallbackBg: "linear-gradient(135deg, #241c19 0%, #3a221b 50%, #171210 100%)",
    tag: "Combat Robotics",
    isLocal: true
  },
  {
    id: 5,
    title: "Siyethaba Hlabisa.",
    subtitle: "P2P Mobile & Systems Engineering",
    image: null,
    localImage: "FirstImage",
    fallbackBg: "linear-gradient(135deg, #161a24 0%, #1a2233 50%, #11141b 100%)",
    tag: "W3Node Hackathon Sprint",
    isLocal: true
  }
];

export const projectsData = [
  {
    id: "robo-wars",
    title: "Robo Wars: Combat Robot Car (Robo Rumble)",
    categoryTags: ["IoT", "Electronics"],
    summary: "Built an agile, combat-ready remote vehicle that competed in the Robo Rumble Finale in Soweto, achieving 2nd place.",
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&w=1000&q=80",
    specs: [
      "Custom high-current dual H-bridge motor drivers (40A peak)",
      "Low-latency 2.4GHz RF transceiver with failsafe emergency cutoff",
      "Steel reinforced chassis designed for kinetic absorption",
      "Telemetry feedback for battery voltage and motor temperature"
    ],
    tech: ["Electronics", "C++", "Arduino / ESP32", "RF 2.4GHz", "Motor Drivers", "CAD Chassis"],
    details: "Built specifically for high-intensity 1-on-1 battle rounds at the Robo Rumble Finale in Soweto, Gauteng. The combat robot combines responsive mechanical steering with high-torque gear motors and defensive armor. Took 2nd place out of dozens of competitive entries across South Africa."
  },
  {
    id: "lumotech-api",
    title: "Industrial Maintenance API & Telemetry",
    categoryTags: ["Softwares", "IoT"],
    summary: "Real-time diagnostic API and monitoring service developed during work-shadowing at Lumotech manufacturing plant.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
    specs: [
      "RESTful API endpoints for industrial sensor stream logging",
      "Machine status alerts with anomaly threshold triggers",
      "Real-time uptime and preventive maintenance scheduler",
      "Compliant with industrial safety and operational standards"
    ],
    tech: ["Softwares", "IoT", "Python", "FastAPI", "PostgreSQL", "MQTT", "Docker"],
    details: "Engineered to streamline equipment health tracking and reduce machine downtime. Bridges factory floor instrumentation with plant engineering dashboards to automate service logging and track preventive maintenance schedules."
  },
  {
    id: "p2p-app",
    title: "P2P Decentralized Mobile App (W3Node)",
    categoryTags: ["Softwares"],
    summary: "Peer-to-peer mobile networking application built during the intensive 3-day W3Node Hackathon in Cape Town.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=80",
    specs: [
      "Local peer discovery using Bluetooth Low Energy and Wi-Fi Direct",
      "End-to-end encrypted packet transmission without centralized servers",
      "Offline-first resilient data synchronization queue",
      "Intuitive mobile UI optimized for low-bandwidth environments"
    ],
    tech: ["Softwares", "React Native", "WebRTC", "P2P Mesh", "TypeScript", "Node.js"],
    details: "Created during the Cape Town W3Node 72-hour hackathon sprint. Solves connectivity dead-zones by allowing mobile devices to establish ad-hoc peer networks for resilient local messaging, file sharing, and node routing."
  },
  {
    id: "smart-iot-sensor",
    title: "Smart Micro-Climate IoT Sensor Node",
    categoryTags: ["IoT", "Electronics"],
    summary: "Solar-powered environmental monitoring node with deep-sleep telemetry and cloud analytics.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
    specs: [
      "Ultra-low power ESP32 firmware running FreeRTOS",
      "Multi-sensor array: BME280, capacitive soil moisture, ambient lux",
      "Solar MPPT charge controller with LiFePO4 battery battery management",
      "MQTT payload compression for minimal cellular data consumption"
    ],
    tech: ["IoT", "Electronics", "ESP32", "FreeRTOS", "MQTT", "PCB Design"],
    details: "Designed for agricultural automation in the Eastern Cape region. Continuously gathers soil moisture and atmospheric metrics, transmitting compressed packets to an IoT broker to automate water irrigation pumps."
  },
  {
    id: "robotic-arm",
    title: "4-DOF Articulated Robotic Manipulator Arm",
    categoryTags: ["Electronics", "Softwares"],
    summary: "Programmable multi-axis robotic arm with inverse kinematics and precision PWM servo control.",
    image: "https://images.unsplash.com/photo-1614680376593-902f749f7ffc?auto=format&fit=crop&w=1000&q=80",
    specs: [
      "4 Degrees of Freedom with metal-gear servo actuators",
      "Custom PCA9685 16-channel 12-bit PWM I2C interface",
      "Kinematic simulation model written in Python",
      "Pick-and-place coordinate memorization and execution"
    ],
    tech: ["Electronics", "Softwares", "Python", "Inverse Kinematics", "I2C Bus", "Robotics"],
    details: "Educational robotics project built to experiment with robotic coordinate transformations, joint angle calculations, and smooth trajectory motion planning for pick-and-place tasks."
  },
  {
    id: "telemetry-dashboard",
    title: "Robotics Mission Control & Diagnostic Suite",
    categoryTags: ["Softwares", "IoT"],
    summary: "Full-stack web dashboard delivering sub-50ms live telemetry, video streaming, and motor parameter tuning.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80",
    specs: [
      "Low-latency bi-directional WebSocket telemetry streaming",
      "Dynamic HUD showing battery voltage, orientation IMU, and ping",
      "Virtual joystick for web-based remote piloting",
      "Telemetry recording and CSV export for offline analysis"
    ],
    tech: ["Softwares", "IoT", "React", "WebSockets", "Canvas API", "Node.js"],
    details: "Developed as a central station for monitoring mobile robots and IoT nodes during field tests. Provides live instrumentation dials, orientation gyroscopes, and direct diagnostic control over wireless links."
  }
];

export const educationData = {
  institution: "East Cape Midlands TVET College",
  course: "Programming and Robotics",
  qualification: "NCV Levels 2 – 4 (L2 – L4)",
  period: "2025 – 2027",
  location: "Eastern Cape, Uitenhage (Kariega)",
  disciplines: [
    "Industrial Robotics & Motion Systems",
    "Embedded Microcontroller Programming (C / C++ / Python)",
    "Circuit Design, Soldering & Sensor Integration",
    "IoT Networking & Telemetry Protocols",
    "Industrial Automation Safety & Regulations",
    "3D Printing & Rapid Prototyping"
  ]
};

export const experienceData = [
  {
    id: "lumotech",
    company: "Lumotech",
    period: "June 2026",
    role: "WorkShadowing and Maintenance API",
    location: "Eastern Cape, Uitenhage",
    shortDetail: "WorkShadowing and Maintenance API · Eastern Cape, Uitenhage",
    description: "Worked there as a Shadower for the first 2 weeks and spent the rest assisting in the maintenance. I have learned how industry works, regulations and how to learn and behave in Industry Companies.",
    extendedDetails: [
      "Completed 2-week intensive shadowing alongside senior industrial maintenance technicians, learning production floor workflows and stringent safety standards.",
      "Assisted in maintaining and inspecting electrical control panels, automated machinery, and sensory equipment on active manufacturing lines.",
      "Contributed to API integration and data gathering routines to assist engineering teams in tracking maintenance logs and diagnostic status.",
      "Acquired crucial industry readiness: understanding automotive/industrial manufacturing standards, compliance protocols, and professional workplace communication."
    ],
    tags: ["Industrial Maintenance", "API Integration", "Workplace Safety", "Manufacturing Regulations"]
  },
  {
    id: "robo-rumble",
    company: "Robo Rumble Finale",
    period: "August 2026",
    role: "Robo Wars Combat Bot Builder & Driver",
    location: "Gauteng, Soweto",
    badge: "1 Day Competition · 2nd Place",
    shortDetail: "Robo Wars · Gauteng, Soweto (1 Day Competition)",
    description: "Built robot car and fought with other participants. I have learned resilience and the ability to think outside the box. I came out second place.",
    extendedDetails: [
      "Engineered an armored combat robot car from scratch, optimizing weight distribution, motor torque, and fast maneuverability.",
      "Piloted the bot through bracket-style elimination rounds against other skilled robotics makers and universities.",
      "Executed critical on-the-spot repairs between battle rounds within 10-minute pit windows, diagnosing electrical shorts and replacing drive gears under pressure.",
      "Achieved 2nd Place (Runner-Up) in the tournament, cultivating tactical resilience, high-stress problem solving, and innovative mechanical ingenuity."
    ],
    tags: ["Combat Robotics", "Rapid Arena Repair", "2nd Place Winner", "RF Control", "Resilience"]
  },
  {
    id: "w3node",
    company: "W3Node Hackathon",
    period: "November 2026",
    role: "P2P Mobile Application Developer",
    location: "Western Cape, Cape Town",
    badge: "3 Day Hackathon",
    shortDetail: "P2P Mobile App · Western Cape, Cape Town (3 Day Hackathon)",
    description: "P2P mobile app. Learned to work under pressure and had a great opportunity of networking and getting to know more about what my competitors do.",
    extendedDetails: [
      "Collaborated in a non-stop 72-hour engineering sprint to architect and deploy a peer-to-peer mobile application.",
      "Engineered decentralized node communication protocols enabling local device discovery without centralized server dependency.",
      "Demonstrated ability to deliver functional software prototypes while working under extreme deadline pressure.",
      "Leveraged the event for high-impact technical networking with tech leaders, fellow developers, and industry sponsors, gaining keen insights into competitive architectures."
    ],
    tags: ["P2P Architecture", "Mobile Development", "Rapid Prototyping", "Technical Networking"]
  }
];

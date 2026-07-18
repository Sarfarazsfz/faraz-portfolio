const portfolioData = {
    personal: {
        name: "MD SARFARAZ ALAM",
        role: "Entry-Level Software Engineer | Full-Stack Developer",
        location: "Guntur, India",
        availability: "Available for Full-time, Internship",
        phone: "+91-8797301600",
        email: "mdsarfarazalam669@gmail.com",
        linkedin: "https://linkedin.com/in/faraz4237",
        github: "https://github.com/Sarfarazsfz",
        leetcode: "https://leetcode.com/u/faraz4237",
        summary:
            "Final-year Computer Science undergraduate and Full Stack Developer with a software engineering mindset. I specialize in building complete products independently using Java, Spring Boot, React.js, and Node.js. With hands-on experience developing REST APIs and AI-powered applications, I am actively seeking Software Engineer or Full Stack Developer opportunities to bring scalable solutions to production."
    },

    skills: {
        "Software Engineering": ["Requirement Analysis", "REST API Design", "Full Stack Architecture", "Database Design"],
        "Programming Languages": ["Java", "JavaScript (ES2022+)"],
        "Frontend": ["React.js", "HTML5", "CSS3"],
        "Backend": ["Node.js", "Fastify", "Spring Boot"],
        "Databases": ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
        "Testing": ["JUnit", "Jest"],
        "Developer Tools": ["Git", "GitHub", "Docker"],
        "Computer Science Fundamentals": ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems"]
    },

    education: [
        {
            institution: "Vignan's Foundation for Science, Technology and Research",
            degree: "Bachelor of Technology in Computer Science & Engineering",
            duration: "2023–2027",
            location: "Guntur, India"
        },
        {
            institution: "Anugrah Memorial College",
            degree: "Higher Secondary Certificate (Class XII)",
            duration: "2021–2023",
            score: "Percentage: 71.4%",
            location: "Bihar, India"
        },
        {
            institution: "Bindeshwar Thakur B.L. Gate High School",
            degree: "Secondary School Certificate (Class X)",
            duration: "2020–2021",
            score: "Percentage: 81.6%",
            location: "Gaya, Bihar, India"
        }
    ],

    projects: [
        {
            title: "JobMatch AI",
            shortDescription: "Intelligent Job Tracking Solution",
            image: "https://placehold.co/800x450/1e293b/ffffff?text=JobMatch+AI",
            tech: ["React.js", "Node.js", "Fastify", "Google Gemini", "Redis"],
            year: "2026",
            description: [
                "Built a job tracking platform fetching real-time listings.",
                "Implemented AI resume–job matching using Gemini API and Redis.",
                "Reduced job search time by 60% with advanced filtering."
            ],
            demoText: "Demo Available on Request",
            githubLink: "https://github.com/Sarfarazsfz/JobMatch-AI-Placeholder",
            featured: true
        },
        {
            title: "Library Management System",
            shortDescription: "Enterprise-style full-stack platform",
            image: "https://placehold.co/800x450/1e293b/ffffff?text=Library+System",
            tech: ["Spring Boot", "Java", "React", "TypeScript", "PostgreSQL", "JWT"],
            year: "2025",
            description: [
                "Built an enterprise-style full-stack library management system.",
                "Implemented robust Spring Security and JWT authentication.",
                "Deployed scalable backend on Render and frontend on Vercel."
            ],
            demoLink: "https://library-management-system-alpha-lac.vercel.app/",
            githubLink: "https://github.com/Sarfarazsfz/library-management-system",
            featured: true
        },
        {
            title: "SemanticShield",
            shortDescription: "AI-powered semantic plagiarism detection",
            image: "https://placehold.co/800x450/1e293b/ffffff?text=SemanticShield",
            tech: ["FastAPI", "React", "Vite", "Tailwind CSS", "Machine Learning"],
            year: "2025",
            description: [
                "Developed an AI-powered semantic plagiarism detection system.",
                "Implemented Machine Learning models using Random Forest, TF-IDF, and Cosine Similarity.",
                "Built a seamless frontend experience using React and Tailwind CSS."
            ],
            demoLink: "https://semantic-shield.vercel.app/",
            githubLink: "https://github.com/Sarfarazsfz/SemanticShield",
            featured: true
        },
        {
            title: "VectorShift",
            shortDescription: "Visual drag-and-drop pipeline builder",
            image: "https://placehold.co/800x450/1e293b/ffffff?text=VectorShift",
            tech: ["React", "React Flow", "Zustand", "FastAPI", "Python", "JavaScript"],
            year: "2025",
            description: [
                "Developed a visual drag-and-drop pipeline builder using React Flow.",
                "Managed complex state with Zustand across UI components.",
                "Built backend endpoints using FastAPI and Python."
            ],
            demoLink: "https://vectorshift-frontend-assessment-xi.vercel.app/",
            githubLink: "https://github.com/Sarfarazsfz/VectorShift",
            featured: false
        },
        {
            title: "WanderLust",
            shortDescription: "Vacation Rental Marketplace",
            image: "https://placehold.co/800x450/1e293b/ffffff?text=WanderLust",
            tech: ["Node.js", "Express.js", "MongoDB", "React.js", "Mapbox", "Cloudinary"],
            year: "2025",
            description: [
                "Built a full-stack property marketplace following MVC architecture.",
                "Implemented Passport.js user authentication and secure booking.",
                "Integrated Mapbox for search and Cloudinary for media storage."
            ],
            demoLink: "https://wanderlust-xz5o.onrender.com/",
            githubLink: "https://github.com/Sarfarazsfz/WanderLust",
            featured: false
        },
        {
            title: "Cloudify",
            shortDescription: "Dynamic Weather Application",
            image: "https://placehold.co/800x450/1e293b/ffffff?text=Cloudify",
            tech: ["React.js", "OpenWeather API"],
            year: "2025",
            description: [
                "Built a dynamic weather application using React fundamentals.",
                "Integrated OpenWeather API for real-time forecasting.",
                "Implemented location-based search and state management."
            ],
            demoLink: "https://cloudify-n776.onrender.com/",
            githubLink: "https://github.com/Sarfarazsfz/Cloudify",
            featured: false
        }
    ],

    certifications: [
        {
            title: "AWS Cloud Practitioner Essentials",
            issuer: "AWS Training & Certification",
            date: "May 2026",
            description: "Completed AWS Cloud Practitioner Essentials covering cloud fundamentals, AWS core services, cloud deployment concepts, cloud security, pricing models, and AWS architecture fundamentals."
        },
        {
            title: "Principles of Management",
            issuer: "IIT Roorkee (NPTEL Online Certification)",
            date: "January – April 2026",
            achievement: "Elite",
            description: "Successfully completed the NPTEL certification with Elite grade, covering management principles, organizational behavior, planning, leadership, teamwork, and decision-making."
        }
    ]
};

export default portfolioData;

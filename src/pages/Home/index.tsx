import { useEffect, useRef } from "react";

const Home = () => {
    const introRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sections = document.querySelectorAll('.section-animate');
        const observer = new window.IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.15 }
        );
        sections.forEach(section => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const handleExploreClick = () => {
        introRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main>
            <section id="home" className="section-animate">
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-gray-100 gap-8 items-center">
                    <div className="w-full">
                        <img
                            src="./Images/profile1.jpeg"
                            alt="Profile"
                            className="h-[80vh] sm:h-screen xl:max-w-full w-full object-cover"
                        />
                    </div>
                    <div className="px-4 py-8 flex flex-col items-center md:items-start text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-title mb-4">
                            Welcome to My Portfolio
                        </h1>
                        <p className="text-lg text-gray-700 mb-8">
                            Hi, I'm Harshita Korat, a passionate web developer.
                        </p>
                        <button
                            onClick={handleExploreClick}
                            className="px-6 py-3 bg-title text-white rounded-lg hover:bg-indigo-500 transition-colors"
                        >
                            Explore More
                        </button>
                    </div>
                </div>
            </section>

            {/*  Introduction */}
            <section ref={introRef} className="section-animate m-5 sm:m-10 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-title mb-4">Introduction</h2>
                            <p>Hi, I'm a passionate and results-oriented MERN Stack Developer with hands-on total 4.6+ years of experience in building dynamic, full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
                                I specialize in creating scalable backend architectures, intuitive frontend interfaces, and seamless API integrations.
                                My approach focuses on writing clean, efficient code and delivering high-performing solutions that align with both user needs and business goals.
                                I enjoy solving complex problems and continuously enhancing my skills to stay updated with modern development practices.</p>
                        </div>
                        <div className="py-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-title mb-4">Skills</h2>
                            <ul className="list-disc pl-5">
                                <li>Proficient in MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
                                <li>Experience with RESTful APIs and GraphQL</li>
                                <li>Strong understanding of JavaScript and TypeScript</li>
                                <li>Familiarity with version control systems (Git)</li>
                                <li>Knowledge of Agile methodologies and best practices</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img
                            src="./Images/MERN-Stack-Development.png"
                            alt="Profile"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* about me */}
            <section className="bg-gray-100 section-animate">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 items-center">
                    <div>
                        <img
                            src="./Images/about1.jpg"
                            alt="About Me"
                            className="w-full object-cover"
                        />
                    </div>
                    <div>
                        <img
                            src="./Images/about2.jpg"
                            alt="About Me"
                            className="w-full object-cover"
                        />
                    </div>
                    <div>
                        <img
                            src="./Images/about3.jpg"
                            alt="About Me"
                            className="w-full object-cover"
                        />
                    </div>
                </div>
                <div id="about" className="m-5 sm:m-10 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start mb-8">
                        <div className="py-4">
                            <h2 className="text-4xl md:text-5xl font-bold text-title mb-4">About Me</h2>
                        </div>
                        <div>
                            <h4 className="text-xl md:text-2xl font-bold text-title mb-4">My Vision</h4>
                            <p>Driven to build scalable, user-centric web applications using the MERN stack with a focus on performance and clean architecture.
                                Committed to continuous learning and delivering solutions that bridge technology with real-world business needs.</p>
                        </div>
                        <div>
                            <h4 className="text-xl md:text-2xl font-bold text-title mb-4">My Mission</h4>
                            <p>To develop high-quality, full-stack applications that deliver seamless user experiences and scalable performance.
                                Dedicated to writing clean, maintainable code and leveraging modern technologies to solve real-world problems efficiently.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* career */}
            <section id="career" className="section-animate">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                    <div className="m-5 sm:m-10 text-left">
                        <h3 className="text-4xl md:text-5xl font-bold text-title mb-4">Career</h3>
                        <p>Throughout my career as a MERN Stack Developer, I have contributed to the development of
                            multiple real-world applications across domains such as e-commerce, HRMS, and finance. I’ve built full-stack solutions from the ground up using technologies like React.js, Next.js, Node.js, NestJS, MongoDB, and PostgreSQL.
                            My work includes building dynamic e-commerce platforms with integrated payment gateways,
                            developing HR and learning management systems with complex role-based access control, and leading teams to deliver scalable, production-ready applications.
                            I have played key roles in both frontend and backend development, API integration, and team leadership, consistently focusing on performance, security, and user experience.</p>
                    </div>
                    <div>
                        <img
                            src="./Images/career1.jpg"
                            alt="About Me"
                            className="w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* projects */}
            <section id="projects" className="bg-gray-100 section-animate">
                <div className="m-5 sm:m-10 text-left">
                    <h4 className="text-4xl md:text-5xl font-bold text-title mb-4">Projects</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <h1><strong>🧑‍💼 Crest-Connect & LMS (HRMS + Learning Management System)</strong></h1>
                            <h2><strong>Company: </strong> Glasier Inc.</h2>
                            <p>Developed a real-time HR and Learning Management System with role-based access. Key features include user onboarding,
                                course management by category and level, MCQ-based learning content, approval workflows, and a real-time attendance tracking module.
                                Ensured secure, scalable operations across HR and learning domains.</p>
                            <h2><strong>Tech Stack: </strong> Nest JS, MongoDB, React JS(Vite)</h2>
                            <h2><strong>Role: </strong> Frontend & Backend Developer</h2>
                        </div>
                        <div>
                            <h1><strong>🏥 Medivant (Medicart – Medical E-commerce Platform)</strong></h1>
                            <h2><strong>Company: </strong> Glasier Inc.</h2>
                            <p>Built a real-time e-commerce platform for medical products with seamless integration to Zoho via third-party
                                APIs for managing users, products, orders, and invoices.
                                Developed automated checkout, role-based access control, and a smooth order processing flow.</p>
                            <h2><strong>Tech Stack: </strong> NestJS, PostgreSQL, Next.js | <strong> Payment Gateway:</strong> Converge Pay</h2>
                            <h2><strong>Role: </strong> Backend Developer + Team Lead</h2>
                        </div>
                        <div>
                            <h1><strong>💄 Rose & Rabbit (Cosmetic E-commerce Platform)</strong></h1>
                            <h2><strong>Company: </strong> Glasier Inc.</h2>
                            <p>Developed an e-commerce solution tailored for cosmetic products. Implemented features like dynamic product listing, checkout, order management, cancellation, and refunds. Focused on modular, scalable architecture with secure and user-friendly design.</p>
                            <h2><strong>Tech Stack: </strong> NestJS, PostgreSQL, Next.js | <strong> Payment Gateway:</strong> Razorpay</h2>
                            <h2><strong>Role: </strong> MERN Stack Developer + Team Lead</h2>
                        </div>
                        <div>
                            <h1><strong>🐟 Ambar Fish (Fresh Fish E-commerce Platform)</strong></h1>
                            <h2><strong>Company: </strong> Glasier Inc.</h2>
                            <p>Designed and developed an online store for fresh fish sales with dynamic cutting style selection, inventory tracking, and real-time order management. Built scalable infrastructure with customizable product configurations and secure transactions.</p>
                            <h2><strong>Tech Stack: </strong> NestJS, PostgreSQL, Next.js | <strong> Payment Gateway:</strong> Barclaycard  </h2>
                            <h2><strong>Role: </strong> MERN Stack Developer + Team Lead</h2>
                        </div>
                        <div>
                            <h1><strong>🏦 Bhavani EXCH (Banking & Balance Management System)</strong></h1>
                            <h2><strong>Company: </strong> WRT InfoTech</h2>
                            <p>Created a role-based banking platform for Admins, Managers, and Traders. The application supported bank account management, deposits, withdrawals, and transaction tracking with status-based filtering and secure module access.</p>
                            <h2><strong>Tech Stack: </strong> Node.js, MongoDB, React.js</h2>
                            <h2><strong>Role: </strong> MERN Stack Developer</h2>
                        </div>
                        <div>
                            <h1><strong>🛍️ Shopify Web (Custom E-commerce Platform)</strong></h1>
                            <h2><strong>Company: </strong> Globalia Soft</h2>
                            <p>Built a Shopify-style e-commerce application with core features like customer registration, product listing, and streamlined order placement. Provided an efficient backend for merchants and an intuitive frontend for customers.</p>
                            <h2><strong>Tech Stack: </strong>Node.js, Knex.js, MongoDB, React.js</h2>
                            <h2><strong>Role: </strong> MERN Stack Developer</h2>
                        </div>
                    </div>

                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="section-animate">
                <div className="m-5 sm:m-10 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                        <div>
                            <img
                                src="./Images/contact.jpg"
                                alt="About Me"
                                className="w-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-title mb-4">Contact Me</h2>
                            <p>I'm always open to discussing new projects, collaboration opportunities, or freelance work. Whether you have an idea you'd like to bring to life or just want to connect, feel free to reach out! You can contact me via email or through the form below — I'll get back to you as soon as possible.</p>
                            <ul className="space-y-4 text-lg py-3">
                                <li className="flex items-center gap-3">
                                    <span className="text-xl">📞</span>
                                    <a href="tel:+919512809594">+91 95128 09594</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-xl">🌐</span>
                                    <span>https://portfolio-harshita-five.vercel.app/</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-xl">📧</span>
                                    <a href="mailto:harshita.korat@gmail.com">harshita.korat@gmail.com</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-xl">💼</span>
                                    <a href="https://www.linkedin.com/in/harshita-korat" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-xl">📍</span>
                                    <span>Surat, Gujarat, India</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Thank you */}
            <section className="bg-gray-100 section-animate" id="thankyou">
                <div className="m-5 sm:m-10 text-center">
                    <h6 className="text-4xl md:text-5xl font-bold text-title mb-4">Thank You!</h6>
                    <p>Thank you for taking the time to explore my portfolio. I truly appreciate your interest in my work and journey as a MERN Stack Developer. I’m passionate about building meaningful, user-focused applications and always eager to take on new challenges. If my experience aligns with your goals, I’d love to connect and collaborate.</p>
                </div>
            </section>
        </main>
    );
}

export default Home;
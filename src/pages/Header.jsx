import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import "../styles/header.css";

function Header() {

    const [activeSection, setActiveSection] = useState("home");

    const buttonsRef = useRef({});

    const [pill, setPill] = useState({
        left: 0,
        width: 0
    });


    useEffect(() => {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {

            const visibleSections = entries.filter(
                (entry) => entry.isIntersecting
            );

            if (visibleSections.length > 0) {

                const currentSection = visibleSections.reduce(
                    (closest, section) => {

                        const closestDistance = Math.abs(
                            closest.boundingClientRect.top
                        );

                        const currentDistance = Math.abs(
                            section.boundingClientRect.top
                        );

                        return currentDistance < closestDistance
                            ? section
                            : closest;

                    }
                );

                setActiveSection(currentSection.target.id);
            }
        },
        {
            threshold: 0,
            rootMargin: "-100px 0px -60% 0px"
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });

    return () => {
        observer.disconnect();
    };

}, []);


    useEffect(() => {

        const button = buttonsRef.current[activeSection];

        if (!button) return;

        setPill({
            left: button.offsetLeft,
            width: button.offsetWidth
        });

    }, [activeSection]);


    const scrollToSection = (id) => {

        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        });

    };


    return (
        <div className="header">

            <img
                src={logo}
                alt="Paila Pilates"
                className="logo"
            />

            <div className="r">

                <div className="slider">

                    <div
                        className="slider-pill"
                        style={{
                            left: pill.left,
                            width: pill.width
                        }}
                    />

                    <button
                        ref={(el) => buttonsRef.current.home = el}
                        className={activeSection === "home" ? "active" : ""}
                        onClick={() => scrollToSection("home")}
                    >
                        Home
                    </button>

                    <button
                        ref={(el) => buttonsRef.current.about = el}
                        className={activeSection === "about" ? "active" : ""}
                        onClick={() => scrollToSection("about")}
                    >
                        About
                    </button>

                    <button
                        ref={(el) => buttonsRef.current.studio = el}
                        className={activeSection === "studio" ? "active" : ""}
                        onClick={() => scrollToSection("studio")}
                    >
                        Studio
                    </button>

                    <button
                        ref={(el) => buttonsRef.current.location = el}
                        className={activeSection === "location" ? "active" : ""}
                        onClick={() => scrollToSection("location")}
                    >
                        Location
                    </button>

                    <button
                        ref={(el) => buttonsRef.current.contact = el}
                        className={activeSection === "contact" ? "active" : ""}
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact
                    </button>

                </div>

                <button className="b">
                    Book
                </button>

            </div>
        </div>
    );
}

export default Header;
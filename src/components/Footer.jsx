import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaSteam,
} from "react-icons/fa";

const links = [
    {
        key: 1,
        href: "https://github.com",
        icon: <FaGithub />,
    },
    {
        key: 2,
        href: "https://linkedin.com",
        icon: <FaLinkedin />,
    },
    {
        key: 3,
        href: "https://instagram.com",
        icon: <FaInstagram />,
    },
    {
        key: 4,
        href: "https://store.steampowered.com",
        icon: <FaSteam />,
    },
];

const Footer = () => {
    return (
        <footer className="w-screen bg-violet-300 text-black py-4">
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4 items-center justify-between">
                <p className="font-circular-web text-sm text-center md:text-left">
                    &copy; {new Date().getFullYear()} Venomyzer. All rights reserved.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                    {links.map((item) => (
                        <a
                            key={item.key}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-white transition-colors duration-300 ease-in-out"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
                <a href="#privacy-policy" className="font-circular-web text-center text-sm md:text-right privacy-policy-btn">
                    Privacy Policy
                </a>
            </div>
        </footer>
    )
}
export default Footer

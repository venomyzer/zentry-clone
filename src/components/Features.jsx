import {TiLocationArrow} from "react-icons/ti";
import {useRef, useState} from "react";

export const BentoTilt = ({ children, className = "" }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!itemRef.current) return;

        const { left, top, width, height } =
            itemRef.current.getBoundingClientRect();

        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle("");
    };


    return (
        <div
            ref={itemRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    );
}

export const BentoCard = ({src, title, description}) => {
    return (
        <div className="relative size-full overflow-hidden">
            <video src={src} autoPlay loop muted className="absolute top-0 left-0 size-full object-cover object-center"/>
            <div className="relative z-10 flex flex-col justify-between size-full p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">
                        {title}
                    </h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

const Features = () => {
    return (
        <section className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="font-circular-web text-lg text-blue-50">
                        Into the Metagame Layer
                    </p>
                    <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                        Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world.
                    </p>
                </div>

                <BentoTilt className="border-hsla relative mb-7 h-96 md:h-[65vh] w-full rounded-md overflow-hidden">
                    <BentoCard
                        src="videos/feature-1.mp4"
                        title={<>radia<b>n</b>t</>}
                        description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
                    />
                </BentoTilt>
                <div className="grid grid-cols-2 grid-rows-3 h-[135vh] gap-7">
                    <BentoTilt className="bento-tilt_1 row-span-1 col-span-2 md:col-span-1 md:row-span-2">
                        <BentoCard
                            src="videos/feature-2.mp4"
                            title={<>Zig<b>m</b>a</>}
                            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_1 ms-24 md:ms-0 row-span-1 col-span-2 md:col-span-1">
                        <BentoCard
                            src="videos/feature-3.mp4"
                            title={<>N<b>e</b>xus</>}
                            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_1 me-24 md:me-0 row-span-1 col-span-2 md:col-span-1">
                        <BentoCard
                            src="videos/feature-4.mp4"
                            title={<>Az<b>u</b>l</>}
                            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_2">
                        <div className="flex flex-col size-full justify-between bg-violet-500 p-5">
                            <h1 className="bento-title max-w-64">More Coming Soon!</h1>
                            <TiLocationArrow className="m-5 scale-[5] self-end" />
                        </div>
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_2">
                        <video
                            src="videos/feature-5.mp4"
                            loop muted autoPlay
                            className="size-full object-cover object-center"
                        />
                    </BentoTilt>
                </div>
            </div>
        </section>
    )
}
export default Features

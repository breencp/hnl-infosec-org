// import React from "react";

const Home = () => {
    return (
        <div
            className="h-screen w-screen flex flex-col justify-center items-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/wallpaper_3072x1920.jpg')",
            }}
        >
            <div className="bg-black bg-opacity-50 p-6 rounded-2xl text-center">
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-8">
                    Honolulu Cybersecurity Practitioners
                </h1>
                <div className="flex flex-col items-center">
                    <img
                        src="/images/signal-app-qr.png"
                        alt="Signal QR Code"
                        className="w-40 h-40 md:w-60 md:h-60 rounded-lg shadow-lg mb-4"
                    />
                    <a
                        href="https://signal.group/#CjQKIHJgmxLMxLrk6nKs8aQC9Yrfqnip4CnStM4FoPz6XeGrEhD73Gek0P0GK1-9Y2CZUGrL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline text-lg md:text-xl hover:text-blue-300"
                    >
                        Click here to join the Signal group
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;

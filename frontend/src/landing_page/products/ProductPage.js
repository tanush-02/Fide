import LeftSection from "./LeftSection.js"
import RightSection from "./rightSection.js";

function ProductPage() {
    return ( 
        <>
            
            <div className="row text-center mt-3 mb-7 ">
                <h2> Kisaan Equipment Platform </h2>
                <p> Sleek, Modern , Intuitive Renting Platform </p>
                <p> Check more <a href=""> investment offers -</a></p>
            </div>
            
            <LeftSection 
            imageUrl="https://www.aajjo.com/product/all-agriculture-implements-in-jaipur-rbd-machine-tools-pvt-ltd
"
            productName="Fidelite"
            description="Experience a sleek, modern, and intuitive trading platform designed for both new and experienced investors. Our platform offers advanced trading tools, real-time data, and a user-friendly interface to help you make informed investment decisions. Join us today and take your trading to the next level with Fidelity's cutting-edge technology and comprehensive support."
            link="/"
            imageStyle={{ maxWidth: "250px", objectFit: "contain" }}
            />

            <RightSection
            imageUrl="https://www.tradeindia.com/products/highly-durability-and-strong-blue-tractor-cultivator-machine-for-agricultural-use-7625613.html"
            productName="Coin"
            description={"Coin is a digital currency platform that allows you to buy, sell, and manage your cryptocurrency investments with ease. With a user-friendly interface and robust security features, Coin makes it simple to navigate the world of digital assets. Whether you're a beginner or an experienced trader, Coin provides the tools you need to succeed in the crypto market."}
            link="/"
            />

            <LeftSection
            imageUrl="https://www.moglix.com/kisankraft-18l-1a-battery-sprayer-kk-bbs-185/mp/msn457m6podn9j?s_kwcid=AL!10177!3!330032743408!b!!g!!&utm_source=google_shopping&utm_medium=seo&utm_network=google_freelisting&srsltid=AfmBOor5nu8YxmerjzSx307h_uKr2V6EunYK-q1YGWdAf1dN15EEQE5Pv5k"
            productName="Console"
            description={"Stock is a comprehensive trading platform that offers a wide range of investment options, including stocks, ETFs, and mutual funds. With advanced charting tools, real-time market data, and personalized investment strategies, Stock empowers you to make informed decisions and optimize your portfolio. Whether you're a seasoned investor or just starting out, Stock provides the resources you need to achieve your financial goals."}
            link="/"
            />

            <RightSection
            imageUrl="https://www.moglix.com/shwarya-52cc-heavy-type-2-mini-tiller-cultivator-1030799/mp/msno5wn74z7w51?srsltid=AfmBOorrR10lIAezn0OmDT47cPICEnt6fQlWGRlq9UIjMdYth6NWYRAm0uI"
            productName="Api"
            description={"API is a powerful tool that allows developers to integrate and interact with various software applications and services. With a robust set of features and functionalities, API enables seamless communication between different systems, facilitating data exchange and automation. Whether you're building a web application, mobile app, or any other software solution, API provides the flexibility and scalability needed to enhance your development process."}
            link="/"
            />
        </>
    )
}

export default ProductPage;
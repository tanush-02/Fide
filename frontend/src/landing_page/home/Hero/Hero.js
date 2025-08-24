function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/hero.png"
          alt="Hero Image"
          className="mb-5 d-block mx-auto img-fluid"
            style={{ width: "100%" }}
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button
          className="p-2 btn btn-outline-success fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          href="/signup"
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
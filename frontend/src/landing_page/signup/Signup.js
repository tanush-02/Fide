function Signup() {
  const handleGetOtpClick = () => {
    // Redirect to dashboard running on localhost:3001
    window.location.href = "http://localhost:3001";
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center mb-5">
        <h3>Open a free Demat and Trading Account today</h3>
        <p className="mt-3">
          Invest in stocks, derivatives, mutual funds, and more
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 col-6">
          <img
            src="media/images/signup.png"
            alt="Signup Image"
            className="img-fluid d-block mx-auto mb-5"
            style={{ width: "100%", maxWidth: "500px" }}
          />
        </div>

        <div className="col-md-6 col-6">
          <form>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter mobile number"
              />
            </div>

            <button
              type="button"
              className="btn btn-success w-50"
              onClick={handleGetOtpClick}
            >
              Get OTP
            </button>

            <br />
            <p className="mt-3 text-muted">
              By clicking on "Get OTP", you agree to our{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                Privacy Policy
              </a>.
            </p>
            <p className="text-muted">
              We will never spam you or share your details with anyone.
            </p>
            <p className="text-muted">
              Already have an account?{" "}
              <a href="/login" style={{ textDecoration: "none" }}>
                Login
              </a>
            </p>
          </form>
        </div>
      </div>

      <div className="row text-center mt-5">
        <h3 className="text-muted">Investment options with Fidelity</h3>
        <div className="d-flex justify-content-center mx-auto">
          <img
            src="media/images/stocks.png"
            alt="Stocks"
            className="img-fluid col-10"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;

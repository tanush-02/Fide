function Pricing() {
    return ( 
        <div>
            <div className="container p-5 mb-5">
                <div className="row text-center">
                    <h1 className="mt-5">Pricing Plans</h1>
                    <p>Choose a plan that suits your investment needs</p>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Basic Plan</h5>
                                <p className="card-text">$10/month</p>
                                <ul className="list-unstyled">
                                    <li>Access to basic features</li>
                                    <li>Email support</li>
                                    <li>Community access</li>
                                </ul>
                                <button className="btn btn-success">Choose Plan</button>                
        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Pro Plan</h5>
                                <p className="card-text">$30/month</p>
                                <ul className="list-unstyled">
                                    <li>Access to all features</li>
                                    <li>Priority support</li>
                                    <li>Advanced analytics</li>
                                </ul>
                                <button className="btn btn-success">Choose Plan</button>                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Enterprise Plan</h5>
                                <p className="card-text">$100/month</p>
                                <ul className="list-unstyled">
                                    <li>All Pro features</li>
                                    <li>Dedicated account manager</li>
                                    <li>Custom solutions</li>
                                </ul>
                                <button className="btn btn-success">Choose Plan</button>                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Pricing ;
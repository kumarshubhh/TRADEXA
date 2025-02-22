import React from 'react';

function CreateTicket() {
    const sections = [
        {
            title: "Account Opening",
            icon: "fa-circle-plus",
            links: ["Getting started", "Online", "Offline", "Charges", "Company, Partnership and HUF", "Non Resident Indian (NRI)"]
        },
        {
            title: "Your Zerodha Account",
            icon: "fa-user-large",
            links: ["Login credentials", "Your Profile", "Account modification and segment addition", "CMR & DP ID", "Nomination", "Transfer and conversion of shares"]
        },
        {
            title: "Trading and Markets",
            icon: "fa-chart-simple",
            links: ["Trading FAQs", "Kite", "Margins", "Product and order types", "Corporate actions", "Kite features"]
        },
        {
            title: "Funds",
            icon: "fa-folder",
            links: ["Fund withdrawal", "Adding funds", "Adding bank accounts", "eMandates"]
        },
        {
            title: "Console",
            icon: "fa-terminal",
            links: ["IPO", "Portfolio", "Funds statement", "Profile", "Reports", "Referral program"]
        },
        {
            title: "Coin",
            icon: "fa-chart-simple",
            links: ["Understanding mutual funds and Coin", "Coin app", "Coin web", "Product and order types", "Transactions and reports", "National Pension Scheme (NPS)"]
        }
    ];

    return (
        <div className="container">
            <div className="row">
                <h1 className='fs-4 text-muted text-center'>
                    To create a ticket, select a relevant topic
                </h1>

                {sections.map((section, index) => (
                    <div key={index} className="col-md-4 col-sm-6 col-12 mt-4">
                        <h4>
                            <i className={`fa-solid ${section.icon}`}></i> {section.title}
                        </h4>
                        {section.links.map((link, i) => (
                            <a key={i} style={{ textDecoration: "none", lineHeight: "2", display: "block" }} href="#">
                                {link}
                            </a>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CreateTicket;

import React from "react";

function Quote() {
    return (
        <section className="card quote-card parallax pageBottom">
            <div className="card-header glowBox">
                Favorite Quote
            </div>
            <div className="card-body glowBox">
                <blockquote className="blockquote mb-0">
                    <p>"Just because something doesn’t do what you planned it to do doesn’t mean it’s useless."</p>
                    <footer className="blockquote-footer">Thomas Edison
                    </footer>
                </blockquote>
            </div>
            <span id="portfolio"></span>
        </section>
    );
}

export default Quote;



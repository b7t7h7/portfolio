import React from "react";
import Card from "../Card";

function Portfolio(props) {
    return(
      <main className="container">
        {props.attrPortCardArr.map(portRow => (
            <section className="row">
                {portRow.row.map(portCard => (
                        <Card cardData={portCard}>
                        </Card>
                    ))}
            </section>
        ))}
      </main>

    );
}

export default Portfolio;
import { useState } from "react";
import { quotesDB } from "./quotes"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

function GenerateQuote() {
    const [quoteIndex, setQuoteIndex] = useState(5)

    const changeQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotesDB.length)
        setQuoteIndex(randomIndex)
    }

    return (
        <div style={{ margin: "auto", display: "flex", width: "40%" }}>
            <Card
                style={{
                    width: '18rem'
                }}
            >
                <img
                    alt="Sample"
                    height="300px"
                    style={{ width: "100%" }}
                    src={quotesDB[quoteIndex].img}
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {quotesDB[quoteIndex].author}
                    </CardTitle>

                    <CardText>
                        {quotesDB[quoteIndex].text}
                    </CardText>
                    <Button onClick={changeQuote} color='info' block={true} disabled>
                        Generate new quote
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default GenerateQuote;


// wind shift+alt down arrow
// mac: shift+alt down arrow
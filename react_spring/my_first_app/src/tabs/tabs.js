import { useState } from "react";
import { cities } from './data'
import IndividualTab from './individualTab'

function Tabs() {
    const [active, setActive] = useState(1)

    const handleTabChange = (cityId) => {
        setActive(cityId)
    }

    const filteredTextObject = cities.filter(city => city.id === active)

    return (
        <div style={{ width: "20%", border: '1px solid black', display: "flex", flexDirection: "column", margin: "auto", padding: "7px" }}>
            <ul className="nav nav-pills">
                {
                    cities.map(city => {
                        const isActive = city.id === active ? "nav-link active" : 'nav-link'
                        return (

                            <IndividualTab handleTabChange={handleTabChange} isActive={isActive} city={city} />

                        )
                    })
                }
            </ul >
            <div>{filteredTextObject[0].information}</div>
        </div>
    )
}

export default Tabs;


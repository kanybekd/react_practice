function IndividualTab({ isActive, handleTabChange, city }) {
    return (
        <li className="nav-item" key={city.id} onClick={() => handleTabChange(city.id)}>
            <a className={isActive} href="#"  >{city.name}</a>
        </li>
    )
}

export default IndividualTab;
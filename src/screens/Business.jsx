import BusinessNews from '../components/BusinessNews'

const Business = ({business}) => {
    // console.log("BUSINESS PROPS", business[0])
    return (
        <div>
            {business.map((el, id) => {
                return <BusinessNews news={el} id={id} />
            })}
        </div>
    )
}

export default Business;
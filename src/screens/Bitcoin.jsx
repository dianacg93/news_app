import BitcoinNews from '../components/BitcoinNews'

const Bitcoin = ({bitcoin}) => {

    return (
        <div>
            {bitcoin.map((el, id)=> {
                return <BitcoinNews bitcoin={el} id={id}/>
            })}
        </div>
    )
}

export default Bitcoin;
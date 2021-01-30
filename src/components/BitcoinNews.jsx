import moment from 'moment';

const BitcoinNews = ({bitcoin, id}) => {

    const time = moment(bitcoin.publishedAt)
    console.log(time)
    console.log(time._d)

    console.log("BUSINESS PROPS", bitcoin)
    return (
        <div className="news-container">
            <h3>{bitcoin.title}</h3>
            {bitcoin.author ? <p>Author: {bitcoin.author}</p> : ""}
            {bitcoin.source.name ? <p>{bitcoin.source.name}</p> : ""}
            <p>{time}</p>
        </div>
    )
}

export default BitcoinNews;
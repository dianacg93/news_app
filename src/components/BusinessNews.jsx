const BusinessNews = ({news, id}) => {
    // console.log("BUSINESS PROPS", news)
    return (
        <div key={id} className="news-container">
            <a href={news.url}><h3>{news.title}</h3></a>
            {news.urlToImage ? <img src={news.urlToImage} alt="news" height="200px"/> : ""}
            {news.author ? <p>By: {news.author}</p> : ""}
            <p>{news.description}</p>

        </div>
    )
}

export default BusinessNews;
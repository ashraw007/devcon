import React, { Component } from "react";

class NewsGrid extends Component {
    state = {
        news: [],
        loading: true
    };

    componentDidMount() {
        fetch(
            `https://gnews.io/api/v4/search?q=artificial%20intelligence&lang=en&max=6&apikey=65449bcaba1fe00e1341e3a37b0573fe`
        )
            .then(res => res.json())
            .then(data => {

                this.setState({
                    news: data.articles || [],
                    loading: false
                });

            })
            .catch(err => {
                console.log(err);

                this.setState({
                    news: [],
                    loading: false
                });
            });
    }

    render() {
        const { news, loading } = this.state;

        if (loading) {
            return <h4 className="text-white mt-5">Loading News...</h4>;
        }
        if (!news.length) {

            return (
                <div className="mt-5">
                    <h2 className="text-white mb-4">Latest AI & Tech News</h2>

                    <div className="news-grid">
                        {news.map(article => (
                            <div className="news-card" key={article.url}>
                                <img
                                    src={
                                        article.urlToImage ||
                                        "https://via.placeholder.com/400x200"
                                    }
                                    alt=""
                                />

                                <div className="news-body">
                                    <h5>{article.title}</h5>

                                    <p>
                                        {article.description
                                            ? article.description.substring(0, 120)
                                            : ""}
                                    </p>

                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Read More →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    }
}

export default NewsGrid;
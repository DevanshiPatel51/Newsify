import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component"

export default class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = `Newsify : ${this.props.category}`;
  }



  async updateNews() {
    try {
      this.props.setProgress(10);

      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      const data = await fetch(url);

      document.title = `Newsify : ${this.props.category}`
      const parseData = await data.json();

      this.setState({
        articles: parseData.articles,
        totalResults: parseData.totalResults,
        loading: false
      })
      this.props.setProgress(100);

    } catch (error) {
      console.error("Fetch failed:", error);
      this.setState({ loading: false }); // ensure spinner hides on failure
    }
  }

  async componentDidMount() {
    this.updateNews();
  };


  fetchMoreData = async () => {
    if (this.state.articles.length >= this.state.totalResults || this.state.loading) return;

    const nextPage = this.state.page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${nextPage}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });

    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      page: nextPage,
      loading: false
    })
  };



  render() {
    return (
      <>

        <h2 className='text-center' style={{ marginTop: "90px" }}>Newsify's Top {this.props.category}  Headlines </h2>

        {!this.state.loading && this.state.articles.length === 0 && (
          <p className="text-center">Failed to load news articles. Please try again later.</p>
        )}

        {this.state.loading && <Loading />}

        <InfiniteScroll
          dataLength={this.state.articles ? this.state.articles.length : 0}
          next={this.fetchMoreData}
          hasMore={this.state.articles && this.state.totalResults ? this.state.articles.length !== this.state.totalResults : false}
          loader={<Loading />}>

          <div className="container ">

            <div className='row my-5'>
              {this.state.articles && this.state.articles.map((element) => {
                return <div className='col-md-4' key={element.url}>
                  <NewsItem title={element.title ? element.title : " "} description={element.description ? element.description.slice(0, 75) : " "} imgUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} author={element.author} />
                </div>
              })}
            </div>

          </div>

        </InfiniteScroll>
        
      </>
    )
  }
}







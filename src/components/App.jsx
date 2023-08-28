import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import { getImages } from './api';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    showModal: false,
    urlLargeImg: '',
    loadingPage: 1,
    allImagesLoaded: false,
    loader: false
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPage = prevState.loadingPage;
    const nextPage = this.state.loadingPage;

    if (nextQuery !== prevQuery || nextPage !== prevPage) {
      try {
        this.setState({
          loader: true
        });

        const resp = await getImages(nextQuery, nextPage);

        this.setState(prevState => ({
          images:
            nextQuery === prevState.searchQuery
              ? [...prevState.images, ...resp.hits]
              : [...resp.hits],
          allImagesLoaded: resp.totalHits === prevState.images.length + resp.hits.length
        }));
      } catch (error) {
        toast.error(`Something was wrong. Try to refresh the page`);
      } finally {
        this.setState({
          loader: false
        });
      }
    }
  }

  getSearchQuery = query => {
    this.setState({
      searchQuery: query,
      images: [],
      loadingPage: 1
    });
  };

  getLargeImg = url => {
    this.setState({
      urlLargeImg: url
    });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  changeLoadingPage = () => {
    this.setState(prevState => ({
      loadingPage: prevState.loadingPage + 1
    }));
  };

  render() {
    return (
      <>
        {this.state.loader && <Loader />}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.state.urlLargeImg} alt='img' />
          </Modal>
        )}

        <ToastContainer autoClose={3000} />
        <Searchbar getSearchQuery={this.getSearchQuery} />
        <ImageGallery
          images={this.state.images}
          getLargeImg={this.getLargeImg}
          toggleModal={this.toggleModal}
        />
        {this.state.images.length > 0 && !this.state.allImagesLoaded && (
          <Button type='button' onClick={this.changeLoadingPage} />
        )}
      </>
    );
  }
}
import React, { Component } from 'react';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { Wrap, SearchHeader, SearchInput, SearchButton, Image, AddButton, Body } from './ImageGalleryStyles';

class ImageGallery extends Component {
    state = {
        search: '',
        images: [],
        page: 1,
        perPage: 12,
        showMoreBtn: false,
    };

    fetchImages = async (search, page) => {
        try {
            const response = await fetch(
                `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${page}&per_page=${this.state.perPage}&key=43135945-0fa309f6e906fbaa5e36dac33`
            );
            const data = await response.json();
            this.setState((prevState) => ({
                images: [...prevState.images, ...data.hits],
                showMoreBtn: data.totalHits > prevState.perPage * page,
            }));

            if (page === 1) {
                iziToast.success({
                    message: `Вы получили ${data.totalHits} изображений`,
                    position: 'topRight',
                });
            } else if (!this.state.showMoreBtn) {
                iziToast.info({
                    message: `Вы получили все изображения`,
                    position: 'topRight',
                });
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.elements.search.value;
        this.setState({ search }, () => {
            this.fetchImages(search, 1);
        });
    };

    loadMoreImages = () => {
        this.setState((prevState) => ({
            page: prevState.page + 1,
        }), () => {
            this.fetchImages(this.state.search, this.state.page);
        });
    };

    render() {
        const { images, showMoreBtn } = this.state;

        return (
            <Body>
                <SearchHeader>
                    <form onSubmit={this.handleSearch}>
                        <SearchInput name="search" type="text" />
                        <SearchButton type="submit">Search</SearchButton>
                    </form>
                </SearchHeader>

                <Wrap>
                    {images.map(({ id, webformatURL, tags }) => (
                        <Image
                            key={id}
                            src={webformatURL}
                            alt={tags}
                        />
                    ))}
                </Wrap>

                {showMoreBtn && (
                    <AddButton onClick={this.loadMoreImages}>Add more images</AddButton>
                )}
            </Body>
        );
    }
}

export default ImageGallery;
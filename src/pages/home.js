import News from "../components/news";

const HomePage = {
    render() {
        return /* html */`
            <div class="banner">
                <img src="https://gulfoilvietnam.vn/Data/images/Slide/Banner%2011-Manchester.jpg" />
            </div>
            <div class="news">
                ${News.render()}
            </div>
        `;
    },
};
export default HomePage;
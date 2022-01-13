import News from "../components/news";

const HomePage = {
    render() {
        return /* html */`
            <div class="banner">
                <img src="../../image/Banner.jpg" />
            </div>
            <div class="news">
                ${News.render()}
            </div>
        `;
    },
};
export default HomePage;
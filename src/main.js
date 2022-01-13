import Navigo from "navigo";
import Detail from "./pages/detail";
import HomePage from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/signin" : () => {
        print(Signin.render());
    },
    "/signup" : () => {
        print(Signup.render());
    },
    "/about": () => {
        print("About Page");
    },
    "/product": () => {
        print("Product Page");
    },
    "/news/:id": (value) => {
        console.log(value.data.id);
        print(Detail.render(value.data.id));
    },
    
});

router.notFound(() => print("Not Found Page"));

router.resolve();

import routes from "../routes";

export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const getLogin = (req, res) => res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => res.redirect(routes.home)

export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const welcome = (req, res) => res.render("welcome", { pageTitle: "Welcome" });
export const search = (req, res) => res.render("search", { pageTitle: "Search" });
export const shoppingBasket = (req, res) => res.render("shoppingBasket", { pageTitle: "Basket" });
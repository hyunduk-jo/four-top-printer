export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const welcome = (req, res) => res.render("welcome", { pageTitle: "Welcome" });
export const search = (req, res) => res.render("search", { pageTitle: "Search" });
export const shoppingBasket = (req, res) => res.render("shoppingBasket", { pageTitle: "Basket" });
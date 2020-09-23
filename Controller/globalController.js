import routes from "../routes";

export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const getLogin = (req, res) => res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => res.redirect(routes.home)

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
}
export const postJoin = (req, res) => {
  const {
    body: { email, password1, password2, name, phoneNumber }
  } = req;
  if (password1 !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    res.redirect(routes.home);
  }

}

export const welcome = (req, res) => res.render("welcome", { pageTitle: "Welcome" });

export const search = (req, res) => res.render("search", { pageTitle: "Search" });

export const shoppingBasket = (req, res) => res.render("shoppingBasket", { pageTitle: "Basket" });
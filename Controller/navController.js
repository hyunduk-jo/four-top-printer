//Company
export const company = (req, res) => res.render("company", { pageTitle: "Company" });

//Gallery
export const gallery = (req, res) => res.render("gallery", { pageTitle: "3D Gallery" });
export const monthlyFree = (req, res) => res.render("monthlyFree", { pageTitle: "이달의 무료" });
export const monthlyPaid = (req, res) => res.render("monthlyPaid", { pageTitle: "이달의 유료" });

//Community
export const community = (req, res) => res.render("community", { pageTitle: "Community" });

//Rental
export const rental = (req, res) => res.render("rental", { pageTitle: "Rental" });

//Promotion
export const promotion = (req, res) => res.render("promotion", { pageTitle: "Promotion" });

//Magazine
export const magazine = (req, res) => res.render("magazine", { pageTitle: "Magazine" });

//Service Center
export const serviceCenter = (req, res) => res.render("serviceCenter", { pageTitle: "Service Center" });
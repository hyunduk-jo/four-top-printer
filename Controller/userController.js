//const user = (req, res) => res.send("User");
export const findId = (req, res) => res.render("findId", { pageTitle: "Find ID" });
export const findPw = (req, res) => res.render("findPw", { pageTitle: "Find PW" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });
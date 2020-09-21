//const user = (req, res) => res.send("User");
export const findId = (req, res) => res.send("findId", { pageTitle: "Find ID" });
export const findPw = (req, res) => res.send("findPw", { pageTitle: "Find PW" });
export const editProfile = (req, res) => res.send("editProfile", { pageTitle: "Edit Profile" });
export const userDetail = (req, res) => res.send("userDetail", { pageTitle: "User Detail" });
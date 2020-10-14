//Global
const HOME = "/";
const LOGIN = "/login";         // /login
const JOIN = "/join";           // /join
const WELCOME = "/welcome" // /join/welcome
const SEARCH = "/search";

//User
const USER = "/user";
const FIND_ID = "/find-id";     // /user/find_id
const FIND_PW = "/find-pw";     // /user/find_pw
const EDIT_PROFILE = "/edit-profile";
const USER_DETAIL = "/:id";

//Nav
const NAV = "/nav";

//Shopping basket
const SHOPPING_BASKET = "/shopping-basket";

//About Company
const COMPANY = "/company";
//Introduction 
//Greetings 
//Vision
//History Ajax

//3D Gallery
const GALLERY = "/gallery";
const MONTHLY_FREE = "/monthly-free"; // /gallery/monthly-free
const MONTHLY_PAID = "/monthly-paid";

//Community
const COMMUNITY = "/community";
const COMMUNITY = "/community/upload";

//Rental
const RENTAL = "/rental";

//Promotion
const PROMOTION = "/promotion";

//Magazine
const MAGAZINE = "/magazine";

//Service center
const SERVICE_CENTER = "/service-center";


const routes = {
  home: HOME,
  login: LOGIN,
  join: JOIN,
  welcome: WELCOME,
  search: SEARCH,

  user: USER,
  findId: FIND_ID,
  findPw: FIND_PW,
  editProfile: EDIT_PROFILE,
  userDetail: USER_DETAIL,

  nav: NAV,

  shoppingBasket: SHOPPING_BASKET,

  company: COMPANY,

  gallery: GALLERY,
  monthlyFree: MONTHLY_FREE,
  monthlyPaid: MONTHLY_PAID,

  community: COMMUNITY,

  rental: RENTAL,

  promotion: PROMOTION,

  magazine: MAGAZINE,

  serviceCenter: SERVICE_CENTER,
}

export default routes;
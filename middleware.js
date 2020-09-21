export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "Four Top";
  next();
}
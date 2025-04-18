let express = require("express");
let router = express.Router();

// user Routes
let short_urls = controller("Api/ETURLController");
let indetification = controller("Api/IndetificationController");


router.get("/:short_code", [], (req, res) => {
  return short_urls.redirectoShortLink(req, res);
});

router.post("/identity",[], (req, res) => {
  return indetification.VisitorIdentityVerification(req, res);
});

module.exports = router;

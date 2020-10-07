const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const tenants = require("./tenants.json");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 8080;

const router = express.Router(); 

router.get("/:tenant", function(req, res) {
  const tenant = tenants.filter(_tenant => _tenant.tenant == req.params.tenant);
  res.json(tenant);
});

// all of our routes will be prefixed with /api
app.use("/api", router);

app.listen(port);

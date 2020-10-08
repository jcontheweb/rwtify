const express = require('express')
const cors = require('cors')
const app = express();
const bodyParser = require("body-parser");
const tenants = require("./tenants.json");

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 8080;

const router = express.Router(); 

// functions
const getTenantByName = (name) => tenants.filter(tenant => tenant.tenant == name)[0]

router.get("/:tenant", (req, res) => {
  const tenant = getTenantByName(req.params.tenant)
  res.json(tenant);
});

router.post('/:tenant/page_authorization', (req, res) => {
  const tenant = getTenantByName(req.params.tenant)

  if (tenant.password == req.body.password) {
    res.status(200).json({
      message: "authorized"
    })
  } else {
    res.status(401).json({
      message: "unauthorized"
    })
  }
})

// all of our routes will be prefixed with /api
app.use("/api", router);

app.listen(port);

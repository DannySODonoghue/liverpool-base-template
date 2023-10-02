const { Router } = require('express')
const router = Router()

const index = {
  logo: "assets/images/liverpool-logo.jpeg",
  image: "assets/images/anfield.jpeg",
  home: "",
  fixtures: "",
  tickets: "",
  other: ""
}

router.get('/', (req, res, next) => {
  res.render('index', index)
})

module.exports = router

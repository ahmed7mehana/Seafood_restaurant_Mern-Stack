const { GetAllusers, GetuserProfile, DeluserProfile, UpdateUserProfile, GetMymealUsers, makeMeAdmin, RemoveMeAdmin } = require("../controllers/userControiier")
const { TAdmin } = require("../middleware/verifyToken")

const router = require("express").Router()


router.route("/")
        .get(GetAllusers)


// /api/user/profile/
router.route("/profile/:id")
        .get(GetuserProfile)
        .put(UpdateUserProfile)
        .delete(DeluserProfile)

// /api/user/makeMeAdmin/
router.route("/makeMeAdmin/:id").put(makeMeAdmin)

// /api/user/RemoveMeAdmin/
router.route("/RemoveMeAdmin/:id").put(RemoveMeAdmin)



module.exports = router
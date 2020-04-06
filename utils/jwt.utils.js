//Imports

var jwt = require('jsonwebtoken');
const JWT_SIGN_SECRET = 's5sd1qz5s1d18z11j1l61gdy1189gr1gfdw94v1bd156vfd1ùpmmui'

// Exported Functions
module.exports= {
    generateTokenForUser: function(userData){
        return jwt.sign({
            userId: userData.id,
            isAdmin: userData.isAdmin
        },
            JWT_SIGN_SECRET,
            {
                expiresIn: '1h'
            })
    }
}
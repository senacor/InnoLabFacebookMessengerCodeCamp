const ApiBuilder = require('claudia-api-builder')
const AWS = require('aws-sdk')
// You will need this: const db = require('./db')

AWS.config.update({ region: 'eu-central-1' })

const api = new ApiBuilder({ mergeVars: true })

/**
 * Finds user by request data; checks pw; creates and saves auth code and returns with auth code
 * @param {Object} req HTTP request object
 * @returns Promise.<{{authorizationCode: String}|{error: String}}> resolves with an object containing the authorization code or an error message
 */
const userLogin = req => {
    let data
    try {
        data = JSON.parse(req.body)
    } catch (e) {
        return JSON.stringify({ error: 'Could not parse payload' })
    }

    // ATTENTION: Logs password to log files!
    console.log(`Running userLogin with ${JSON.stringify(data)}`)

    /**
     * TODO
     * 1. Find user
     * 2. Check password (use simple sha1 encryption, or even plain text)
     * 3. Set a (random) authorization code
     * 4. Return authorization code as json: {authorizationCode: <random_code>}
     */
}

api.post('/', req => userLogin(req))
module.exports = api

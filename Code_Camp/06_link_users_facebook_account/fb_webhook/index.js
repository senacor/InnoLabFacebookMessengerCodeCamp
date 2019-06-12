const objectPath = require('object-path')
const requestHttp = require('request')
const ApiBuilder = require('claudia-api-builder')

const api = new ApiBuilder({ mergeVars: true })
// You will need this: const db = require('./db')

/**
 * Reads authorization token from request, reads user by authorization token from db, sets psid and removes authorization code
 *
 * @param {Object} request HTTP request object
 * @returns Promise.<{null}> resolves if user is linked
 */
const linkAccount = request => {
    console.log('Received linking event:', JSON.stringify(request))

    /**
     * TODO
     * 1. Verify authorization code is available
     * 2. Read user by authorization code from db
     * 3. Set psid to user at db
     * 4. Remove authorization code from db
     */
}

/**
 * Reads user from db by psid and removes Facebook connection at db
 *
 * @param {Object} request HTTP request object
 * @returns Promise.<{null}> resolves if user is unlinked
 */
const unlinkAccount = request => {
    console.log('Received unlinking event:', JSON.stringify(request))

    /**
     * TODO
     * 1. Read user by psid from request from db
     * 2. Remove psid from db
     */
}

/**
 * This method calls Dialogflow or runs (un-)link routines, based on the Facebook request
 *
 * @param {Object} req HTTP request object
 * @returns Promise.<{*}> Promise resolves if (un-)linking process is done or Dialogflow was called
 */
const facebookEventHandler = req => {
    console.log('Running facebookEventHandler')

    const bodyEntryHandlers = objectPath
        .get(req, 'body.entry', [])
        .map(entry => {
            const messageHandlers = objectPath
                .get(entry, 'messaging', [])
                .map(messaging => {
                    // 1) Event sent by Facebook after account linking
                    if (
                        objectPath.get(messaging, 'account_linking.status') ===
                        'linked'
                    ) {
                        console.log('Calling linkAccount')
                        return linkAccount(messaging)
                        // 2) Event sent by Facebook after account unlinking
                    } else if (
                        objectPath.get(messaging, 'account_linking.status') ===
                        'unlinked'
                    ) {
                        console.log('Calling linkAccount')
                        return unlinkAccount(messaging)
                        // 3) Anything else we don't care about
                    } else {
                        return new Promise(resolve => {
                            // Better catch both you never know.
                            // May the devil with those who use other capitalization.
                            delete req.headers.Host
                            delete req.headers.host

                            requestHttp.post(
                                objectPath.get(req, 'env.dialogflow_webhook'),
                                {
                                    headers: req.headers,
                                    body: JSON.stringify(req.body)
                                },
                                () => resolve()
                            )
                        })
                    }
                })

            return Promise.all(messageHandlers)
        })

    return Promise.all(bodyEntryHandlers)
}

/**
 * This method handles initial webhook connection calls from Facebook.
 * It compares the sent verify token with the local one and returns the challenge sent by Facebook if successful or 400 if not successful.
 *
 * @param {Object} req HTTP request object
 * @returns {Object} Claudia.js api response
 */
const initialFacebookConnectionHandler = req => {
    console.log('Running initialFacebookConnectionHandler')

    if (
        objectPath.get(req, ['queryString', 'hub.verify_token']) ===
        objectPath.get(req, 'env.facebook_verify_token')
    ) {
        console.log('Passed validation')
        return parseInt(req.queryString['hub.challenge'])
    }

    console.log('Did not passed validation')
    return new api.ApiResponse(
        'Did not passed validation',
        { 'Content-Type': 'text/plain' },
        400
    )
}

api.post('/webhook', facebookEventHandler)
api.get('/webhook', initialFacebookConnectionHandler)

module.exports = api

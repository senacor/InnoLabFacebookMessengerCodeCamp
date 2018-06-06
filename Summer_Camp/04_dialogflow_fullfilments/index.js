const ApiBuilder = require('claudia-api-builder')
const objectPath = require('object-path')

const api = new ApiBuilder({mergeVars: true})
const name = 'fill_parcel_status'

api.post('/', req => new Promise(resolve => {
    const eventName = objectPath.get(req, 'body.result.resolvedQuery')
	
    // Don't handle your own event!
    if (eventName === name) {
        return resolve({})
    }

    const parameters = objectPath.get(req, 'body.result.parameters')
	
    // TODO Do database operations, find status, etc.
    console.log(JSON.stringify(parameters))
    const status = `a random status ${Math.random()}`
	
    return resolve({
        followupEvent: {
            data: {
                parcel_id: objectPath.get(parameters, 'parcel_id.parcel_id'),
                status
            },
            name
        }
    })
}))

module.exports = api
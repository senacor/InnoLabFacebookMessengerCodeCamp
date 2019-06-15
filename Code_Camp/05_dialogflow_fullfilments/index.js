const ApiBuilder = require('claudia-api-builder')
const objectPath = require('object-path')
const aws = require('aws-sdk')
const DOC = require('dynamodb-doc')

aws.config.update({ region: 'eu-central-1' })
const docClient = new DOC.DynamoDB()

const api = new ApiBuilder({ mergeVars: true })
const name = 'fill_parcel_status'

api.post(
    '/',
    req =>
        new Promise((resolve, reject) => {
            const eventName = objectPath.get(req, 'body.queryResult.queryText')

            // Don't handle your own event!
            if (eventName === name) {
                return resolve({})
            }

            const parameters = objectPath.get(
                req,
                'body.queryResult.parameters'
            )

            const parcelId = objectPath.get(parameters, 'parcel_id.parcel_id')

            // TODO Do database operations, find status, etc.
            console.log(JSON.stringify(parameters))

            const param = {
                TableName: 'code_camp_parcels',
                Key: {
                    parcel_id: parcelId + ''
                }
            }

            console.log(JSON.stringify(param))

            docClient.getItem(param, (err, res) => {
                if (err) {
                    console.log(err)
                    return reject(err)
                }

                if (res.Item.status) {
                    resolve({
                        followupEventInput: {
                            parameters: {
                                parcel_id: parcelId,
                                status: res.Item.status
                            },
                            name
                        }
                    })
                } else {
                    resolve({
                        followupEventInput: {
                            parameters: {
                                parcel_id: parcelId,
                                status: 'Unbekannt'
                            },
                            name
                        }
                    })
                }
            })
        })
)

module.exports = api

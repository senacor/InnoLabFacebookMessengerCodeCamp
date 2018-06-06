const DOC = require('dynamodb-doc')
const AWS = require('aws-sdk')

AWS.config.update({region: 'eu-central-1'})
const docClient = new DOC.DynamoDB()

module.exports = {
    /**
     * Finds user from our dynamo db by email
     * Rejects if no or to many users found or if db returns error
     * @param {String} email 
     * @returns Promise.<{Object}> resolves with user
     */
    findUser: email => new Promise((resolve, reject) => {
        const query = {
            TableName: 'digital_logistics_customer',
            IndexName: 'email-index',
            KeyConditionExpression: 'email = :hkey',
            ExpressionAttributeValues: {
                ':hkey': email
            }
        }

        docClient.query(query, (err, data) => {
            if (err) {
                return reject(err)
            }

            const users = data.Items

            if (users.length !== 1) {
                return reject(`Unexpected amount (${users.length}) of users for email ${email}`)
            }

            return resolve(users[0])
        })
    }),

    /**
     * Generates random 10 sized string and saves it to as authorization_code to our dynamo db
     * @param {Object} user 
     * @param {String} user.email
     * @param {String} user.customer_id
     * @returns Promise.<{Object}> resolves with an object containing all user's attributes
     */
    setAuthCode: user => new Promise((resolve, reject) => {
        const update = {
            TableName: 'digital_logistics_customer',
            Key: {
                'email': user.email,
                'customer_id': user.customer_id
            },
            UpdateExpression: 'set authorization_code = :r',
            ExpressionAttributeValues: {
                ':r': [...Array(10)].map(() => Math.random().toString(36)[3]).join('') // 10 random chars: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
            },
            ReturnValues: 'ALL_NEW'
        }

        docClient.updateItem(update, (err, data) => {
            if (err) {
                return reject(err)
            }

            return resolve(data)
        })
    })
}
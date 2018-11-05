const AWS = require('aws-sdk')

exports.handler = function (event, context, callback) {

    const documentClient = new AWS.DynamoDB.DocumentClient()

    callback(null, "fella")
}
/* eslint-env mocha */
const lambda = require('../index')
const AWS = require('aws-sdk-mock')
const { expect } = require('chai')
const dynamoResponses  = require('./dynamoResponses.js')

describe('get all to do items test', () => {
    it('should return all to do items', (done) => {

        AWS.mock('DynamoDB.DocumentClient', 'scan', function(params, callback) {
            callback(null, dynamoResponses.response())
        })

        var expected = {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({}, null, 2),
        }

        lambda.handler(null, null, (err, response) => {
            console.log(response)
            expect(expected).to.deep.equal(response)
            done
        })



    })




})
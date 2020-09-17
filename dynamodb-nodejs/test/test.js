const should = require("should");
const dynamodbLocal = require("../MoviesCreateTable.js");
var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-1",
    endpoint: "http://localhost:8000"
});

var dynamodb = new AWS.DynamoDB();
describe("Check Table Operations", function () {
    describe("#create table", function () {
        it("should create a table if not existing", function (done) {

            var params = {
                TableName: "Movies",
                KeySchema: [
                    { AttributeName: "year", KeyType: "HASH" },  //Partition key
                    { AttributeName: "title", KeyType: "RANGE" }  //Sort key
                ],
                AttributeDefinitions: [
                    { AttributeName: "year", AttributeType: "N" },
                    { AttributeName: "title", AttributeType: "S" }
                ],
                ProvisionedThroughput: {
                    ReadCapacityUnits: 10,
                    WriteCapacityUnits: 10
                }
            };

            dynamodb.createTable(params, function (err, data) {
                if (err) {
                    should.not.exist(data);
                } else {
                    should.exist(data);
                    data.TableDescription.should.have.property("TableName", "Movies");
                }
                done();
            });
        });
    });
});
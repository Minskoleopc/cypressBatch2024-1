/// <reference types ="cypress"/>

describe('verify the API request ', function () {

    it('GET', function () {
        let found = false
        let expectedValue = "Michael"
        cy.request({
            url: "https://reqres.in/api/users?page=2",
            method: "GET"
        })
            .then(function (response) {
                //cy.log(response)
                expect(response.status).to.eq(200)
                expect(response.body.per_page).to.eq(response.body.data.length)
                expect(response.body.data[0]).to.have.keys(["id", "email", "first_name", "last_name", "avatar"])
                response.body.data.forEach(element => {
                    if (element.first_name == expectedValue) {
                        found = true
                    }
                });
                response.body.data.forEach(element => {
                    expect(element.id).be.not.null
                    expect(element.first_name).be.not.null
                    expect(element.last_name).be.not.null
                    expect(element.avatar).be.not.null
                    expect(element.email).be.not.null
                });
            })
            .then(function () {
                expect(found).to.eq(true)
            })
        // check whether value of all students data is not null
    })

    it('POST', function () {
        let payload = {
            "name": "morpheus",
            "job": "leader"
        }

        cy.request({
            url: "https://reqres.in/api/users",
            method: "POST",
            body: payload
        })
            .then(function (response) {
                cy.log(response)
                expect(response.status).to.eq(201)
                expect(response.duration).to.be.lte(700)
                expect(response.body).to.have.keys(['name', "job", "createdAt", "id"])
                expect(response.body.name).to.eq(payload.name)
                expect(response.body.job).to.eq(payload.job)
            })
    })

    it('PUT', function () {
        let payload = {
            "name": "chinmay",
            "job": "test automation"
        }
        cy.request({
            url: "https://reqres.in/api/users/2",
            method: "PUT",
            body: payload
        })
            .then(function (response) {
                expect(response.status).to.eq(200)
                expect(response.duration).to.be.lte(600)
                expect(response.body).to.have.keys(['name', "job", "updatedAt"])
                expect(response.body.name).to.eq(payload.name)
                expect(response.body.job).to.eq(payload.job)
            })
    })
    it('Delete User', function () {
        cy.request({
            url: "https://reqres.in/api/users/2",
            method: "DELETE"
        })
            .then(function (response) {
                expect(response.status).to.eq(204)
            })

    })

})
// debugging
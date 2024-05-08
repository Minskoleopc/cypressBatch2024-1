/// <reference types ="cypress"/>

describe('list of users', function () {

    let token = `cd2ac6be51d3e141feb492b0cc0ddd8d3eb8d0bc7da80d1a1ef57ecdd74bf517`
    let id = undefined


    it('list of user', function () {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                "Authorization": "Bearer cd2ac6be51d3e141feb492b0cc0ddd8d3eb8d0bc7da80d1a1ef57ecdd74bf517"
            }
        }).then(function (response) {
            //cy.log(response)
            expect(response.status).to.eq(200)
        })
    })


    // create -------->  id ---------> updateuser --------> delete

    it.only('create update n delet user', function () {

        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `tenali.ramakrishna@15${Math.floor(Math.random() * 10000) + 1}.com`,
                status: "active"
            },
            headers: {
                "Authorization": `Bearer ${token}`
            }

        })
            .then(function (response) {
                cy.log(response)
                expect(response.status).to.eq(201)
                cy.log(response.body.id)
                id = response.body.id
            })
            .then(function () {
                cy.request({
                    method: "PUT",
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    body: {
                        name: "Tenali Ramakrishna",
                        email: `tenali.ramakrishna@15${Math.floor(Math.random() * 10000) + 1}.com`,
                        status: "active"
                    },
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }

                })
                    .then(function (response) {
                        expect(response.status).to.eq(200)
                    })
                    .then(function () {
                        cy.request({
                            method: "DELETE",
                            url: `https://gorest.co.in/public/v2/users/${id}`,
                            headers: {
                                "Authorization": `Bearer ${token}`
                            }

                        })
                            .then(function (response) {
                                expect(response.status).to.eq(204)
                            })



                    })



            })




    })









})
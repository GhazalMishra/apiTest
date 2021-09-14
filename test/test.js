
describe(`test cases for getting  the pet information `, ()=> {


    
   

    testDataList.petData.forEach(testData =>{

        afterEach(async function () {
            addContext(this, {
                title:  `Postal Code used:`,
                value: JSON.stringify(testData.postalCode)
            })

           
    
        })

        it (`Functional Test: Should be able to post to the new pet store -> ${testData.petId}`, async () =>{
            let response = await chai.request(`https://petstore.swagger.io/v2/`).post(`pet?api_key=${testData.api_key}`).send(postRequest)
    
            console.log("Response", response.text)
            expect(response.status).to.be.equal(200);

            var result = JSON.parse(response.text)
            console.log("response post->", result)
           
           
        })
        it (`Functional Test: Should be able to get the pet by id -> ${testData.petId}`, async () =>{
            let response = await chai.request(`https://petstore.swagger.io/v2/`).get(`pet/${testData.petId}`)
            console.log("Response", response.text)
            expect(response.status).to.be.equal(200);

            var result = JSON.parse(response.text)
       
            expect(result.name).to.deep.equal('tommy')
            
           
            console.log("result get->", result)


           
        })

        it (`Functional Test: Should be able to update the existing pet name -> ${testData.petId}`, async () =>{
            let response = await chai.request(`https://petstore.swagger.io/v2/`).put(`pet`).send(putRequest)
            console.log("Response", response.text)
            expect(response.status).to.be.equal(200);

            var result = JSON.parse(response.text)
       
            expect(result.name).to.deep.equal('kumeshu-the great')
            
           
            console.log("result put->", result)

        })

        it (`Functional Test: Should be able to delete an existing pet -> ${testData.petId}`, async () =>{
            let response = await chai.request(`https://petstore.swagger.io/v2/`).delete(`pet/${testData.petId}`)
            console.log("Response", response.text)
            expect(response.status).to.be.equal(200);

            var result = JSON.parse(response.text)
       
           
            
           
            console.log("result delete->", result)

        })
    })
})
    
 



import dynamitcally from '../pageobjects/dynamically.loaded.page.js'


describe('My Login application', () => {
    it('Detect that that there isnt any messaged displayed', async () => {
        await dynamitcally.open()

        await browser.pause(3000)

        //await dynamitcally.strtBttn.click()
        
        await browser.pause(5000)

        let example = false
        let example1 = true 

        //while(await expect (dynamitcally.message).toHaveText('Hello World!')){
            
            //example = true; 
            //console.log(example); 
       // }


        while (await expect (dynamitcally.message).not.toBeDisplayed() ) {

            example1 = false; 
            conosle.log("the h4 is currently not visible"); 
        }


        
    })











})



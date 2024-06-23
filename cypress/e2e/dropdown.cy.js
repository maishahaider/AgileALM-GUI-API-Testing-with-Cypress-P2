describe("Testing with dropdown" , () =>{

    it("Dropdown with different tags" , ()=>{
        cy.visit("https://staging-ecom.techserve4u.com/")

        cy.get('#header > div.main_nav_container > nav.main_nav > div > div.search_wrapper > input').type("Iphone");

        cy.get('#header > div.main_nav_container > nav.main_nav > div > div.search_wrapper > i').click();
        cy.get('#search > div > div > div.col-lg-9.col-md-12 > div.shop_by > div.shop_by_content > div > a').click()

        cy.get(`#product_details > div > div > div.col-md-9.col-sm-12 > div.row.background_white > div.col-md-6.col-sm-12.product_info.mt-3 > div.quantity > span.quantity_field > button:nth-child(3)`).click()
        cy.get(`#product_details > div > div > div.col-md-9.col-sm-12 > div.row.background_white > div.col-md-6.col-sm-12.product_info.mt-3 > div.quantity > span.quantity_field > button:nth-child(3)`).click()
        cy.get(`#product_details > div > div > div.col-md-9.col-sm-12 > div.row.background_white > div.col-md-6.col-sm-12.product_info.mt-3 > div.quantity > span.quantity_field > button:nth-child(3)`).click()

        cy.get('#product_details > div > div > div.col-md-9.col-sm-12 > div.row.background_white > div.col-md-6.col-sm-12.product_info.mt-3 > div.quantity > span.quantity_field > input').should('have.value',4)
    })
}) 
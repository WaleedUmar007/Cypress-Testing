//code to visit the website


beforeEach(()=>{
  cy.on('uncaught:exception',(err,runnable)=>{
    return false
  })
})


// describe('Visit the website', () => {
//   it('passes', () => {
//     cy.visit('http://54.183.24.91/')
//   })


//   it('check resposiveness for s10',()=>{
//     cy.viewport('samsung-s10')
//     cy.scrollTo("bottom",{duration:2000})
//     cy.scrollTo("top",{duration:2000})

//   })

//   it ('close popup',()=>{
//     cy.get('.modal-content').within(()=>{
//       cy.get ('.close').click()
//     })
//   })

  // it('checks all the links if they are working or not',()=>{
  //   cy.get('.kingster-header-container-inner').within(()=>{
  //     cy.get('a').each((link)=>{
  //       cy.request(link.prop('href'))
  //     })
  //   })
  // })

//   it ('Checks if you go to About US when click on it',()=>{
//     cy.visit('http://54.183.24.91/contact.php')
//     cy.url().should('be.equal','http://54.183.24.91/contact.php')
//   })

//   it('Check the window location',()=>{
//     cy.visit('http://54.183.24.91/contact.php')
//     cy.window().then((win) => {
//       console.log(win.location)
//     })
//   })

// })


describe('Login into comsats portal',()=>{
  it('Visit the website',()=>{
    cy.visit('https://cms.comsats.edu.pk:8083')
  })

  it('Takes credentials',()=>{
    cy.get('#MaskedRegNo').type('Fa20-bsi-020').get('#Password').type('29august2002').get('#LoginSubmit').click({force:true})
    
  })

  it('Give email but not password',()=>{
    cy.get('#MaskedRegNo').type('Fa20-bsi-020').get('#Password').type('').get('#LoginSubmit').click({force:true})
    
  })

  it('Give password and not password',()=>{
    cy.get('#MaskedRegNo').type('').get('#Password').type('29august2002').get('#LoginSubmit').click({force:true})
    
  })



})






describe('Actions Page Test Suite', () => {
    beforeEach(() => {
      cy.visit('https://webdriveruniversity.com/Actions/index.html');
    });
  
    it('should drag and drop the draggable item', () => {
      cy.get('#draggable').trigger('mousedown', { which: 1 });
      cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true });
      cy.get('#droppable p').should('have.text', 'Dropped!');
    });
  
    it('should double click the double click me button', () => {
      cy.get('#double-click').dblclick();
      cy.get('#double-click h2').should('have.text', 'Double Click Me');
    });
  
    it('should perform a mouse hover action', () => {
      cy.get('#hover').trigger('mouseover');
      cy.get('#hover h1').should('have.text', 'Mouse Over Me');
    });
  
    it('should perform a click and hold action', () => {
      cy.get('#click-box').trigger('mousedown').trigger('mouseup');
      cy.get('#click-box h1').should('have.text', 'Well done! Keep holding that click now.....');
    });
  
    it('should perform a right click action', () => {
      cy.get('#right-click').rightclick();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Right click menu');
      });
    });
  
    it('should perform a keyboard press action', () => {
      cy.get('body').type('{uparrow}');
      cy.get('#keyPressed').should('have.text', 'UP');
    });
  });
  
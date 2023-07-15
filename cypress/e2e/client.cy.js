describe('full purchase action', () => {
  it('visits main page', () => {
    cy.visit('http://localhost:3000');
  });
  it('go to category page', () => {
    cy.visit('http://localhost:3000');
    cy.contains('All categories').click();
  });
  it('go to category Annuals', () => {
    cy.visit('http://localhost:3000');
    cy.contains('All categories').click();
    cy.contains('Annuals').click();
    cy.get('[data-cy="h1"]').contains('Annuals');
  });
  it('added product to cart from products list', () => {
    cy.visit('http://localhost:3000');
    cy.contains('All categories').click();
    cy.contains('Annuals').click();
    cy.get('[data-cy="h1"]').contains('Annuals');
    cy.get('[data-cy="product 1"]').trigger('mouseover');
    cy.get('[data-cy="addToCartBtn 1"]').click({ force: true });
    cy.get('[data-cy="cartImg"]').click();
    cy.contains('Savannah Summer Annual Collection');
  });
  it('go to product description page', () => {
    cy.visit('http://localhost:3000');
    cy.contains('All categories').click();
    cy.contains('Annuals').click();
    cy.get('[data-cy="h1"]').contains('Annuals');
    cy.get('[data-cy="product 1"]').click();
    cy.get('[data-cy="title"]').contains('Savannah Summer Annual Collection');
  });
  it('added product to cart from product description page', () => {
    cy.visit('http://localhost:3000');
    cy.contains('All categories').click();
    cy.contains('Annuals').click();
    cy.get('[data-cy="h1"]').contains('Annuals');
    cy.get('[data-cy="product 1"]').click();
    cy.get('[data-cy="addToCartBtn"]').click();
    cy.get('[data-cy="cartImg"]').click();
    cy.contains('Savannah Summer Annual Collection');
  });
  it('posted order', () => {
    cy.visit('http://localhost:3000');
    cy.contains('All categories').click();
    cy.contains('Annuals').click();
    cy.get('[data-cy="h1"]').contains('Annuals');
    cy.get('[data-cy="product 1"]').trigger('mouseover');
    cy.get('[data-cy="addToCartBtn 1"]').click({ force: true });
    cy.get('[data-cy="product 2"]').click();
    cy.get('[data-cy="addToCartBtn"]').click();
    cy.get('[data-cy="cartImg"]').click();
    cy.contains('Savannah Summer Annual Collection');
    cy.contains('Angelonia angustifolia Archangel™ White');
    cy.get('[data-cy="phoneInput"]').type('1234567890');
    cy.get('[data-cy="orderBtn"]').click();
    cy.contains(
      'Thank you for the order! Your order has been processed. We will contact you shortly.',
    );
  });
});

describe('submitting coupon request', () => {
  it('coupon request submitted', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy="phoneInput"]').type('1234567890');
    cy.get('[data-cy="getDiscountBtn"]').click();
    cy.contains(
      'Thank you for your request for a discount coupon. The coupon will be sent to the number you specified (1234567890). Expect a message shortly.',
    );
  });
});

describe('product filtering', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/products');
  });
  it('filtered by price', () => {
    cy.get('[data-cy="from"]').wait(1000).click().wait(1000).type(10);

    cy.get('[data-cy="to"]').wait(1000).click().wait(1000).type(50);

    cy.get('[data-testid="product - item"]').each((product) => {
      cy.wrap(product)
        .find('[data-cy="productPrice"]')
        .invoke('text')
        .then(parseFloat)
        .should('be.gte', 10);
      cy.wrap(product)
        .find('[data-cy="productPrice"]')
        .invoke('text')
        .then(parseFloat)
        .should('be.lte', 50);
    });
  });

  it('filtered by available discounted price', () => {
    cy.get('[data-cy="discountFilter"]').wait(1000).click();
    cy.get('[data-testid="product - item"]').each((product) => {
      cy.wrap(product)
        .find('[data-cy="discountPrice"]')
        .invoke('text')
        .then(parseFloat)
        .should('be.greaterThan', 0);
    });
  });

  it('products are sorted in ascending order of price', () => {
    cy.get('[data-cy="sort - type"]').select('priceAscending');
    cy.get('[data-testid="product - item"]')
      .should('have.length.at.least', 2)
      .each((product, index, products) => {
        if (index < products.length - 1) {
          cy.wrap(product)
            .find('[data-cy="productPrice"]')
            .invoke('text')
            .then(parseFloat)
            .then((currentPrice) => {
              cy.wrap(products[index + 1])
                .find('[data-cy="productPrice"]')
                .invoke('text')
                .then(parseFloat)
                .then((nextPrice) => {
                  expect(currentPrice).to.be.at.most(nextPrice);
                });
            });
        }
      });
  });
  it('products are sorted in descending order of price', () => {
    cy.get('[data-cy="sort - type"]').select('priceDescending');
    cy.get('[data-testid="product - item"]')
      .should('have.length.at.least', 2)
      .each((product, index, products) => {
        if (index < products.length - 1) {
          cy.wrap(product)
            .find('[data-cy="productPrice"]')
            .invoke('text')
            .then(parseFloat)
            .then((currentPrice) => {
              cy.wrap(products[index + 1])
                .find('[data-cy="productPrice"]')
                .invoke('text')
                .then(parseFloat)
                .then((nextPrice) => {
                  expect(currentPrice).to.be.at.least(nextPrice);
                });
            });
        }
      });
  });
  it('products are sorted in alphabetical order (A to Z)', () => {
    cy.get('[data-cy="sort - type"]').select('title');
    cy.get('[data-testid="product - item"]')
      .should('have.length.at.least', 2)
      .then((products) => {
        for (let i = 0; i < products.length - 1; i++) {
          const currentName = Cypress.$(products[i])
            .find('[data-cy="productName"]')
            .text();
          const nextName = Cypress.$(products[i + 1])
            .find('[data-cy="productName"]')
            .text();
          expect(currentName.localeCompare(nextName)).to.be.lessThan(0);
        }
      });
  });

  it('products are sorted in alphabetical order (Z to A)', () => {
    cy.get('[data-cy="sort - type"]').select('titleReverse');
    cy.get('[data-testid="product - item"]')
      .should('have.length.at.least', 2)
      .then((products) => {
        for (let i = 0; i < products.length - 1; i++) {
          const currentName = Cypress.$(products[i])
            .find('[data-cy="productName"]')
            .text();
          const nextName = Cypress.$(products[i + 1])
            .find('[data-cy="productName"]')
            .text();
          expect(currentName.localeCompare(nextName)).to.be.greaterThan(0);
        }
      });
  });
});

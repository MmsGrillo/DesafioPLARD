describe('API Teste - Busca de Produto', () => {
    it('Deve retornar o produto de acordo com a pesquisa', () => {
      const produto = 'Bose Soundlink';
  
      cy.request({
        method: 'GET',
        url: `https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=${produto}`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        
        response.body.forEach((product) => {
          expect(product.name.toLowerCase()).to.include(produto.toLowerCase());
        });
      });
    });
  });
  
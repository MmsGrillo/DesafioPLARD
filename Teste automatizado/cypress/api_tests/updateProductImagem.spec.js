describe('Teste da API - Atualizar Imagem do Produto', () => {
    it('deve atualizar a imagem do produto com sucesso', () => {
      const userId = '123';
      const productId = 123;
      const source = 'imagem_teste.jpg';
      const color = 'red';
  
      const formData = new FormData();
      formData.append('file', Cypress.Blob.base64StringToBlob('data:image/jpeg;base64,BASE64_ENCODED_IMAGE_STRING')); // Substitua pela sua imagem codificada em base64
      formData.append('product_id', productId);
  
      cy.request({
        method: 'POST',
        url: `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/${source}/${color}?product_id=${productId}`,
        body: formData,
        form: true
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.imageId).to.exist; 
      });
    });
  });
  
# Desafio PLARD - Documentação de Testes

## Objetivo
Este repositório contém a documentação dos testes realizados na API do site Advantage Online Shopping, incluindo tanto testes automatizados quanto manuais.

## Testes Automatizados

### 1. Teste de Busca de Produto (GET)
- **Endpoint:** `https://www.advantageonlineshopping.com/catalog/api/v1/products/search`
- **Descrição:** Verifica se a lista de produtos retornada pela API corresponde à busca realizada.
- **Implementação:** Utiliza Cypress para enviar uma requisição GET e valida o status code `200` e os produtos retornados.

### 2. Teste de Atualização de Imagem de Produto (POST)
- **Endpoint:** `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/{userId}/{source}/{color}`
- **Descrição:** Atualiza a imagem de um produto e verifica se a operação foi bem-sucedida.
- **Parâmetros Necessários:**
  - `userId`: ID do usuário (obrigatório).
  - `source`: Caminho da nova imagem (obrigatório).
  - `color`: Cor do produto (obrigatório).
  - `product_id`: ID do produto (query string, obrigatório).
- **Implementação:** Utiliza Cypress para enviar uma requisição POST e valida o status code `200` e o ID da nova imagem retornada.

## Testes Manuais

### 1. Teste de Busca de Produto (GET)
- **Endpoint:** `https://www.advantageonlineshopping.com/catalog/api/v1/products/search`
- **Descrição:** Verifica se a lista de produtos retornada pela API corresponde à busca realizada.
- **Passos para Execução:**
  1. Realize uma requisição GET para o endpoint.
  2. Adicione parâmetros de busca relevantes.
  3. Verifique se a resposta contém apenas produtos correspondentes à busca.
  4. Valide o status code `200`.

### 2. Teste de Atualização de Imagem de Produto (POST)
- **Endpoint:** `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/{userId}/{source}/{color}`
- **Descrição:** Atualiza a imagem de um produto.
- **Passos para Execução:**
  1. Prepare os dados necessários (`userId`, `source`, `color`, `product_id`).
  2. Realize uma requisição POST para o endpoint.
  3. Envie a imagem como `formData`.
  4. Verifique o status code `200` e confirme que o ID da nova imagem foi retornado.

## Conclusão
Os testes automatizados e manuais realizados neste projeto garantem que as funcionalidades da API estão operando corretamente. Qualquer inconsistência encontrada deve ser reportada para análise e correção.

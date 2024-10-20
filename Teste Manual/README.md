# Documentação dos Testes Manuais - Desafio PLARD

## Objetivo
Este documento descreve os testes manuais realizados na API do site Advantage Online Shopping. Os testes envolvem a busca de produtos e a atualização da imagem de um produto.

## Testes Realizados

### 1. Teste de Busca de Produto (GET)
- **Endpoint:** `https://www.advantageonlineshopping.com/catalog/api/v1/products/search`
- **Descrição:** Este teste verifica se a lista de produtos retornada pela API corresponde à busca realizada.
- **Passos para Execução:**
  1. Realize uma requisição GET para o endpoint especificado.
  2. Adicione parâmetros de busca relevantes (ex: nome do produto).
  3. Verifique se a resposta contém apenas produtos que correspondem à busca.
  4. Valide o status code da resposta. Ele deve ser `200`.

### 2. Teste de Atualização de Imagem de Produto (POST)
- **Endpoint:** `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/{userId}/{source}/{color}`
- **Descrição:** Este teste verifica se a imagem de um produto pode ser atualizada corretamente.
- **Parâmetros Necessários:**
  - `userId` (obrigatório): ID do usuário.
  - `source` (obrigatório): Caminho da nova imagem.
  - `color` (obrigatório): Cor do produto.
  - `product_id` (obrigatório): ID do produto (query string).
- **Passos para Execução:**
  1. Prepare os dados necessários:
     - `userId`: seu ID de usuário.
     - `source`: o caminho da nova imagem (ex: `novaImagem.jpg`).
     - `color`: a cor do produto (ex: `vermelho`).
     - `product_id`: o ID do produto a ser atualizado.
  2. Realize uma requisição POST para o endpoint especificado.
  3. Envie a imagem como `formData`.
  4. Verifique o status code da resposta. Ele deve ser `200`.
  5. Confirme que o ID da nova imagem foi retornado na resposta.

## Conclusão
Os testes manuais acima ajudam a garantir que as funcionalidades da API estão operando conforme o esperado. Qualquer inconsistência encontrada deve ser reportada para análise e correção.

Feature: Busca de Produto

  Scenario: Buscar um produto existente
    Given que estou na página inicial do Advantage Online Shopping
    When eu busco pelo produto "Bose Soundlink"
    Then o produto "Bose Soundlink" deve aparecer nos resultados

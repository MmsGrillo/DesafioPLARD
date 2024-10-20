Feature: Inclusão de Produto no Carrinho

  Scenario: Incluir um produto no carrinho
    Given que estou na página inicial do Advantage Online Shopping
    When eu busco pelo produto "Bose Soundlink"
    And eu incluo o produto no carrinho
    Then o carrinho deve conter o produto "Bose Soundlink"

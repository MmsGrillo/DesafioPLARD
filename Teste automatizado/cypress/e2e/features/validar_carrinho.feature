Feature: Validação do Carrinho

  Scenario: Validar produtos no carrinho
    Given que estou na página inicial do Advantage Online Shopping
    When eu busco pelo produto "Bose Soundlink"
    And eu incluo o produto no carrinho
    And eu vou para a tela de pagamento
    Then o carrinho deve conter o produto "Bose Soundlink"

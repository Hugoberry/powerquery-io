---
title: Binary.View
---

# Binary.View


Cria ou estende um binário com manipuladores definidos pelo usuário para operações de consulta e ação.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Retorna uma visualização de `binary` onde as funções especificadas em `handlers` são usadas no lugar do comportamento padrão de uma operação quando a operação é aplicada à visualização.

Se `binary` for fornecido, todas as funções do manipulador serão opcionais. Se `binary` não for fornecido, a função de manipulador `GetStream` será necessária. Se uma função de manipulador não for especificada para uma operação, o comportamento padrão da operação será aplicado a `binary` (exceto no caso de `GetExpression`).

Funções de manipulador deve retornar um valor que seja semanticamente equivalente ao resultado da aplicação da operação em `binary` (ou a exibição resultante no caso de `GetExpression`).

Se uma função de manipulador aumentar um erro, o comportamento padrão da operação é aplicado à visualização.

`Binary.View` pode ser usado para implementar a dobra para uma fonte de dados – a tradução de M consultas em operações específicas de origem (por exemplo, para baixar uma seção de um arquivo).

Consulte a documentação publicada do conector personalizado do Power Query para obter uma descrição mais completa de `Binary.View`.


## Examples

### Example #1
Crie uma visualização básica que não exija o acesso aos dados para determinar o comprimento.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary

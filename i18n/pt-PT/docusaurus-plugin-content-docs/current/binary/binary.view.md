---
title: Binary.View
---

# Binary.View


Cria ou expande um binário com processadores definidos pelo utilizador para operações de consulta e ação.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Devolve uma vista de `binary` em que as funções especificadas em `handlers` são utilizadas em detrimento do comportamento pré-definido de uma operação quando esta é aplicada à vista.

Se `binary` for fornecido, todas as funções de processador são opcionais. Se `binary` não for fornecido, será necessária a função de processador `GetStream`. Se uma função de processador não for especificada numa operação, o comportamento predefinido da operação será antes aplicado a `binary` (exceto no caso de `GetExpression`).

As funções de processador devem devolver um valor semanticamente equivalente ao resultado da aplicação da operação em relação a `binary` (ou a vista resultante, no caso de `GetExpression`).

Se uma função de processador gerar um erro, o comportamento pré-definido da operação é aplicado à vista.

`Binary.View` pode ser utilizado para implementar a dobragem a uma origem de dados – a tradução de consultas M em operações específicas da origem (por exemplo, para transferir uma secção de um ficheiro).

Consulte a documentação publicada sobre o conector personalizado do Power Query para obter uma descrição mais completa de `Binary.View`.


## Examples

### Example #1
Crie uma vista básica que não requer o acesso aos dados para determinar o comprimento.
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

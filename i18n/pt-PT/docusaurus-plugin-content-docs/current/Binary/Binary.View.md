---
title: Binary.View
---

# Binary.View


## Description

Cria ou expande um binário com processadores definidos pelo utilizador para operações de consulta e ação.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

Devolve uma vista de <code>binary</code> em que as funções especificadas em <code>handlers</code> são utilizadas em detrimento do comportamento pré-definido de uma operação quando esta é aplicada à vista.<br />Se <code>binary</code> for fornecido, todas as funções de processador são opcionais. Se <code>binary</code> não for fornecido, será necessária a função de processador <code>GetStream</code>. Se uma função de processador não for especificada numa operação, o comportamento predefinido da operação será antes aplicado a <code>binary</code> (exceto no caso de <code>GetExpression</code>).<br />As funções de processador devem devolver um valor semanticamente equivalente ao resultado da aplicação da operação em relação a <code>binary</code> (ou a vista resultante, no caso de <code>GetExpression</code>).<br />Se uma função de processador gerar um erro, o comportamento pré-definido da operação é aplicado à vista.<br /><code>Binary.View</code> pode ser utilizado para implementar a dobragem a uma origem de dados – a tradução de consultas M em operações específicas da origem (por exemplo, para transferir uma secção de um ficheiro).<br />Consulte a documentação publicada sobre o conector personalizado do Power Query para obter uma descrição mais completa de <code>Binary.View</code>.<br />


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

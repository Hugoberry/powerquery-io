---
title: Table.ViewFunction
---

# Table.ViewFunction


Cria uma função que pode ser interceptada por um manipulador definido em uma exibição (por meio do Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Cria uma função de exibição baseada em `function` que pode ser manipulada em uma exibição criada por `Table.View`.

O manipulador `OnInvoke` de `Table.View` pode ser usado para definir um manipulador para a função de exibição.

Assim como com os manipuladores para operações internas, se nenhum manipulador `OnInvoke` for especificado, se ele não manipular a função de exibição ou se um erro for gerado pelo manipulador, `function` será aplicado no topo da exibição.

Consulte a documentação publicada de conector personalizado do Power Query para obter uma descrição mais completa de `Table.View` e das funções de exibição personalizadas.



## Category
Table.Table construction

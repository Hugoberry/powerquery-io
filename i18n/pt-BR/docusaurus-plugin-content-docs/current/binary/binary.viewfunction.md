---
title: Binary.ViewFunction
---

# Binary.ViewFunction


Cria uma função que pode ser interceptada por um manipulador definido em uma exibição (via Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

Cria uma função de visualização baseada em `function` que pode ser tratada em uma visualização criada por `Binary.View`.

O manipulador `OnInvoke` de `Binary.View` pode ser usado para definir um manipulador para a função de visualização.

Assim como os manipuladores para operações internas, se nenhum manipulador `OnInvoke` for especificado, ou se não manipular a função de exibição, ou se um erro for gerado pelo manipulador, `function` será aplicado na parte superior da exibição.

Consulte a documentação publicada do conector personalizado do Power Query para uma descrição mais completa de `Binary.View` e funções de visualização personalizada.



## Category
Binary

---
title: Binary.ViewFunction
---

# Binary.ViewFunction


## Description

Cria uma função que pode ser interceptada por um manipulador definido em uma exibição (via Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Details

Cria uma função de visualização baseada em <code>function</code> que pode ser tratada em uma visualização criada por <code>Binary.View</code>.<br />O manipulador <code>OnInvoke</code> de <code> Binary.View</code> pode ser usado para definir um manipulador para a função de visualização.<br />Assim como os manipuladores para operações internas, se nenhum manipulador <code>OnInvoke</code> for especificado, ou se não manipular a função de exibição, ou se um erro for gerado pelo manipulador, <code>function</code> será aplicado na parte superior da exibição.<br />Consulte a documentação publicada do conector personalizado do Power Query para uma descrição mais completa de <code>Binary.View</code> e funções de visualização personalizada.<br />



## Category
Binary

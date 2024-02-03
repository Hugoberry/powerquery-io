---
title: Table.ViewFunction
---

# Table.ViewFunction


## Description

Cria uma função que pode ser interceptada por um manipulador definido em uma exibição (por meio do Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Details

Cria uma função de exibição baseada em <code>function</code> que pode ser manipulada em uma exibição criada por <code>Table.View</code>.<br />O manipulador <code>OnInvoke</code> de <code>Table.View</code> pode ser usado para definir um manipulador para a função de exibição.<br />Assim como com os manipuladores para operações internas, se nenhum manipulador <code>OnInvoke</code> for especificado, se ele não manipular a função de exibição ou se um erro for gerado pelo manipulador, <code>function</code> será aplicado no topo da exibição.<br />Consulte a documentação publicada de conector personalizado do Power Query para obter uma descrição mais completa de <code>Table.View</code> e das funções de exibição personalizadas.<br />



## Category
Table.Table construction

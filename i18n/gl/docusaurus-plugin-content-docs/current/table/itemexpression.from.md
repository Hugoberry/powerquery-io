---
title: ItemExpression.From
---

# ItemExpression.From


Devolve a árbore de sintaxe abstracta (AST) para o corpo dunha función.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Devolve a árbore de sintaxe abstracta (AST) para o corpo de `function`, normalizada nunha expresión de elemento :

-   A función debe ser unha lambda dun só argumento.
-   Todas as referencias ao parámetro da función son substituídas por `ItemExpression.Item`.
-   O AST simplificarase para conter só nodos dos tipos:
    -   `Constante`
    -   `Invocación`
    -   `Unario`
    -   `Binario`
    -   `Se`
    -   `Acceso ao campo`

Xírase un erro se non se pode devolver unha expresión de elemento AST para o corpo de `function`.  
  
Esta función é idéntica a `RowExpression.From`.


## Examples

### Example #1
Devolve o valor AST para o corpo da función `each _ <> null`.
```powerquery
ItemExpression.From(each _ <> null)
```

Result: 
```powerquery
[
    Kind = "Binary",
    Operator = "NotEquals",
    Left = ItemExpression.Item,
    Right =
    [
        Kind = "Constant",
        Value = null
    ]
]
```




## Category
Table.Table construction

---
title: ItemExpression.From
---

# ItemExpression.From


Devuelve el árbol de sintaxis abstracta (AST) para el cuerpo de una función.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Devuelve el árbol de sintaxis abstracta (AST) para el cuerpo de `function`, normalizado en una *expresión de elemento*:

-   La función debe ser una expresión lambda de 1 argumento.
-   Todas las referencias al parámetro de función se reemplazan por `ItemExpression.Item`.
-   El AST se simplificará para que solo contenga nodos de los tipos:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Se produce un error si no se puede devolver una expresión de elemento AST para el cuerpo de `function`.  
  
Esta función es idéntica a `RowExpression.From`.


## Examples

### Example #1
Devuelve el AST del cuerpo de la función `each _ <> null`.
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

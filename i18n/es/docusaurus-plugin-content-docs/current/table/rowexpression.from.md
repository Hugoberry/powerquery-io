---
title: RowExpression.From
---

# RowExpression.From


Devuelve el árbol de sintaxis abstracta (AST) para el cuerpo de una función.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Devuelve el árbol de sintaxis abstracta (AST) del cuerpo de `function`, normalizado en una *expresión de fila*:

-   La función debe ser una expresión lambda de 1 argumento.
-   Todas las referencias al parámetro de función se reemplazan por `RowExpression.Row`.
-   Todas las referencias a columnas se reemplazan por `RowExpression.Column(columnName)`.
-   El AST se simplificará para que solo contenga nodos de los tipos:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Se produce un error si no se puede devolver una expresión de fila AST para el cuerpo de `function`.  
  
Esta función es idéntica a `ItemExpression.From`.


## Examples

### Example #1
Devuelve el AST del cuerpo de la función `each [CustomerID] = "ALFKI"`.
```powerquery
RowExpression.From(each [CustomerName] = "ALFKI")
```

Result: 
```powerquery
[
    Kind = "Binary",
    Operator = "Equals",
    Left = RowExpression.Column("CustomerName"),
    Right =
    [
        Kind = "Constant",
        Value = "ALFKI"
    ]
]
```




## Category
Table.Table construction

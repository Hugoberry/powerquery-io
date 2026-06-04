---
title: RowExpression.From
---

# RowExpression.From


Devolve a árbore de sintaxe abstracta (AST) para o corpo dunha función.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Devolve a árbore de sintaxe abstracta (AST) para o corpo de `function`, normalizada nunha expresión de fila :

-   A función debe ser unha lambda dun só argumento.
-   Todas as referencias ao parámetro da función substitúense por `RowExpression.Row`.
-   Todas as referencias a columnas substitúense por `RowExpression.Column(columnName)`.
-   O AST simplificarase para conter só nodos dos tipos:
    -   `Constante`
    -   `Invocación`
    -   `Unario`
    -   `Binario`
    -   `Se`
    -   `Acceso ao campo`

Xírase un erro se non se pode devolver unha expresión de fila AST para o corpo de `function`.  
  
Esta función é idéntica a `ItemExpression.From`.


## Examples

### Example #1
Devolve o valor AST para o corpo da función `each [CustomerID] = "ALFKI"`.
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

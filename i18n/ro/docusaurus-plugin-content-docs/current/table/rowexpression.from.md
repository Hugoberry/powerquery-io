---
title: RowExpression.From
---

# RowExpression.From


Returnează arborele sintactic abstract (AST) pentru corpul unei funcții.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Returnează arborele sintactic abstract (AST) pentru corpul `function`, normalizat într-o *expresie de rând*:

-   Funcția trebuie să fie de tip lambda cu un argument.
-   Toate referințele la parametrul funcției sunt înlocuite cu `RowExpression.Row`.
-   Toate referințele la coloane sunt înlocuite cu `RowExpression.Column(columnName)`.
-   AST va fi simplificat astfel încât să conțină doar noduri de tipurile:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Este generată o eroare dacă nu se poate returna o expresie de rând AST pentru corpul `function`.  
  
Această funcție este identică cu `ItemExpression.From`.


## Examples

### Example #1
Returnează expresia AST pentru corpul funcției `each [CustomerID] = "ALFKI"`.
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

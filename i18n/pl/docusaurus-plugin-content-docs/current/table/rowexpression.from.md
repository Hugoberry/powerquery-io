---
title: RowExpression.From
---

# RowExpression.From


Zwraca abstrakcyjne drzewo składni (AST) dla treści funkcji.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Zwraca abstrakcyjne drzewo składni (AST) dla treści `function`, znormalizowane w *wyrażeniu wiersza*:

-   Funkcja musi być funkcją lambda z 1 argumentem.
-   Wszystkie odwołania do parametru funkcji są zamieniane na element `RowExpression.Row`.
-   Wszystkie odwołania do kolumn są zamieniane na element `RowExpression.Column(columnName)`.
-   Abstrakcyjne drzewo składni (AST) zostanie uproszczone tak, aby zawierało tylko węzły następujących typów:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Jeśli nie można zwrócić abstrakcyjnego drzewa składni (AST) wyrażenia wiersza dotyczącego treści funkcji `function`, jest zgłaszany błąd.  
  
Ta funkcja jest taka sama jak `ItemExpression.From`.


## Examples

### Example #1
Zwraca abstrakcyjne drzewo składni (AST) dotyczącą treści funkcji `each [CustomerID] = "ALFKI"`.
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

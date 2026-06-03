---
title: ItemExpression.From
---

# ItemExpression.From


Zwraca abstrakcyjne drzewo składni (AST) dla treści funkcji.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Zwraca abstrakcyjne drzewo składni (AST) dla treści `function`, znormalizowane do *wyrażenia elementu*:

-   Funkcja musi być funkcją lambda z 1 argumentem.
-   Wszystkie odwołania do parametru funkcji są zamieniane na element `ItemExpression.Item`.
-   Abstrakcyjne drzewo składni (AST) zostanie uproszczona tak, aby zawierała tylko węzły następujących typów:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Jeśli nie można zwrócić abstrakcyjnego drzewa składni (AST) wyrażenia elementu dotyczącego treści funkcji `function`, jest zgłaszany błąd.  
  
Ta funkcja jest taka sama jak `RowExpression.From`.


## Examples

### Example #1
Zwraca abstrakcyjne drzewo składni (AST) dotyczące treści funkcji `each _ <> null`.
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

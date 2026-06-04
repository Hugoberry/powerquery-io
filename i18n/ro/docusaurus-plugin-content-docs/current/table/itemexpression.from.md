---
title: ItemExpression.From
---

# ItemExpression.From


Returnează arborele sintactic abstract (AST) pentru corpul unei funcții.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Returnează arborele sintactic abstract (AST) pentru corpul `function`, normalizat într-o *expresie de element*:

-   Funcția trebuie să fie de tip lambda cu un argument.
-   Toate referințele la parametrul funcției sunt înlocuite cu `ItemExpression.Item`.
-   AST va fi simplificat astfel încât să conțină doar noduri de tipurile:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Este generată o eroare dacă nu se poate returna o expresie de rând AST pentru corpul `function`.  
  
Această funcție este identică cu `RowExpression.From`.


## Examples

### Example #1
Returnează AST pentru corpul funcției `each _ <> null`.
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

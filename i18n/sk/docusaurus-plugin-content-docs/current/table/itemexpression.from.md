---
title: ItemExpression.From
---

# ItemExpression.From


Vráti abstraktný strom syntaxe (AST) pre telo funkcie.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Vráti strom abstraktnej syntaxe (AST) pre telo `function`, normalizovaný do výrazu položky :

-   Funkcia musí byť lambda s 1 argumentom.
-   Všetky odkazy na parameter funkcie sú nahradené hodnotou `ItemExpression.Item`.
-   Hodnota AST bude zjednodušená tak, aby obsahovala iba uzly typov:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Ak nie je možné vrátiť AST výrazu položky pre telo `function`, vygeneruje sa chyba.  
  
Táto funkcia je identická s `RowExpression.From`.


## Examples

### Example #1
Vráti AST pre telo funkcie `each _ <> null`.
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

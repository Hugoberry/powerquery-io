---
title: RowExpression.From
---

# RowExpression.From


Vráti abstraktný strom syntaxe (AST) pre telo funkcie.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Vráti abstraktný syntaktický strom (AST) pre telo výrazu `function`, normalizovaný do *jednoriadkového výrazu*:

-   Funkcia musí byť lambda s 1 argumentom.
-   Všetky odkazy na parameter funkcie sa nahradia reťazcom `RowExpression.Row`.
-   Všetky odkazy na stĺpce sú nahradené `RowExpression.Column(columnName)`.
-   Hodnota AST bude zjednodušená tak, aby obsahovala iba uzly typov:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Ak nie je možné vrátiť AST výrazu riadku pre telo `function`, vygeneruje sa chyba.  
  
Táto funkcia je identická s `ItemExpression.From`.


## Examples

### Example #1
Vráti AST pre telo funkcie `each [CustomerID] = "ALFKI"`.
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

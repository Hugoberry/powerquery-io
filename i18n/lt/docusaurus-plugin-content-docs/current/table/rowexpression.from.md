---
title: RowExpression.From
---

# RowExpression.From


Pateikia funkcijos turinio abstrakčiosios sintaksės medį (AST).


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Pateikiamas abstraktusis sintaksės medis (AST) funkcijos `function` turiniui, normalizuotam į *eilutės reiškinį*:

-   Funkcija turi būti 1 argumento lambda.
-   Visos funkcijos parametro nuorodos pakeičiamos naudojant `RowExpression.Row`.
-   Visos stulpelių nuorodos pakeičiamos naudojant `RowExpression.Column(columnName)`.
-   AST bus supaprastintas, kad jame būtų tik rūšių mazgai:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Pateikiama klaida, jei nepavyksta pateikti eilutės reiškinio AST, skirto `function` turiniui.  
  
Ši funkcija yra identiška `ItemExpression.From`.


## Examples

### Example #1
Pateikiamas funkcijos `each [CustomerID] = "ALFKI"` turinio AST.
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

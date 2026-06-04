---
title: RowExpression.From
---

# RowExpression.From


Vrne abstraktno sintaksa drevo (AST) za telo funkcija.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Vrne abstraktno sintaksno drevo (AST) za telo `function`, normalizirano v *izraz vrstice*:

-   Funkcija mora biti lambda z enim argumentom.
-   Vsi sklici na parameter funkcije so zamenjani z `RowExpression.Row`.
-   Vsi sklici na stolpce so zamenjani s `RowExpression.Column(columnName)`.
-   AST bo poenostavljen tako, da bo vseboval samo vozlišča vrst:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Opozori se na napako, če izraza vrstice AST ni mogoče vrniti za telo `function`.  
  
Ta funkcija je enaka `ItemExpression.From`.


## Examples

### Example #1
Vrne AST za telo funkcije `each [CustomerID] = "ALFKI"`.
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

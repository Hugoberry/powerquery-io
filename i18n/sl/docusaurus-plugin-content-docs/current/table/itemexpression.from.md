---
title: ItemExpression.From
---

# ItemExpression.From


Vrne abstraktno sintaksa drevo (AST) za telo funkcija.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Vrne abstraktno sintaksno drevo (AST) za telo `function`, normalizirano v *izraz elementa*:

-   Funkcija mora biti lambda z enim argumentom.
-   Vsi sklici na parameter funkcije so zamenjani z `ItemExpression.Item`.
-   AST bo poenostavljen tako, da bo vseboval samo vozlišča vrst:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Opozori se na napako, če izraza elementa AST ni mogoče vrniti za telo `function`.  
  
Ta funkcija je enaka kot `RowExpression.From`.


## Examples

### Example #1
Vrne AST za telo funkcije `each _ <> null`.
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

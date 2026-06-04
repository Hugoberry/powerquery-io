---
title: ItemExpression.From
---

# ItemExpression.From


Pateikia funkcijos turinio abstrakčiosios sintaksės medį (AST).


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Pateikiamas abstraktusis sintaksės medis (AST) funkcijos `function` turiniui, normalizuotam į *elemento reiškinį*:

-   Funkcija turi būti 1 argumento lambda.
-   Visos funkcijos parametro nuorodos pakeičiamos naudojant `ItemExpression.Item`.
-   AST bus supaprastintas, kad jame būtų tik rūšių mazgai:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Jei elemento išraiškos AST negalima pateikti `function` tekstui, pateikiama klaida.  
  
Ši funkcija yra identiška `RowExpression.From`.


## Examples

### Example #1
Pateikiamas funkcijos `each _ <> null` turinio AST.
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

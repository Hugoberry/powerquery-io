---
title: ItemExpression.From
---

# ItemExpression.From


Atgriež funkcijas pamatteksta abstrakto sintakses koku (AST).


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Atgriež AST `function`pamattekstam, kurš normalizēts *rindas izteiksmē*:

-   Šai funkcijai ir jābūt 1 argumenta lambdai.
-   Visas atsauces uz šo funkcijas parametru tiek aizstātas ar `RowExpression.Row`.
-   AST tiks vienkāršots, lai ietvertu tikai šādu veidu mezglus:
    -   `Constant`
    ;-   `Invocation`
    ;-   `Unary`
    ;-   `Binary`
    ;-   `If`
    ;-   `FieldAccess`
    ;

Rodas kļūda, ja vienuma izteiksmi AST nevar atgriezt `function` pamattekstam.  
  
Šī funkcija ir identiska ar `RowExpression.From`.


## Examples

### Example #1
Atgriež funkcijas `each _ <> null` pamatteksta AST.
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

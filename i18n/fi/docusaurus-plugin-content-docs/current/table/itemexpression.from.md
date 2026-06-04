---
title: ItemExpression.From
---

# ItemExpression.From


Palauttaa funktion rungolle abstraktin syntaksipuun (AST).


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Palauttaa abstraktin syntaksipuun (AST) `function`rungolle normalisoituna *kohdelausekkeeksi*:

-   Funktion on oltava yksiargumenttinen lambda.
-   Kaikki viittaukset funktioparametriin korvataan kohteella `ItemExpression.Item`.
-   AST yksinkertaistetaan sisältämää vain seuraavia lajeja olevat solmut:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Näyttöön tulee virhe, jos kohdelausekkeen AST-kohdetta ei voi palauttaa kohteen `function` leipätekstille.  
  
Tämä funktio on identtinen kohteen `RowExpression.From` kanssa.


## Examples

### Example #1
Palauttaa AST:n funktion rungolle `each _ <> null`.
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

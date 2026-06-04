---
title: ItemExpression.From
---

# ItemExpression.From


Egy függvény törzséhez tartozó absztrakt szintaxisfát (AST) adja vissza.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

A (z) `function` törzsének absztrakt szintaxisfáját (AST) adja vissza *elemkifejezéssé* normalizálva:

-   A függvény csak 1 argumentumos lambda lehet.
-   A függvényparaméterre mutató összes hivatkozás helyére az `ItemExpression.Item` kerül.
-   Az AST-t a rendszer egyszerűsíti, hogy csak a következő típusú csomópontokat tartalmazza:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Akkor jelentkezik hiba, ha nem sikerül egy sorkifejezés AST-jét visszaadni a(z) `function` törzséhez.  
  
Ez a függvény megegyezik a `RowExpression.From` függvénnyel.


## Examples

### Example #1
Az `each _ <> null` függvény törzséhez tartozó AST-t adja vissza.
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

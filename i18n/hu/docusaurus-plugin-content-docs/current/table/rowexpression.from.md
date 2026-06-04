---
title: RowExpression.From
---

# RowExpression.From


Egy függvény törzséhez tartozó absztrakt szintaxisfát (AST) adja vissza.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

A(z) `function` törzsének absztrakt szintaxisfáját (AST) adja vissza *sorkifejezéssé* normalizálva:

-   A függvény csak 1 argumentumos lambda lehet.
-   A függvényparaméterre mutató összes hivatkozás helyére a `RowExpression.Row` kerül.
-   Minden oszlopra mutató hivatkozás helyére a `RowExpression.Column(columnName)` kerül.
-   Az AST-t a rendszer egyszerűsíti, hogy csak a következő típusú csomópontokat tartalmazza:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Akkor jelentkezik hiba, ha nem sikerül egy sorkifejezés AST-jét visszaadni a(z) `function` törzséhez.  
  
Ez a függvény megegyezik az `ItemExpression.From` függvénnyel.


## Examples

### Example #1
Az `each [CustomerID] = "ALFKI"` függvény törzséhez tartozó AST-t adja vissza.
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

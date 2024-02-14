---
title: RowExpression.Column
---

# RowExpression.Column


Retourneert een abstracte syntaxisstructuur (AST) die de toegang tot een kolom binnen een rijexpressie vertegenwoordigt.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

Retourneert een abstracte syntaxisstructuur (AST) die de toegang tot de kolom <code>columnName</code> van de rij binnen een rijexpressie vertegenwoordigt.


## Examples

### Example #1 
Hiermee wordt een abstracte syntaxisstructuur gemaakt die de toegang tot de kolom CustomerName vertegenwoordigt.
```powerquery
RowExpression.Column("CustomerName")
```

Result: 
```powerquery
[
    Kind = "FieldAccess",
    Expression = RowExpression.Row,
    MemberName = "CustomerName"
]
```




## Category
Table.Table construction

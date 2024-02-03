---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Palauttaa abstraktin syntaksipuun (AST), joka edustaa pääsyä rivilausekkeen sisällä olevaan sarakkeeseen.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Palauttaa abstraktin syntaksipuun (AST), joka edustaa pääsyä rivin sarakkeeseen <code>columnName</code> rivilausekkeen sisällä.


## Examples

### Example #1 
Luo AST-kohteen, joka edustaa pääsyä sarakkeeseen CustomerName.
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

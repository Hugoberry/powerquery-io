---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Vraća apstraktno stablo sintakse (AST) koje predstavlja pristup koloni u okviru izraza reda.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Vraća apstraktno stablo sintakse (AST) koje predstavlja pristup koloni <code>columnName</code> reda u okviru izraza reda.


## Examples

### Example #1 
Kreira AST koji predstavlja pristup koloni „CustomerName“.
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

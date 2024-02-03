---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Zwraca abstrakcyjne drzewo składni (AST), które reprezentuje dostęp do kolumny w wyrażeniu wiersza.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Zwraca abstrakcyjne drzewo składni (AST), które reprezentuje dostęp do kolumny <code>columnName</code> wiersza w wyrażeniu wiersza.


## Examples

### Example #1 
Tworzy wyrażenie AST reprezentujące dostęp do kolumny „CustomerName”.
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

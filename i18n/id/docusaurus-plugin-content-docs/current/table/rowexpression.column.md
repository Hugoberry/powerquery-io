---
title: RowExpression.Column
---

# RowExpression.Column


Menghasilkan pohon sintaksis abstrak (AST) yang menunjukkan akses ke kolom dalam ekspresi baris.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

Menghasilkan pohon sintaksis abstrak (AST) yang menunjukkan akses ke kolom `columnName` pada baris dalam ekspresi baris.


## Examples

### Example #1
Membuat AST yang menunjukkan akses kolom "CustomerName".
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

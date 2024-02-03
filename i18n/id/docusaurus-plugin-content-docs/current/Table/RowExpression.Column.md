---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Menghasilkan pohon sintaksis abstrak (AST) yang menunjukkan akses ke kolom dalam ekspresi baris.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Menghasilkan pohon sintaksis abstrak (AST) yang menunjukkan akses ke kolom <code>columnName</code> pada baris dalam ekspresi baris.


## Examples

### Example #1 
Membuat AST yang menunjukkan akses kolom &#34;CustomerName&#34;.
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

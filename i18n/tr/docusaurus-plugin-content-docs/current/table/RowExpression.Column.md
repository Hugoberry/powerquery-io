---
title: RowExpression.Column
---

# RowExpression.Column


Satır ifadesinde sütuna erişimi temsil eden bir soyut söz dizimi ağacı (AST) döndürür.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

Satır ifadesinde satırın <code>columnName</code> sütununa erişimi temsil eden bir soyut söz dizimi ağacını (AST) döndürür.


## Examples

### Example #1 
&#34;CustomerName&#34; sütununa yönelik erişimi temsil eden bir AST oluşturur.
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

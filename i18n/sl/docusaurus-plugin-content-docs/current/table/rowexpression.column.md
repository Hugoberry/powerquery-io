---
title: RowExpression.Column
---

# RowExpression.Column


Vrne abstraktno sintaksa drevo (AST), ki predstavlja dostop do stolpca v izrazu vrstica.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

Vrne abstraktno sintaksa drevo (AST), ki predstavlja dostop do stolpec `columnName` vrstica znotraj izraza vrstica.


## Examples

### Example #1
Ustvari AST, ki predstavlja dostop do stolpca"ImeStranke".
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

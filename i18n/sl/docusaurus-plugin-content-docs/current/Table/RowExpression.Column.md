---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Vrne abstraktno sintaksa drevo (AST), ki predstavlja dostop do stolpca v izrazu vrstica.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Vrne abstraktno sintaksa drevo (AST), ki predstavlja dostop do stolpec <code>columnName</code> vrstica znotraj izraza vrstica.


## Examples

### Example #1 
Ustvari AST, ki predstavlja dostop do stolpca &#34;ImeStranke&#34;.
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

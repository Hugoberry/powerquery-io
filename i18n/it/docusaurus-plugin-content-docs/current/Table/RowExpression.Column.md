---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Restituisce un albero della sintassi astratta (AST) che rappresenta l&#39;accesso a una colonna all&#39;interno di un&#39;espressione di riga.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Restituisce un albero della sintassi astratta (AST) che rappresenta l'accesso alla colonna <code>columnName</code> della riga all'interno di un'espressione di riga.


## Examples

### Example #1 
Crea un albero sintattico astratto che rappresenta l&#39;accesso della colonna &#34;CustomerName&#34;.
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

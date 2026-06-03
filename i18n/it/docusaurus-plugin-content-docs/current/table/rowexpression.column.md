---
title: RowExpression.Column
---

# RowExpression.Column


Restituisce un albero della sintassi astratta (AST) che rappresenta l'accesso a una colonna all'interno di un'espressione di riga.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

Restituisce un albero della sintassi astratta (AST) che rappresenta l'accesso alla colonna `columnName` della riga all'interno di un'espressione di riga.


## Examples

### Example #1
Crea un albero sintattico astratto che rappresenta l'accesso della colonna "CustomerName".
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

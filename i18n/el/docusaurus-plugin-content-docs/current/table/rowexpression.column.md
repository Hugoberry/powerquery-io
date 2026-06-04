---
title: RowExpression.Column
---

# RowExpression.Column


Επιστρέφει ένα αφηρημένο δέντρο σύνταξης (AST) που αντιπροσωπεύει την πρόσβαση σε μια στήλη μέσα σε μια παράσταση γραμμής.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

Επιστρέφει ένα αφηρημένο δέντρο σύνταξης (AST) που αντιπροσωπεύει την πρόσβαση στη στήλη `columnName` της γραμμής μέσα σε μια παράσταση γραμμής.


## Examples

### Example #1
Δημιουργεί ένα AST που αναπαριστά την πρόσβαση της στήλης "CustomerName".
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

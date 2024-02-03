---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Επιστρέφει ένα αφηρημένο δέντρο σύνταξης (AST) που αντιπροσωπεύει την πρόσβαση σε μια στήλη μέσα σε μια παράσταση γραμμής.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Επιστρέφει ένα αφηρημένο δέντρο σύνταξης (AST) που αντιπροσωπεύει την πρόσβαση στη στήλη <code>columnName</code> της γραμμής μέσα σε μια παράσταση γραμμής.


## Examples

### Example #1 
Δημιουργεί ένα AST που αναπαριστά την πρόσβαση της στήλης &#34;CustomerName&#34;.
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

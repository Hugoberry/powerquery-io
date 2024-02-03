---
title: RowExpression.Column
---

# RowExpression.Column


## Description

एक सारांश सिंटैक्स ट्री (AST) वापस करता है जो पंक्ति व्यंजक के भीतर पंक्ति के कालम तक पहुँच का प्रतिनिधित्व करता है.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

एक सारांश सिंटैक्स ट्री (AST) वापस करता है जो पंक्ति व्यंजक के भीतर पंक्ति के कालम <code>columnName</code> तक पहुँच का प्रतिनिधित्व करता है.


## Examples

### Example #1 
&#34;CustomerName&#34; स्तंभ की पहुँच प्रस्तुत करने वाला AST बनाता है.
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

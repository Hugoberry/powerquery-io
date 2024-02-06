---
title: RowExpression.Column
---

# RowExpression.Column


傳回代表資料列運算式內資料行存取權的抽象語法樹狀結構 (AST)。


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

傳回代表資料列運算式內資料列之資料行 <code>columnName</code> 存取權的抽象語法樹狀結構 (AST)。


## Examples

### Example #1 
建立代表資料行 &#34;CustomerName&#34; 存取權的 AST。
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

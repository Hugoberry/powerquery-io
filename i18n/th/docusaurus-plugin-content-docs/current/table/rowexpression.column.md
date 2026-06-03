---
title: RowExpression.Column
---

# RowExpression.Column


ส่งกลับทรีไวยากรณ์เชิงนามธรรม (AST) ที่แสดงการเข้าถึงคอลัมน์ภายในนิพจน์แถว


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

ส่งกลับทรีไวยากรณ์เชิงนามธรรม (AST) ที่แสดงการเข้าถึง `columnName` คอลัมน์ของแถวภายในนิพจน์แถว


## Examples

### Example #1
สร้าง AST ที่แสดงการเข้าถึงคอลัมน์ "CustomerName"
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

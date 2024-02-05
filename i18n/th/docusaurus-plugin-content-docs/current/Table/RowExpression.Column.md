---
title: RowExpression.Column
---

# RowExpression.Column


## Description

ส่งกลับทรีไวยากรณ์เชิงนามธรรม (AST) ที่แสดงการเข้าถึงคอลัมน์ภายในนิพจน์แถว


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

ส่งกลับทรีไวยากรณ์เชิงนามธรรม (AST) ที่แสดงการเข้าถึง <code>columnName</code> คอลัมน์ของแถวภายในนิพจน์แถว


## Examples

### Example #1 
สร้าง AST ที่แสดงการเข้าถึงคอลัมน์ &#34;CustomerName&#34;
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

---
title: Table.CombineColumns
---

# Table.CombineColumns


Kết hợp các cột được chỉ định thành một cột mới bằng hàm kết hợp được chỉ định.


## Syntax

```powerquery
Table.CombineColumns(
    table as table,
    sourceColumns as list,
    combiner as function,
    column as text
) as table
```


## Remarks

Kết hợp các cột được chỉ định thành một cột mới bằng hàm kết hợp được chỉ định.


## Examples

### Example #1 
Kết hợp họ và tên vào một cột mới, được phân tách bằng dấu phẩy.
```powerquery
Table.CombineColumns(
    Table.FromRecords({[FirstName = "Bob", LastName = "Smith"]}),
    {"LastName", "FirstName"},
    Combiner.CombineTextByDelimiter(",", QuoteStyle.None),
    "FullName"
)
```

Result: 
```powerquery
Table.FromRecords({[FullName = "Smith,Bob"]})
```




## Category
Table.Transformation

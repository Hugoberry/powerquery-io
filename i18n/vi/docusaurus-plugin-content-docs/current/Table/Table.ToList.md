---
title: Table.ToList
---

# Table.ToList


## Description

Chuyển đổi một bảng thành một danh sách bằng cách áp dụng hàm kết hợp được chỉ định cho mỗi hàng giá trị trong bảng.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

Chuyển đổi một bảng thành một danh sách bằng cách áp dụng hàm kết hợp được chỉ định cho mỗi hàng giá trị trong bảng.


## Examples

### Example #1 
Kết hợp văn bản của từng hàng bằng dấu phẩy.
```powerquery
Table.ToList(
    Table.FromRows({
        {Number.ToText(1), "Bob", "123-4567"},
        {Number.ToText(2), "Jim", "987-6543"},
        {Number.ToText(3), "Paul", "543-7890"}
    }),
    Combiner.CombineTextByDelimiter(",")
)
```

Result: 
```powerquery
{"1,Bob,123-4567", "2,Jim,987-6543", "3,Paul,543-7890"}
```




## Category
Table.Conversions

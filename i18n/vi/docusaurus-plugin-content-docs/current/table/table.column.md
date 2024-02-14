---
title: Table.Column
---

# Table.Column


Trả về một cột dữ liệu được chỉ định từ bảng đó ở dạng danh sách.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Remarks

Trả về cột dữ liệu được chỉ định bởi <code>column</code> từ bảng <code>table</code> ở dạng danh sách.


## Examples

### Example #1 
Trả về các giá trị từ cột [Name] trong bảng.
```powerquery
Table.Column(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
{"Bob", "Jim", "Paul", "Ringo"}
```




## Category
Table.Column operations

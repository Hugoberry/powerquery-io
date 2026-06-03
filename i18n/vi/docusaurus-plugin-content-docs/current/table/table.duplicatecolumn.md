---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Sao chép một cột có tên được chỉ định. Các giá trị và loại được sao chép từ cột nguồn.


## Syntax

```powerquery
Table.DuplicateColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional columnType as type
) as table
```


## Remarks

Sao chép cột có tên `columnName` tới bảng `table`. Các giá trị và loại cho cột `newColumnName` được sao chép từ cột `columnName`.


## Examples

### Example #1
Sao chép cột "a" tới một cột có tên "cột được sao chép" trong bảng `({[a = 1, b = 2], [a = 3, b = 4]})`.
```powerquery
Table.DuplicateColumn(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    "a",
    "copied column"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2, #"copied column" = 1],
    [a = 3, b = 4, #"copied column" = 3]
})
```




## Category
Table.Column operations

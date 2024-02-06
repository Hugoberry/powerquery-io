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

Sao chép cột có tên <code>columnName</code> tới bảng <code>table</code>. Các giá trị và loại cho cột <code>newColumnName</code> được sao chép từ cột <code>columnName</code>.


## Examples

### Example #1 
Sao chép cột &#34;a&#34; tới một cột có tên &#34;cột được sao chép&#34; trong bảng &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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

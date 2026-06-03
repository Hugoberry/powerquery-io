---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


Gộp một cột của các bảng thành nhiều cột trong bảng chứa.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

Gộp các bảng trong `table`\[`column`\] thành nhiều cột chứa các giá trị gộp cho các bảng. `aggregations` được dùng để chỉ định các cột chứa các bảng sẽ tính gộp, các hàm tính gộp để áp dụng cho các bảng để tạo giá trị của các bảng đó và tên của các cột tính gộp sẽ tạo.


## Examples

### Example #1
Tính gộp các cột bảng trong `[t]` trong bảng `{[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}` thành tổng của `[t.a]`, giá trị tối thiểu và tối đa của `[t.b]` và tổng số giá trị trong `[t.a]`.
```powerquery
Table.AggregateTableColumn(
    Table.FromRecords(
        {
            [
                t = Table.FromRecords({
                    [a = 1, b = 2, c = 3],
                    [a = 2, b = 4, c = 6]
                }),
                b = 2
            ]
        },
        type table [t = table [a = number, b = number, c = number], b = number]
    ),
    "t",
    {
        {"a", List.Sum, "sum of t.a"},
        {"b", List.Min, "min of t.b"},
        {"b", List.Max, "max of t.b"},
        {"a", List.Count, "count of t.a"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[#"sum of t.a" = 3, #"min of t.b" = 2, #"max of t.b" = 4, #"count of t.a" = 2, b = 2]})
```




## Category
Table.Transformation

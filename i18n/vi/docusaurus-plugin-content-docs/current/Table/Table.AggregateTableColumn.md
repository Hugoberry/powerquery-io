---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


## Description

Gộp một cột của các bảng thành nhiều cột trong bảng chứa.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Details

Gộp các bảng trong <code>table</code>[<code>column</code>] thành nhiều cột chứa các giá trị gộp cho các bảng. <code>aggregations</code> được dùng để chỉ định các cột chứa các bảng sẽ tính gộp, các hàm tính gộp để áp dụng cho các bảng để tạo giá trị của các bảng đó và tên của các cột tính gộp sẽ tạo.


## Examples

### Example #1 
Tính gộp các cột bảng trong &lt;code&gt;[t]&lt;/code&gt; trong bảng &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; thành tổng của &lt;code&gt;[t.a]&lt;/code&gt;, giá trị tối thiểu và tối đa của &lt;code&gt;[t.b]&lt;/code&gt; và tổng số giá trị trong &lt;code&gt;[t.a]&lt;/code&gt;.
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

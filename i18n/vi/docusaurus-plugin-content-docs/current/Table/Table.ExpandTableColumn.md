---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

Mở rộng một cột bản ghi hoặc một cột bảng thành nhiều cột trong bảng chứa.


## Syntax

```powerquery
Table.ExpandTableColumn(
    table as table,
    column as text,
    columnNames as list,
    optional newColumnNames as list
) as table
```


## Details

Mở rộng các bảng trong <code>table</code>[<code>column</code>] thành nhiều hàng và cột. <code>columnNames</code> được dùng để chọn các cột sẽ mở rộng từ bảng bên trong. Chỉ định <code>newColumnNames</code> để tránh xung đột giữa cột hiện có và cột mới.


## Examples

### Example #1 
Mở rộng các cột bảng trong &lt;code&gt;[a]&lt;/code&gt; trong bảng &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; thành 3 cột &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; và &lt;code&gt;[t.c]&lt;/code&gt;.
```powerquery
Table.ExpandTableColumn(
    Table.FromRecords({
        [
            t = Table.FromRecords({
                [a = 1, b = 2, c = 3],
                [a = 2, b = 4, c = 6]
            }),
            b = 2
        ]
    }),
    "t",
    {"a", "b", "c"},
    {"t.a", "t.b", "t.c"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [t.a = 1, t.b = 2, t.c = 3, b = 2],
    [t.a = 2, t.b = 4, t.c = 6, b = 2]
})
```




## Category
Table.Transformation

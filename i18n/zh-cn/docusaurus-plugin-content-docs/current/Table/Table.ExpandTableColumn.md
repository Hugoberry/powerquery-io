---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

将一个记录列或表列扩展到包含表中的多列。


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

将 <code>table</code>[<code>column</code>] 中的表扩展为多个行和列。<code>columnNames</code> 用于从内部表中选择要扩展的列。指定 <code>newColumnNames</code> 以避免现有列与新列之间的冲突。


## Examples

### Example #1 
将表 &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; 的 &lt;code&gt;[a]&lt;/code&gt; 中的表列扩展为 3 列 &lt;code&gt;[t.a]&lt;/code&gt;、&lt;code&gt;[t.b]&lt;/code&gt; 和 &lt;code&gt;[t.c]&lt;/code&gt;。
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

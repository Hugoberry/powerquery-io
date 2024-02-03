---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


## Description

复制具有指定名称的列。从源列复制值和类型。


## Syntax

```powerquery
Table.DuplicateColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional columnType as type
) as table
```


## Details

将名为 <code>columnName</code> 的列复制到表 <code>table</code>。列 <code>newColumnName</code> 的值和类型从列 <code>columnName</code> 复制。


## Examples

### Example #1 
将列 &#34;a&#34; 复制到表 &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; 中名为 &#34;copied column&#34; 的列。
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

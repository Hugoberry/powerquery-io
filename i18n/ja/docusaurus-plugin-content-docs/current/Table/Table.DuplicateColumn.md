---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


## Description

指定された名前の列が重複しています。値と型が基になる列からコピーされます。


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

テーブル <code>table</code> に対して <code>columnName</code> という名前の列が重複しています。列 <code>newColumnName</code> の値と型が列 <code>columnName</code> からコピーされます。


## Examples

### Example #1 
テーブル &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; 内の &#34;copied column&#34; という名前の列に対して列 &#34;a&#34; が重複しています。
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

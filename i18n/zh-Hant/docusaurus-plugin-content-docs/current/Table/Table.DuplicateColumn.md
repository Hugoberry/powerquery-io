---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


複製具有指定名稱的資料行。值和類型是從來源資料行複製的。


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

將名為 <code>columnName</code> 的資料行複製到資料表 <code>table</code>。資料行 <code>newColumnName</code> 的值和類型是從資料行 <code>columnName</code> 複製的。


## Examples

### Example #1 
將資料行 &#34;a&#34; 複製到資料表 &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; 中名為 &#34;copied column&#34; 的資料行。
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

---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Кестеден көрсетілген жолдардың барлық даналарын жояды.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

<code>table</code> ішінен көрсетілген <code>rows</code> барлық даналарын жояды.    Кестенің жолдарын салыстыруды басқару үшін <code>equationCriteria</code> міндетті емес параметрін көрсетуге болады.


## Examples

### Example #1 
&lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt; кестесінен [a = 1] шартын орындайтын барлық жолдарды жою.
```powerquery
Table.RemoveMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = 1, b = 6]
    }),
    {[a = 1]},
    "a"
)
```

Result: 
```powerquery
Table.FromRecords({[a = 3, b = 4]})
```




## Category
Table.Membership

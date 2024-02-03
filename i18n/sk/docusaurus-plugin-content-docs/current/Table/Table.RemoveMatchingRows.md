---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Odstráni všetky výskyty zadaných riadkov z tabuľky.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

Odstráni všetky výskyty zadaných riadkov <code>rows</code> z tabuľky <code>table</code>.    Možno stanoviť voliteľný parameter <code>equationCriteria</code> a kontrolovať tak porovnanie medzi riadkami tabuľky.


## Examples

### Example #1 
Odstráňte všetky riadky, kde [a = 1], z tabuľky &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
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

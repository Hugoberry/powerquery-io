---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Usuwa wszystkie wystąpienia określonych wierszy z tabeli.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

Usuwa wszystkie wystąpienia określonych wierszy <code>rows</code> z tabeli <code>table</code>.    Można określić opcjonalny parametr <code>equationCriteria</code>, aby sterować porównywaniem wierszy tabeli.


## Examples

### Example #1 
Usuń wszystkie wiersze, w których [a = 1], z tabeli &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
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

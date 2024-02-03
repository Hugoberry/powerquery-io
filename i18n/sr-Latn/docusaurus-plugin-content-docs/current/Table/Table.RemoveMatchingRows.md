---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Uklanja sva pojavljivanja navedenih redova iz tabele.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

Uklanja sva pojavljivanja navedenog <code>rows</code> iz <code>table</code>.    Može se navesti opcionalni parametar <code>equationCriteria</code> radi kontrole poređenja redova iz tabele.


## Examples

### Example #1 
Uklanjanje redova kod kojih je [a = 1] iz tabele &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
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

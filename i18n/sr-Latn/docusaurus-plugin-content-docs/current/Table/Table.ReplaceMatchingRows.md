---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

Zamenjuje sve navedene redove datim redovima.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

Zamenjuje sve navedene redove iz <code>table</code> datim redovima. Redovi koji se zamenjuju i njihove zamene navedeni su u <code>replacements</code>, u obliku \{old, new}.    Može se navesti opcionalni parametar <code>equationCriteria</code> radi kontrole poređenja redova iz tabele.


## Examples

### Example #1 
Zamena redova [a = 1, b = 2] i [a = 2, b = 3] redovima [a = -1, b = -2],[a = -2, b = -3] u tabeli.
```powerquery
Table.ReplaceMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 2, b = 3],
        [a = 3, b = 4],
        [a = 1, b = 2]
    }),
    {
        {[a = 1, b = 2], [a = -1, b = -2]},
        {[a = 2, b = 3], [a = -2, b = -3]}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = -1, b = -2],
    [a = -2, b = -3],
    [a = 3, b = 4],
    [a = -1, b = -2]
})
```




## Category
Table.Membership

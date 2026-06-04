---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


Zamenjuje sve navedene redove datim redovima.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Remarks

Zamenjuje sve navedene redove iz `table` datim redovima. Redovi koji se zamenjuju i njihove zamene navedeni su u `replacements`, u obliku \{old, new\}. Može se navesti opcionalni parametar `equationCriteria` radi kontrole poređenja redova iz tabele.


## Examples

### Example #1
Zamena redova \[a = 1, b = 2\] i \[a = 2, b = 3\] redovima \[a = -1, b = -2\],\[a = -2, b = -3\] u tabeli.
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

---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

Lecseréli az összes megadott sort a megadott sorokra.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

Lecseréli a(z) <code>table</code> összes megadott sorát a megadott sorokra. A lecserélendő és az új sorok a(z) <code>replacements</code> segítségével adhatók meg \{old, new} formátumban.    A nem kötelező <code>equationCriteria</code> paraméterrel határozható meg a tábla sorainak összehasonlítása.


## Examples

### Example #1 
Lecseréli az [a = 1, b = 2] és [a = 2, b = 3] sorokat az [a = -1, b = -2],[a = -2, b = -3] sorokra a táblában.
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

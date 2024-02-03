---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

Zamenja vse navedene vrstice s podanimi vrsticami.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

Zamenja vse navedene vrstice v tabeli <code>table</code> s podanimi vrsticami. Vrstice, ki bodo zamenjane, in nadomestne vrstice so navedene v <code>replacements</code> z obliko \{old, new}.    Določite lahko izbirni parameter <code>equationCriteria</code> za nadzor primerjave med vrsticami tabele.


## Examples

### Example #1 
Zamenjajte vrstici [a = 1, b = 2] in [a = 2, b = 3] z vrstico [a = -1, b = -2],[a = -2, b = -3] v tabeli.
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

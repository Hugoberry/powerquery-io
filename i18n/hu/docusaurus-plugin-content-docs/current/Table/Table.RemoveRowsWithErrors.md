---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


## Description

Táblát ad vissza, amely a bemeneti tábla azon sorait tartalmazza, amelyekben hiba fordult elő legalább egy cellában. Ha oszloplista van megadva, csak a megadott oszlopok celláiban keres hibát.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Táblát ad vissza, amely a bemeneti tábla azon sorait tartalmazza, amelyekben hiba fordult elő legalább egy cellában. Ha oszloplista van megadva, csak a megadott oszlopok celláiban keres hibát.


## Examples

### Example #1 
Távolítsa el a hibaértéket az első sorból.
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations

---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


## Description

Vrne tabelo, pri čemer so iz vhodne tabele odstranjene vrstice, ki vsebujejo napako v vsaj eni celici. Če navedete seznam stolpcev, se preverijo morebitne napake le v celicah v navedenih stolpcih.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Vrne tabelo, pri čemer so iz vhodne tabele odstranjene vrstice, ki vsebujejo napako v vsaj eni celici. Če navedete seznam stolpcev, se preverijo morebitne napake le v celicah v navedenih stolpcih.


## Examples

### Example #1 
Odstranite vrednost napake iz prve vrstice.
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

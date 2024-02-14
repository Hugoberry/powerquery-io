---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


Returnerer en tabel, hvor rækkerne er fjernet fra den inputtabel, der indeholder en fejl i mindst en af cellerne. Hvis der er angivet en kolonneliste, er det kun cellerne i de angivne kolonner, der undersøges for fejl.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

Returnerer en tabel, hvor rækkerne er fjernet fra den inputtabel, der indeholder en fejl i mindst en af cellerne. Hvis der er angivet en kolonneliste, er det kun cellerne i de angivne kolonner, der undersøges for fejl.


## Examples

### Example #1 
Fjern fejlværdien fra første række.
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

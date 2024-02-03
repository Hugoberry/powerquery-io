---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


## Description

Returnează un tabel cu rândurile eliminate din tabelul de intrare ce conţin o eroare în cel puţin una dintre celule. Dacă se specifică o listă de coloane, atunci numai celulele din coloanele specificate sunt verificate pentru erori.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Returnează un tabel cu rândurile eliminate din tabelul de intrare ce conţin o eroare în cel puţin una dintre celule. Dacă se specifică o listă de coloane, atunci numai celulele din coloanele specificate sunt verificate pentru erori.


## Examples

### Example #1 
Eliminați valoarea de eroare din primul rând.
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

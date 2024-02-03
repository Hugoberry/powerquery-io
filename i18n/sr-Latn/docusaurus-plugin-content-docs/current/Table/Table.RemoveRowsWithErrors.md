---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


## Description

Vraća tabelu sa redovima koji sadrže grešku u najmanje jednoj ćeliji i koji su uklonjeni iz ulazne tabele. Ako je navedena lista kolona, proverava se ispravnost samo ćelija u navedenim kolonama.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Vraća tabelu sa redovima koji sadrže grešku u najmanje jednoj ćeliji i koji su uklonjeni iz ulazne tabele. Ako je navedena lista kolona, proverava se ispravnost samo ćelija u navedenim kolonama.


## Examples

### Example #1 
Uklonite vrednost greške iz prvog reda.
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

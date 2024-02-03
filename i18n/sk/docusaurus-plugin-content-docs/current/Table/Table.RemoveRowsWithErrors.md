---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


## Description

Vráti tabuľku s riadkami odstránenými zo vstupnej tabuľky, ktoré obsahujú chybu aspoň v jednej z buniek. Ak je zadaný zoznam stĺpcov, výskyt chýb sa skontroluje iba v bunkách v zadaných stĺpcoch.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Vráti tabuľku s riadkami odstránenými zo vstupnej tabuľky, ktoré obsahujú chybu aspoň v jednej z buniek. Ak je zadaný zoznam stĺpcov, výskyt chýb sa skontroluje iba v bunkách v zadaných stĺpcoch.


## Examples

### Example #1 
Odstráňte chybnú hodnotu z prvého riadka.
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

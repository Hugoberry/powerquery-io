---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


## Description

Vrátí tabulku s řádky odebranými ze vstupní tabulky, které obsahují alespoň v jedné buňce chybu. Pokud je zadán seznam sloupců, jsou zjišťovány chyby pouze v buňkách v zadaných sloupcích.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Vrátí tabulku s řádky odebranými ze vstupní tabulky, které obsahují alespoň v jedné buňce chybu. Pokud je zadán seznam sloupců, jsou zjišťovány chyby pouze v buňkách v zadaných sloupcích.


## Examples

### Example #1 
Umožňuje odebrat chybovou hodnotu z prvního řádku.
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

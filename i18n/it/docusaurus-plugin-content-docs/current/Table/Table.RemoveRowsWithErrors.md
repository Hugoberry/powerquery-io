---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


## Description

Restituisce una tabella con le righe rimosse dalla tabella di input che contengono un errore in almeno una delle celle. Se viene specificato un elenco di colonne, la ricerca degli errori verrà eseguita solo nelle celle delle colonne specificate.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Restituisce una tabella con le righe rimosse dalla tabella di input che contengono un errore in almeno una delle celle. Se viene specificato un elenco di colonne, la ricerca degli errori verrà eseguita solo nelle celle delle colonne specificate.


## Examples

### Example #1 
Rimuovere il valore di errore dalla prima riga.
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

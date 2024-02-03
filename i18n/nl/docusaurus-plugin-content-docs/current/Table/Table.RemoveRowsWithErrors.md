---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


## Description

Retourneert een tabel met de rijen die zijn verwijderd uit een invoertabel en waar in minstens een van de cellen een fout staat. Als er een lijst met kolommen is opgegeven, worden alleen de cellen die in de opgegeven kolommen staan, op fouten gecontroleerd.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Retourneert een tabel met de rijen die zijn verwijderd uit een invoertabel en waar in minstens een van de cellen een fout staat. Als er een lijst met kolommen is opgegeven, worden alleen de cellen die in de opgegeven kolommen staan, op fouten gecontroleerd.


## Examples

### Example #1 
Verwijder de foutwaarde uit de eerste rij.
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

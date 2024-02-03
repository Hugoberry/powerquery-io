---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


## Description

Tiek atgriezta tabula ar rindām, kas noņemtas no ievades tabulas, kurā ir kļūda vismaz vienā no šūnām. Ja ir norādīts kolonnu saraksts, tad kļūdas tiek pārbaudītas tikai šūnās, kas ir norādītajās kolonnās.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Tiek atgriezta tabula ar rindām, kas noņemtas no ievades tabulas, kurā ir kļūda vismaz vienā no šūnām. Ja ir norādīts kolonnu saraksts, tad kļūdas tiek pārbaudītas tikai šūnās, kas ir norādītajās kolonnās.


## Examples

### Example #1 
Noņemt kļūdas vērtības no pirmās rindas.
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

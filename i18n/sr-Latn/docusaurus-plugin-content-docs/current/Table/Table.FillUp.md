---
title: Table.FillUp
---

# Table.FillUp


## Description

Prenosi vrednost iz ćelije na ćelije bez vrednosti koje se nalaze iznad nje u koloni.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Details

Vraća tabelu iz navedenog <code>table</code>, pri čemu se vrednost naredne ćelije prenosi na ćelije bez vrednosti koje se nalaze iznad nje u navedenom <code>columns</code>.


## Examples

### Example #1 
Vraćanje tabele bez vrednosti u koloni [Kolona2] popunjenoj vrednošću iz tabele koja se nalazi ispod njih.
```powerquery
Table.FillUp(
    Table.FromRecords({
        [Column1 = 1, Column2 = 2],
        [Column1 = 3, Column2 = null],
        [Column1 = 5, Column2 = 3]
    }),
    {"Column2"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2],
    [Column1 = 3, Column2 = 3],
    [Column1 = 5, Column2 = 3]
})
```




## Category
Table.Transformation

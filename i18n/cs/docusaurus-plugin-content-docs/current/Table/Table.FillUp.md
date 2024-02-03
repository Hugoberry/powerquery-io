---
title: Table.FillUp
---

# Table.FillUp


## Description

Rozšíří hodnotu buňky do buňky s hodnotou null výše ve sloupci.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Details

Vrátí tabulku ze zadané položky <code>table</code>, kde je hodnota následující buňky rozšířena do buněk s hodnotou null výše v zadané položce <code>columns</code>.


## Examples

### Example #1 
Vrátí tabulku s hodnotami null ve sloupci [Column2] vyplněnou hodnotou uvedenou pod nimi v tabulce.
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

---
title: Table.FillDown
---

# Table.FillDown


## Description

Rozšíří hodnotu předcházejí buňky do buňky s hodnotou null níže ve sloupci.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Details

Vrátí tabulku ze zadané položky <code>table</code>, kde je hodnota předcházejí buňky rozšířena do buněk s hodnotou null níže v zadané položce <code>columns</code>.


## Examples

### Example #1 
Vrátí tabulku s hodnotami null ve sloupci [Place] vyplněnou hodnotou uvedenou nad nimi v tabulce.
```powerquery
Table.FillDown(
    Table.FromRecords({
        [Place = 1, Name = "Bob"],
        [Place = null, Name = "John"],
        [Place = 2, Name = "Brad"],
        [Place = 3, Name = "Mark"],
        [Place = null, Name = "Tom"],
        [Place = null, Name = "Adam"]
    }),
    {"Place"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Place = 1, Name = "Bob"],
    [Place = 1, Name = "John"],
    [Place = 2, Name = "Brad"],
    [Place = 3, Name = "Mark"],
    [Place = 3, Name = "Tom"],
    [Place = 3, Name = "Adam"]
})
```




## Category
Table.Transformation

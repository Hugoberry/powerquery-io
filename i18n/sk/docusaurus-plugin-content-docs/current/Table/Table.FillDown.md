---
title: Table.FillDown
---

# Table.FillDown


## Description

Rozšíri hodnotu predchádzajúcej bunky do buniek s hodnotou null nižšie v stĺpci.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Details

Vráti tabuľku zo zadanej časti <code>table</code>, kde sa hodnota predchádzajúcej bunky rozšíri do buniek s hodnotou null nižšie v zadanom stĺpci <code>columns</code>.


## Examples

### Example #1 
Vráťte tabuľku s hodnotami null v stĺpci [Place] vyplnenú hodnotou nad nimi z tabuľky.
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

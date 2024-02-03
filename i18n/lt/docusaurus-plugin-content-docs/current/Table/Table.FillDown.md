---
title: Table.FillDown
---

# Table.FillDown


## Description

Stulpelyje žemyn išplatinama ankstesnio langelio reikšmė į neapibrėžtų reikšmių langelius.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Details

Pateikiama lentelė iš nurodyto <code>table</code>, kur ankstesnio langelio reikšmė išplatinama į neapibrėžtus langelius po nurodytu <code>columns</code>.


## Examples

### Example #1 
Pateikiama lentelė su neapibrėžtomis stulpelio [Place] reikšmėmis, užpildytą aukščiau esančia reikšme iš lentelės.
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

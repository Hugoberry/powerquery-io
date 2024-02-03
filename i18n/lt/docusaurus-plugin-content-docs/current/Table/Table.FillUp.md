---
title: Table.FillUp
---

# Table.FillUp


## Description

Stulpelyje aukštyn išplatinama langelio reikšmė į neapibrėžtų reikšmių langelius.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Details

Pateikiama lentelė iš nurodyto <code>table</code>, kur kito langelio reikšmė išplatinama aukštyn į neapibrėžtus langelius nurodytame <code>columns</code>.


## Examples

### Example #1 
Pateikiama lentelė su neapibrėžtomis stulpelio [Column2] reikšmėmis, užpildytą žemiau esančia reikšme iš lentelės.
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

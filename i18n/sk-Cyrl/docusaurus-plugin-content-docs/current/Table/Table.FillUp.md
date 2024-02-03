---
title: Table.FillUp
---

# Table.FillUp


## Description

Rozšíri hodnotu bunky do buniek s hodnotou null vyššie v stĺpci.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Details

Vráti tabuľku zo zadanej časti <code>table</code>, kde sa hodnota nasledujúcej bunky rozšíri do buniek s hodnotou null vyššie v zadanom stĺpci <code>columns</code>.


## Examples

### Example #1 
Vráťte tabuľku s hodnotami null v stĺpci [Column2] vyplnenú hodnotou pod nimi z tabuľky.
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

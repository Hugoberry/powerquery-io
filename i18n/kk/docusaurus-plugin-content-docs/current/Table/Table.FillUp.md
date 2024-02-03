---
title: Table.FillUp
---

# Table.FillUp


## Description

Ұяшықтың мәнін бағандағы жоғарыдағы нөл мәнді ұяшықтарға толтырады.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Details

Көрсетілген <code>table</code> ішінен кестені қайтарады, мұнда келесі ұяшықтың мәні көрсетілген <code>columns</code> ішіндегі жоғарыдағы null мәнді ұяшықтарға толтырылады.


## Examples

### Example #1 
Кестеден төмендегі мәнмен толтырылған [Column2] бағанында null мәндері бар кестені қайтару.
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

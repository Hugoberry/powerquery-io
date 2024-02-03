---
title: Table.FillDown
---

# Table.FillDown


## Description

Алдыңғы ұяшықтың мәнін бағандағы төмендегі нөл мәнді ұяшықтарға толтырады.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Details

Көрсетілген <code>table</code> ішінен кестені қайтарады, мұнда алдыңғы ұяшықтың мәні көрсетілген <code>columns</code> ішіндегі null мәнді ұяшықтарға толтырылады.


## Examples

### Example #1 
Кестеден жоғарыдағы мәнмен толтырылған [Place] бағанында null мәндері бар кестені қайтару.
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

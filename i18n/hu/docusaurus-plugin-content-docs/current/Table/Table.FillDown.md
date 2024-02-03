---
title: Table.FillDown
---

# Table.FillDown


## Description

Egyik előző cella értékével tölti ki az oszlopban lejjebb levő, null értékű cellákat.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Details

Táblát ad vissza a megadott <code>table</code> táblából, ahol az előző cella értékét a(z) <code>columns</code> oszlopban lejjebb levő, null értékű cellákba propagálja.


## Examples

### Example #1 
Visszaad egy olyan táblát, amelynek null értékekkel rendelkező [Place] oszlopát feltölti a felettük levő értékkel a táblából.
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

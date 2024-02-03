---
title: Table.FillUp
---

# Table.FillUp


## Description

Egy előző cella értékét az oszlopban lejjebb levő, null értékű cellákba propagálja.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Details

Táblát ad vissza a megadott <code>table</code> táblából, ahol a következő cella értékét a(z) <code>columns</code> oszlopban feljebb levő, null értékű cellákba propagálja.


## Examples

### Example #1 
Visszaad egy olyan táblát, amelynek null értékekkel rendelkező [Column2] oszlopát feltölti az alattuk levő értékkel a táblából.
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

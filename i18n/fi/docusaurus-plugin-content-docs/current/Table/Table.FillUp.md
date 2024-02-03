---
title: Table.FillUp
---

# Table.FillUp


## Description

Levittää solun arvon sarakkeessa yläpuolella oleviin tyhjäarvoisiin soluihin.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Details

Palauttaa määritetystä kohteesta <code>table</code> taulukon, jossa seuraavan solun arvo levitetään määritetyssä kohteessa <code>columns</code> yläpuolella oleviin tyhjäarvoisiin soluihin.


## Examples

### Example #1 
Palauta taulukko, jonka tyhjäarvot sarakkeessa [Column2] on täytetty niiden alla olevalla arvolla taulukosta.
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

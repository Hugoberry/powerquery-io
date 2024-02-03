---
title: Table.FillUp
---

# Table.FillUp


## Description

Propaga el valor d&#39;una cel·la a les cel·les amb valor nul que hi ha per sobre de la columna.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Details

Retorna una taula a partir de la <code>table</code> especificada on el valor de la cel·la següent es propaga a les cel·les de valor nul que hi ha per sobre de la <code>columns</code> especificada.


## Examples

### Example #1 
Retorna una taula amb els valors nuls a la columna [Column2] emplenada amb el valor que hi ha a sota des de la taula.
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

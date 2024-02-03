---
title: Table.FillDown
---

# Table.FillDown


## Description

Propaga el valor d&#39;una cel·la anterior a les cel·les amb valor nul que hi ha per sota de la columna.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Details

Retorna una taula a partir de la <code>table</code> especificada on el valor d'una cel·la anterior es propaga a les cel·les de valor nul que hi ha per sota de la <code>columns</code> especificada.


## Examples

### Example #1 
Retorna una taula amb els valors nuls a la columna [Place] emplenada amb el valor que hi ha a sobre des la taula.
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

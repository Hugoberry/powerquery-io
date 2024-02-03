---
title: Table.FillDown
---

# Table.FillDown


## Description

Propaga o valor dunha cela anterior ás celas co valor nulo máis abaixo na columna.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Details

Devolve unha táboa da <code>table</code> especificada onde o valor da cela anterior se propaga ás celas co valor nulo máis abaixo na <code>columns</code> especificada.


## Examples

### Example #1 
Devolver unha táboa con valores nulos na columna [Place] enchida co valor que está enriba delas da táboa.
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

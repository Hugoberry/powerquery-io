---
title: Table.FillUp
---

# Table.FillUp


Propaga o valor dunha cela ás celas co valor nulo máis arriba na columna.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Remarks

Devolve unha táboa da `table` especificada onde o valor da cela seguinte se propaga ás celas co valor nulo máis arriba na `columns` especificada.


## Examples

### Example #1
Devolver unha táboa con valores nulos na columna \[Column2\] enchida co valor que está abaixo delas da táboa.
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

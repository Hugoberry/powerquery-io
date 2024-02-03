---
title: Table.Repeat
---

# Table.Repeat


## Description

Repite las filas de las tablas un número de veces especificado.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

Devuelve una tabla con las filas de la entrada <code>table</code> repetidas las veces <code>count</code> especificadas.


## Examples

### Example #1 
Repetir las filas de la tabla dos veces.
```powerquery
Table.Repeat(
    Table.FromRecords({
        [a = 1, b = "hello"],
        [a = 3, b = "world"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = "hello"],
    [a = 3, b = "world"],
    [a = 1, b = "hello"],
    [a = 3, b = "world"]
})
```




## Category
Table.Row operations

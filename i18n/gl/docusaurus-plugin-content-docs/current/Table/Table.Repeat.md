---
title: Table.Repeat
---

# Table.Repeat


## Description

Repite as filas das táboas un número de veces especificado.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

Devolve unha táboa coas filas da <code>table</code> de entrada repetidas as <code>count</code> veces especificadas.


## Examples

### Example #1 
Repetir as filas da táboa dúas veces.
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

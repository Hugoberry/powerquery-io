---
title: Table.PositionOf
---

# Table.PositionOf


Devuelve la posición o las posiciones de la fila en la tabla.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Remarks

Devuelve la posición de la fila de la primera repetición de `row` en la `table` especificada. Devuelve -1 si no se encuentra ninguna aparición.

-   `table`: la tabla de entrada.
-   `row`: fila de la tabla de la que se va a buscar la posición.
-   `occurrence`: *(Opcional)* especifica qué apariciones de la fila se van a devolver.
-   `equationCriteria`: *(Opcional)* controla la comparación entre las filas de la tabla.


## Examples

### Example #1
Buscar la posición de la primera coincidencia \[a = 2, b = 4\] en la tabla `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2
Buscar la posición de la segunda coincidencia de \[a = 2, b = 4\] en la tabla `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3
Buscar la posición de todas las coincidencias de \[a = 2, b = 4\] en la tabla `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership

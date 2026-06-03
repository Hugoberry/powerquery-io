---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Devuelve la posición o las posiciones de alguna de las filas especificadas dentro de la tabla.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

Devuelve las posiciones de las filas de `table` de la primera repetición de la lista de `rows`. Devuelve -1 si no se encuentra ninguna aparición.

-   `table`: la tabla de entrada.
-   `rows`: la lista de filas de la tabla de las que se van a buscar las posiciones.
-   `occurrence`: *(Opcional)* especifica qué apariciones de la fila se van a devolver.
-   `equationCriteria`: *(Opcional)* controla la comparación entre las filas de la tabla.


## Examples

### Example #1
Buscar la posición de la primera coincidencia \[a = 2, b = 4\] o \[a = 6, b = 8\] en la tabla `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2
Buscar la posición de todas las coincidencias de \[a = 2, b = 4\] o \[a = 6, b = 8\] en la tabla `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership

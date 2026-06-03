---
title: Table.Partition
---

# Table.Partition


Divide la tabla en una lista de tablas según el número de grupos y la columna especificados.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Remarks

Divide la `table` en una lista de un número de tablas `groups`, según el valor de `column` y una función `hash`. La función `hash` se aplica el valor de la fila `column` para obtener un valor hash para la fila. El módulo de valor hash `groups` determina en cuáles de las tablas devueltas se colocará la fila.

-   `table`: tabla que dividir.
-   `column`: columna a la que aplicar hash para determinar en qué tabla devuelta está la fila.
-   `groups`: número de tablas en las que se dividirá la tabla de entrada.
-   `hash`: la función aplicada para obtener un valor hash.


## Examples

### Example #1
Divida la tabla `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` en 2 tablas según la columna \[a\], con el valor de las columnas como función hash.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations

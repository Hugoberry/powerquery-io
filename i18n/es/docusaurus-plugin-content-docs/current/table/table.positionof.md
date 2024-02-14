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

Devuelve la posición de la fila de la primera repetición de <code>row</code> en la <code>table</code> especificada. Devuelve -1 si no se encuentra ninguna repetición.    <ul>       <li><code>table</code>: la tabla de entrada.</li>       <li><code>row</code>: la fila de la tabla en la que buscar las posiciones.</li>       <li><code>occurrence</code>: <i>[opcional]</i> especifica las repeticiones de la fila que se devolverán.</li>       <li><code>equationCriteria</code>: <i>[opcional]</i> controla la comparación entre las filas de la tabla.</li>    </ul>    


## Examples

### Example #1 
Buscar la posición de la primera coincidencia [a = 2, b = 4] en la tabla &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Buscar la posición de la segunda coincidencia de [a = 2, b = 4] en la tabla &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Buscar la posición de todas las coincidencias de [a = 2, b = 4] en la tabla &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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

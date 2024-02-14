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

Devuelve las posiciones de las filas de <code>table</code> de la primera repetición de la lista de <code>rows</code>. Devuelve -1 si no se encuentra ninguna repetición.    <ul>    <li><code>table</code>: la tabla de entrada.</li>       <li><code>rows</code>: la lista de filas de la tabla en las que buscar las posiciones.</li>       <li><code>occurrence</code>: <i>[opcional]</i> especifica las repeticiones de la fila que se devolverán.</li>       <li><code>equationCriteria</code>: <i>[opcional]</i> controla la comparación entre las filas de la tabla.</li>    </ul>    


## Examples

### Example #1 
Buscar la posición de la primera coincidencia [a = 2, b = 4] o [a = 6, b = 8] en la tabla &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Buscar la posición de todas las coincidencias de [a = 2, b = 4] o [a = 6, b = 8] en la tabla &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
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

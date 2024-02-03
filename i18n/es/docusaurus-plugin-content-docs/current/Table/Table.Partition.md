---
title: Table.Partition
---

# Table.Partition


## Description

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


## Details

Divide la <code>table</code> en una lista de un número de tablas <code>groups</code>, según el valor de <code>column</code> y una función <code>hash</code>.     La función <code>hash</code> se aplica el valor de la fila <code>column</code> para obtener un valor hash para la fila. El módulo de valor hash <code>groups</code> determina en cuáles de las tablas devueltas se colocará la fila.    <ul>       <li><code>table</code>: tabla que dividir.</li>       <li><code>column</code>: columna a la que aplicar hash para determinar en qué tabla devuelta está la fila.</li>       <li><code>groups</code>: número de tablas en las que se dividirá la tabla de entrada.</li>       <li><code>hash</code>: la función aplicada para obtener un valor hash.</li>    </ul>  


## Examples

### Example #1 
Divida la tabla &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; en 2 tablas según la columna [a], con el valor de las columnas como función hash.
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

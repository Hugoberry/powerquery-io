---
title: Table.Partition
---

# Table.Partition


## Description

Crea particions a la taula per formar llistes de taules basades en el nombre de grups i la columna especificada.


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

Crea particions a la <code>table</code> en una llista de <code>groups</code> nombre de taules, basada en el valor del <code>column</code> i una funció <code>hash</code>.    La funció <code>hash</code> s'aplica al valor de la fila <code>column</code> per obtenir un valor hash per a la fila. El mòdul del valor hash <code>groups</code> determina en quina de les taules retornades es col·locarà la fila.    <ul>       <li><code>table</code>: la taula en què es crearan particions.</li>       <li><code>column</code>: la column en què s'aplicarà la funció hash per determinar a quina taula retornada es troba la fila.</li>       <li><code>groups</code>: el nombre de taules en què es dividirà en particions la taula d'entrada.</li>       <li><code>hash</code>: la funció aplicada per obtenir un valor hash.</li>    </ul>  


## Examples

### Example #1 
Fes particions a la taula &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; per crear 2 taules a la columna [a], amb el valor de les columnes com a funció hash.
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

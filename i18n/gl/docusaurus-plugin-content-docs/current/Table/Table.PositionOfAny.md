---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

Devolve a posición ou as posicións de calquera das filas especificadas dentro da táboa.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Details

Devolve as posicións das filas de <code>table</code> da primeira ocorrencia da lista de <code>rows</code>. Devolve -1 se non se localiza ningunha ocorrencia.    <ul>    <li><code>table</code>: a táboa de entrada.</li>       <li><code>rows</code>: a lista de filas na táboa para as que se van buscar as posicións.</li>       <li><code>occurrence</code>: <i>[Optional]</i> especifica que ocorrencias da fila se van devolver.</li>       <li><code>equationCriteria</code>: <i>[Optional]</i> controla a comparación entre as filas da táboa.</li>    </ul>    


## Examples

### Example #1 
Buscar a posición da primeira ocorrencia de [a = 2, b = 4] ou [a = 6, b = 8] na táboa &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Buscar a posición de todas as ocorrencias de [a = 2, b = 4] ou [a = 6, b = 8] na táboa &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
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

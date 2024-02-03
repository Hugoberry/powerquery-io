---
title: Table.PositionOf
---

# Table.PositionOf


## Description

Devolve a posición ou as posicións da fila dentro da táboa.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Details

Devolve a posición da fila da primeira ocorrencia de <code>row</code> na <code>table</code> especificada. Devolve -1 se non se localiza ningunha ocorrencia.    <ul>       <li><code>table</code>: a táboa de entrada.</li>       <li><code>row</code>: a fila na táboa para a que se vai buscar a posición.</li>       <li><code>occurrence</code>: <i>[Optional]</i> especifica que ocorrencias da fila se van devolver.</li>       <li><code>equationCriteria</code>: <i>[Optional]</i> controla a comparación entre as filas da táboa.</li>    </ul>    


## Examples

### Example #1 
Buscar a posición da primeira ocorrencia de [a = 2, b = 4] na táboa &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Buscar a posición da segunda ocorrencia de [a = 2, b = 4] na táboa &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Buscar a posición de todas as ocorrencias de [a = 2, b = 4] na táboa &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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

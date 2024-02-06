---
title: Table.PositionOf
---

# Table.PositionOf


Devolve as posições da linha na tabela.


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

Devolve a posição da linha da primeira ocorrência de <code>row</code> no <code>table</code> especificado. Devolve -1 se não for encontrada nenhuma ocorrência.    <ul>       <li><code>table</code>: a tabela de entrada.</li>       <li><code>row</code>: a linha cuja posição pretende localizar na tabela.</li>       <li><code>occurrence</code>: <i>[Opcional]</i> Especifica as ocorrências da linha a devolver.</li>       <li><code>equationCriteria</code>: <i>[Opcional]</i> Controla a comparação entre as linhas da tabela.</li>    </ul>    


## Examples

### Example #1 
Determinar a posição da primeira ocorrência de [a = 2, b = 4] na tabela &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Determinar a posição da segunda ocorrência de [a = 2, b = 4] na tabela &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Determinar a posição de todas as ocorrências de [a = 2, b = 4] na tabela &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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

---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Devolve as posições de qualquer uma das linhas especificadas na tabela.


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

Devolve as posições de linhas de <code>table</code> da primeira ocorrência de <code>rows</code> na lista. Devolve -1 se não for encontrada nenhuma ocorrência.    <ul>    <li><code>table</code>: a tabela de entrada.</li>       <li><code>rows</code>: a lista de linhas cujas posições pretende localizar na tabela.</li>       <li><code>occurrence</code>: <i>[Opcional]</i> Especifica as ocorrências da linha a devolver.</li>       <li><code>equationCriteria</code>: <i>[Opcional]</i> Controla a comparação entre as linhas da tabela.</li>    </ul>    


## Examples

### Example #1 
Determinar a posição da primeira ocorrência de [a = 2, b = 4] ou [a = 6, b = 8] na tabela &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Determinar a posição de todas as ocorrências de [a = 2, b = 4] ou [a = 6, b = 8] na tabela &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
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

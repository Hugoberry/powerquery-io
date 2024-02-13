---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Retorna uma ou mais posições de qualquer linha especificada na tabela.


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

Retorna as posições de linha da <code>table</code> da primeira ocorrência da lista de <code>rows</code>. Retorna -1 caso nenhuma ocorrência seja encontrada.    <ul>    <li><code>table</code>: a tabela de entrada.</li>       <li><code>rows</code>:  a lista de linhas da tabela cujas posições serão localizadas.</li>       <li><code>occurrence</code>: <i>[opcional]</i> especifica quais ocorrências da linha serão retornadas.</li>       <li><code>equationCriteria</code>: <i>[opcional]</i> controla a comparação entre as linhas da tabela.</li>    </ul>    


## Examples

### Example #1 
Localize a posição da primeira ocorrência de [a = 2, b = 4] ou [a = 6, b = 8] na tabela &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Localize a posição de todas as ocorrências de [a = 2, b = 4] ou [a = 6, b = 8] na tabela &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
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

---
title: Table.PositionOf
---

# Table.PositionOf


Retorna uma ou mais posições da linha na tabela.


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

Retorna a posição de linha da primeira ocorrência da <code>row</code> na <code>table</code> especificada. Retorna -1 caso nenhuma ocorrência seja encontrada.    <ul>       <li><code>table</code>: a tabela de entrada.</li>       <li><code>row</code>: a linha da tabela cuja posição será localizada.</li>       <li><code>occurrence</code>: <i>[opcional]</i> especifica quais ocorrências da linha serão retornadas.</li>       <li><code>equationCriteria</code>: <i>[opcional]</i> controla a comparação entre as linhas da tabela.</li>    </ul>    


## Examples

### Example #1 
Localize a posição da primeira ocorrência de [a = 2, b = 4] na tabela &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Localize a posição da segunda ocorrência de [a = 2, b = 4] na tabela &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Localize a posição de todas as ocorrências de [a = 2, b = 4] na tabela &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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

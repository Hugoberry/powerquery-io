---
title: Table.Partition
---

# Table.Partition


## Description

Divide a tabela numa lista de tabelas com base no número de grupos e colunas especificado.


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

Divide <code>table</code> numa lista de <code>groups</code> tabelas com base no valor de <code>column</code> e uma função <code>hash</code>.    A função <code>hash</code> é aplicada ao valor da linha <code>column</code> para obter o valor de hash da linha. O módulo de valor de hash <code>groups</code> determina a tabela devolvida em que a linha será colocada.    <ul>       <li><code>table</code>: a tabela a particionar.</li>       <li><code>column</code>: a coluna cujo hash deve ser calculado para determinar a tabela devolvida em que a linha se encontra.</li>       <li><code>groups</code>: o número de tabelas em que a tabela de entrada será particionada.</li>       <li><code>hash</code>: a função aplicada para obter um valor de hash.</li>    </ul>  


## Examples

### Example #1 
Dividir a tabela &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; em 2 tabelas na coluna [a], utilizando os valores das colunas como a função de hash.
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

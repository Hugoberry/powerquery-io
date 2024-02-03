---
title: Table.Partition
---

# Table.Partition


## Description

Particiona a tabela em uma lista de tabelas com base no número de grupos e de coluna especificados.


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

Particiona a <code>table</code> em uma lista de <code>groups</code> número de tabelas, com base no valor do <code>column</code> e em uma função <code>hash</code>.    A função <code>hash</code> é aplicada ao valor da linha <code>column</code> para obter um valor de hash para a linha. O módulo de valor de hash <code>groups</code> determina em qual tabela retornada a linha será colocada.    <ul>       <li><code>table</code>: A tabela a ser particionada.</li>       <li><code>column</code>: A coluna de hash para determinar em qual tabela retornada a linha está.</li>       <li><code>groups</code>: O número de tabelas em que a tabela de entrada será particionada.</li>       <li><code>hash</code>: A função aplicada para obter um valor de hash.</li>    </ul>  


## Examples

### Example #1 
Particione a tabela &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; em duas tabelas na coluna [a], usando o valor das colunas como função de hash.
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

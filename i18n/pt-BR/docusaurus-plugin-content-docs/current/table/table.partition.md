---
title: Table.Partition
---

# Table.Partition


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


## Remarks

Particiona a `table` em uma lista de `groups` número de tabelas, com base no valor do `column` e em uma função `hash`. A função `hash` é aplicada ao valor da linha `column` para obter um valor de hash para a linha. O módulo de valor de hash `groups` determina em qual tabela retornada a linha será colocada.

-   `table`: A tabela a ser particionada.
-   `column`: A coluna de hash para determinar em qual tabela retornada a linha está.
-   `groups`: O número de tabelas em que a tabela de entrada será particionada.
-   `hash`: A função aplicada para obter um valor de hash.


## Examples

### Example #1
Particione a tabela `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` em duas tabelas na coluna \[a\], usando o valor das colunas como função de hash.
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

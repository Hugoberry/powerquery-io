---
title: Table.Partition
---

# Table.Partition


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


## Remarks

Divide `table` numa lista de `groups` tabelas com base no valor de `column` e uma função `hash`. A função `hash` é aplicada ao valor da linha `column` para obter o valor de hash da linha. O módulo de valor de hash `groups` determina a tabela devolvida em que a linha será colocada.

-   `table`: a tabela a particionar.
-   `column`: a coluna cujo hash deve ser calculado para determinar a tabela devolvida em que a linha se encontra.
-   `groups`: o número de tabelas em que a tabela de entrada será particionada.
-   `hash`: a função aplicada para obter um valor de hash.


## Examples

### Example #1
Dividir a tabela `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` em 2 tabelas na coluna \[a\], utilizando os valores das colunas como a função de hash.
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

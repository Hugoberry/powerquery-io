---
title: Table.Repeat
---

# Table.Repeat


## Description

Repete as linhas das tabelas um número de vezes especificado.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

Devolve uma tabela com as linhas da entrada <code>table</code> repetidas o número de vezes <code>count</code> especificado.


## Examples

### Example #1 
Repetir as linhas existentes na tabela duas vezes.
```powerquery
Table.Repeat(
    Table.FromRecords({
        [a = 1, b = "hello"],
        [a = 3, b = "world"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = "hello"],
    [a = 3, b = "world"],
    [a = 1, b = "hello"],
    [a = 3, b = "world"]
})
```




## Category
Table.Row operations

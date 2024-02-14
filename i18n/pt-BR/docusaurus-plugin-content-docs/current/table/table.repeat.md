---
title: Table.Repeat
---

# Table.Repeat


Repete as linhas das tabelas um número de vezes especificado.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Remarks

Retorna uma tabela com as linhas da entrada <code>table</code> repetidas as <code>count</code> vezes especificadas.


## Examples

### Example #1 
Repetir as linhas da tabela duas vezes.
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

---
title: Table.MinN
---

# Table.MinN


Retorna as linhas menores usando os critérios especificados.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Retorna as linhas menores na `table`, com base na `comparisonCriteria`. Depois que as linhas forem classificadas, o parâmetro `countOrCondition` deverá ser especificado para filtrar ainda mais o resultado. Observe que o algoritmo de classificação não garante um resultado fixo classificado. O parâmetro `countOrCondition` pode assumir vários formatos:

-   Se um número for especificado, uma lista de até `countOrCondition` itens em ordem crescente será retornada.
-   Se uma condição for especificada, uma lista dos itens que atenderem inicialmente à condição será retornada. Quando um item não atender à condição, nenhum outro item será considerado.


## Examples

### Example #1
Localizar a linha com o menor valor na coluna \[a\] com a condição \[a\] &lt; 3 na tabela. As linhas são classificadas antes que o filtro seja aplicado.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2
Localizar a linha com o menor valor na coluna \[a\] com a condição \[b\] &lt; 0 na tabela. As linhas são classificadas antes que o filtro seja aplicado.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering

---
title: Table.MaxN
---

# Table.MaxN


Retorna as linhas maiores usando os critérios especificados.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Retorna as linhas maiores na <code>table</code>, com base na <code>comparisonCriteria</code>.    Depois que as linhas forem classificadas, o parâmetro <code>countOrCondition</code> deverá ser especificado para filtrar ainda mais o resultado. Observe que o algoritmo de classificação não garante um resultado fixo classificado. O parâmetro <code>countOrCondition</code> pode assumir vários formatos:    <ul>        <li> Se um número for especificado, uma lista de até <code>countOrCondition</code> itens em ordem crescente será retornada. </li>        <li> Se uma condição for especificada, uma lista dos itens que atenderem inicialmente à condição será retornada. Quando um item não atender à condição, nenhum outro item será considerado. </li> </ul>


## Examples

### Example #1 
Localizar a linha com o maior valor na coluna [a] com a condição [a] &gt; 0 na tabela. As linhas são classificadas antes que o filtro seja aplicado.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 6, b = 2],
    [a = 2, b = 4]
})
```


### Example #2 
Localizar a linha com o maior valor na coluna [a] com a condição [b] &gt; 0 na tabela. As linhas são classificadas antes que o filtro seja aplicado.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] > 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering

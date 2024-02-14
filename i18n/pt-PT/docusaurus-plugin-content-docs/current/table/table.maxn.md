---
title: Table.MaxN
---

# Table.MaxN


Devolve as maiores linhas utilizando os critérios especificados.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Devolve as maiores linhas em <code>table</code> com base no <code>comparisonCriteria</code>.    Após as linhas serem ordenadas, o parâmetro <code>countOrCondition</code> tem de ser especificado para filtrar melhor o resultado. Note que o algoritmo de ordenação não pode garantir um resultado ordenado fixo. O parâmetro <code>countOrCondition</code> pode assumir vários formatos:    <ul>        <li> Se for especificado um número, é devolvida uma lista com um máximo de <code>countOrCondition</code> itens por ordem ascendente. </li>        <li> Se for especificada uma condição, é devolvida uma lista dos itens que satisfizerem a condição inicialmente. Quando um item não satisfizer a condição, não serão considerados mais itens. </li>  </ul>


## Examples

### Example #1 
Localizar a linha com o valor mais alto na coluna [a] com a condição [a] &gt; 0, na tabela. Lembre-se de que as linhas são ordenadas antes do filtro ser aplicado.
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
Localizar a linha com o valor mais alto na coluna [a] com a condição [b] &gt; 0, na tabela. Lembre-se de que as linhas são ordenadas antes do filtro ser aplicado.
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

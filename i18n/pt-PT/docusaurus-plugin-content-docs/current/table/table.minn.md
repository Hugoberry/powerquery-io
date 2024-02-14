---
title: Table.MinN
---

# Table.MinN


Devolve as menores linhas utilizando os critérios especificados.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Devolve as menores linhas em <code>table</code> com base no <code>comparisonCriteria</code>. Após as linhas serem ordenadas, o parâmetro <code>countOrCondition</code> tem de ser especificado para filtrar mais o resultado. Note que o algorítmo de ordenação não pode garantir um resultado de ordenação fixo. O parâmetro <code>countOrCondition</code> pode assumir vários formatos:    <ul>        <li> Se for especificado um número, é devolvida uma lista com um máximo de <code>countOrCondition</code> itens por ordem ascendente. </li>        <li> Se for especificada uma condição, é devolvida uma lista dos itens que satisfizerem a condição inicialmente. Quando um item não satisfizer a condição, não serão considerados mais itens. </li> </ul>


## Examples

### Example #1 
Localizar a linha com o valor mais baixo na coluna [a] com a condição [a] &lt; 3, na tabela. Lembre-se de que as linhas são ordenadas antes do filtro ser aplicado.
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
Localizar a linha com o valor mais baixo na coluna [a] com a condição [b] &lt; 0, na tabela . Lembre-se de que as linhas são ordenadas antes do filtro ser aplicado.
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

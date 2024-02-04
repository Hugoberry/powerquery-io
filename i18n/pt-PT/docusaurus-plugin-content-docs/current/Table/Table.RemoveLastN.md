---
title: Table.RemoveLastN
---

# Table.RemoveLastN


## Description

Devolve uma tabela com as últimas N linhas removidas.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Devolve uma tabela que não contém as últimas <code>countOrCondition</code> linhas da tabela <code>table</code>.        O número de linhas removidas depende do parâmetro opcional <code>countOrCondition</code>.    <ul>    <li> Se <code>countOrCondition</code> for omitido, só é removida a última linha. </li>    <li> Se <code>countOrCondition</code> for um número, será removido esse número de linhas (a partir do fim). </li>    <li> Se <code>countOrCondition</code> for uma condição, serão removidas as linhas que satisfaçam a condição até que uma linha não satisfaça a condição.</li>    </ul>


## Examples

### Example #1 
Remover a última linha da tabela.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Remover as últimas linhas em que [CustomerID] &gt; 2 da tabela.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] >= 2
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations

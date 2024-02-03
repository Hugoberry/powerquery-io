---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


## Description

Retorna uma tabela com as primeiras linhas de contagem ignoradas.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Retorna uma tabela que não contém o primeiro número especificado de linhas, <code>countOrCondition</code>, da tabela <code>table</code>.    O número de linhas removidas depende do parâmetro opcional <code>countOrCondition</code>.    <ul>    <li> Se <code>countOrCondition</code> for omitido, somente a primeira linha será removida. </li>    <li> Se <code>countOrCondition</code> for um número, essas várias linhas (começando na parte superior) serão removidas. </li>    <li> Se <code>countOrCondition</code> for uma condição, as linhas que atenderem à condição serão removidas até que uma linha não esteja em conformidade com a condição.</li>    </ul>


## Examples

### Example #1 
Remover a primeira linha da tabela.
```powerquery
Table.RemoveFirstN(
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
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2 
Remover as duas primeiras linhas da tabela.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #3 
Remover da tabela as primeiras linhas em que [CustomerID] &lt;=2.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] <= 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations

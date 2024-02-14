---
title: Table.LastN
---

# Table.LastN


Retorna o último número especificado de linhas.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Retorna as últimas linhas da tabela <code>table</code>, dependendo do valor de <code>countOrCondition</code>:    <ul>    <li> Se <code>countOrCondition</code> for um número, essas várias linhas serão retornados, começando na posição - <code>countOrCondition</code>). </li>    <li> Se <code>countOrCondition</code> for uma condição, as linhas que atenderem à condição serão retornadas na posição crescente até que uma linha não atenda à condição.</li></ul>


## Examples

### Example #1 
Localizar as duas últimas linhas da tabela.
```powerquery
Table.LastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Localizar as últimas linhas em que [a] &gt; 0 na tabela.
```powerquery
Table.LastN(
    Table.FromRecords({
        [a = -1, b = -2],
        [a = 3, b = 4],
        [a = 5, b = 6]
    }),
    each _ [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 3, b = 4],
    [a = 5, b = 6]
})
```




## Category
Table.Row operations

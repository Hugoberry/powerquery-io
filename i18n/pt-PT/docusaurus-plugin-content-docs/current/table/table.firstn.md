---
title: Table.FirstN
---

# Table.FirstN


Devolve as primeiras linhas de contagem especificadas.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Devolve as primeiras linhas da tabela <code>table</code>, dependendo do valor de <code>countOrCondition</code>:    <ul>    <li> Se <code>countOrCondition</code> for um número, será devolvido esse número de linhas (a partir do início). </li>    <li> Se <code>countOrCondition</code> for uma condição, serão devolvidas as linhas que satisfaçam a condição até que uma linha não satisfaça a condição.</li></ul>


## Examples

### Example #1 
Determinar as primeiras duas linhas da tabela.
```powerquery
Table.FirstN(
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
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Determinar as primeiras linhas em que [a] &gt; 0 na tabela.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = -5, b = -6]
    }),
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2],
    [a = 3, b = 4]
})
```




## Category
Table.Row operations

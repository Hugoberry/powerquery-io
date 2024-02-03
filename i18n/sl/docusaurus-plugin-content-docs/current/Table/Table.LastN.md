---
title: Table.LastN
---

# Table.LastN


## Description

Vrne zadnje navedeno število vrstic.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Vrne zadnje vrstice iz tabele <code>table</code>, odvisno od vrednosti <code>countOrCondition</code>:    <ul>    <li> Če je <code>countOrCondition</code> število, bo vrnjenih toliko vrstic z začetkom na položaju (konec – <code>countOrCondition</code>). </li>    <li> Če je <code>countOrCondition</code> pogoj, bodo v naraščajočem vrstnem redu vrnjene vrstice, ki izpolnjujejo pogoj, dokler določena vrstica ne izpolnjuje pogoja.</li></ul>


## Examples

### Example #1 
Poiščite zadnji dve vrstici tabele.
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
Poiščite zadnje vrstice v tabeli, kjer je [a] &gt; 0.
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

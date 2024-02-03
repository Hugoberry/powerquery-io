---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


## Description

Vrne tabelo, v kateri je preskočenih prvih &#34;število&#34; vrstic.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Vrne tabelo, ki ne vsebuje prvega navedenega števila vrstic <code>countOrCondition</code> tabele <code>table</code>.    Število odstranjenih vrstic je odvisno od izbirnega parametra <code>countOrCondition</code>.    <ul>    <li> Če je <code>countOrCondition</code> izpuščen, je odstranjena le prva vrstica. </li>    <li> Če je <code>countOrCondition</code> število, bo odstranjenih toliko vrstic (z začetkom na vrhu). </li>    <li> Če je <code>countOrCondition</code> pogoj, bodo odstranjene vrstice, ki izpolnjujejo pogoj, dokler določena vrstica ne izpolnjuje pogoja.</li>    </ul>


## Examples

### Example #1 
Odstranite prvo vrstico tabele.
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
Odstranite prvi dve vrstici tabele.
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
Odstranite prve vrstice, kjer je [IDStranke] &lt;= 2 v tabeli.
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

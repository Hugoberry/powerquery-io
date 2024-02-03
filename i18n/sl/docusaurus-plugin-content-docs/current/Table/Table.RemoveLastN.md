---
title: Table.RemoveLastN
---

# Table.RemoveLastN


## Description

Vrne tabelo, iz katere je odstranjenih zadnjih N vrstic.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Vrne tabelo, ki ne vsebuje zadnjih <code>countOrCondition</code> vrstic tabele <code>table</code>.        Število odstranjenih vrstic je odvisno od izbirnega parametra <code>countOrCondition</code>.    <ul>    <li> Če je <code>countOrCondition</code> izpuščen, je odstranjena samo zadnja vrstica. </li>    <li> Če je <code>countOrCondition</code> število, bo odstranjenih toliko vrstic (z začetkom na dnu). </li>    <li> Če je <code>countOrCondition</code> pogoj, bodo odstranjene vrstice, ki izpolnjujejo pogoj, dokler določena vrstica ne izpolnjuje pogoja.</li>    </ul>


## Examples

### Example #1 
Odstranite zadnjo vrstico tabele.
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
Odstranite zadnje vrstice, kjer je [IDStranke] &gt; 2 v tabeli.
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

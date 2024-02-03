---
title: Table.SelectRows
---

# Table.SelectRows


## Description

Kijelöli a feltételnek megfelelő sorokat.


## Syntax

```powerquery
Table.SelectRows(
    table as table,
    condition as function
) as table
```


## Details

Azon sorok tábláját adja vissza a(z) <code>table</code> táblából, amelyek megfelelnek a kijelölésnek (<code>condition</code>).


## Examples

### Example #1 
Válassza ki a tábla azon sorait, ahol a [CustomerID] oszlop értékei 2-nél nagyobbak.
```powerquery
Table.SelectRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] > 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2 
Válassza ki a tábla azon sorait, ahol a nevek nem tartalmazzák a „B” karaktert.
```powerquery
Table.SelectRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each not Text.Contains([Name], "B")
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




## Category
Table.Row operations

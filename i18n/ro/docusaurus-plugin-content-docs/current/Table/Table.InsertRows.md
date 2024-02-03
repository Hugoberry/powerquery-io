---
title: Table.InsertRows
---

# Table.InsertRows


## Description

Inserează o listă de rânduri în tabel în poziţia specificată.


## Syntax

```powerquery
Table.InsertRows(
    table as table,
    offset as number,
    rows as list
) as table
```


## Details

Returnează un tabel cu lista de rânduri, <code>rows</code>, inserată în <code>table</code> în poziția dată, <code>offset</code>. Fiecare coloană din rândul de inserat trebuie să corespundă tipurilor de coloane din tabel.


## Examples

### Example #1 
Inserați rândul în tabel la poziția 1.
```powerquery
Table.InsertRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    1,
    {[CustomerID = 3, Name = "Paul", Phone = "543-7890"]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Inserați două rânduri în tabel la poziția 1.
```powerquery
Table.InsertRows(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    1,
    {
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }
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




## Category
Table.Row operations

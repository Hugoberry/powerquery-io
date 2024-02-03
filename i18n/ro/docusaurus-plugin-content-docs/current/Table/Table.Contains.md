---
title: Table.Contains
---

# Table.Contains


## Description

Indică dacă înregistrarea specificată apare ca rând în tabel.


## Syntax

```powerquery
Table.Contains(
    table as table,
    row as record,
    optional equationCriteria as any
) as logical
```


## Details

Indică dacă înregistrarea specificată, <code>row</code>, apare ca rând în <code>table</code>.    Un parametru opţional <code>equationCriteria</code> poate fi specificat pentru a controla comparaţia dintre rândurile tabelului.


## Examples

### Example #1 
Determinați dacă tabelul conține rândul.
```powerquery
Table.Contains(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    [Name = "Bob"]
)
```

Result: 
```powerquery
true
```


### Example #2 
Determinați dacă tabelul conține rândul.
```powerquery
Table.Contains(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    [Name = "Ted"]
)
```

Result: 
```powerquery
false
```


### Example #3 
Determinați dacă tabelul conține rândul, comparând numai coloana [Nume].
```powerquery
Table.Contains(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    [CustomerID = 4, Name = "Bob"],
    "Name"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership

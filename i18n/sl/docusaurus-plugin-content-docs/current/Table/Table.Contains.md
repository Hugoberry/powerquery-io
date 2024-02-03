---
title: Table.Contains
---

# Table.Contains


## Description

Označuje, ali je navedeni zapis prikazan kot vrstica v tabeli.


## Syntax

```powerquery
Table.Contains(
    table as table,
    row as record,
    optional equationCriteria as any
) as logical
```


## Details

Označuje, ali je navedeni zapis, <code>row</code>, prikazan kot vrstica v <code>table</code>.    Določite lahko izbirni parameter <code>equationCriteria</code> za nadzor primerjave med vrsticami tabele.


## Examples

### Example #1 
Ugotovite, ali tabela vsebuje vrstico.
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
Ugotovite, ali tabela vsebuje vrstico.
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
Ugotovite, ali tabela vsebuje vrstico, tako da primerjate samo stolpec [Ime].
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

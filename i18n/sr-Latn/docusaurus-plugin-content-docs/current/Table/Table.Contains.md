---
title: Table.Contains
---

# Table.Contains


## Description

Pokazuje da li se navedeni zapis pojavljuje kao red u tabeli.


## Syntax

```powerquery
Table.Contains(
    table as table,
    row as record,
    optional equationCriteria as any
) as logical
```


## Details

Pokazuje da li se navedeni zapis, <code>row</code>, pojavljuje kao red u <code>table</code>.    Može se navesti opcionalni parametar <code>equationCriteria</code> radi kontrole poređenja redova iz tabele.


## Examples

### Example #1 
Utvrđivanje da li tabela sadrži red.
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
Utvrđivanje da li tabela sadrži red.
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
Utvrđivanje da li tabela sadrži red poređenjem samo kolone [Ime].
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

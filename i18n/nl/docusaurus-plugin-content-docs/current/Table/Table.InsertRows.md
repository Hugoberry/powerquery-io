---
title: Table.InsertRows
---

# Table.InsertRows


## Description

Voegt een lijst met rijen op de opgegeven positie in de tabel in.


## Syntax

```powerquery
Table.InsertRows(
    table as table,
    offset as number,
    rows as list
) as table
```


## Details

Retourneert een tabel met de lijst rijen, <code>rows</code>, die wordt ingevoegd in de <code>table</code> op de opgegeven positie, <code>offset</code>. Elke kolom die in de rij wordt ingevoegd, moet overeenkomen met de kolomtypen van de tabel.


## Examples

### Example #1 
De rij op positie 1 in de tabel invoegen.
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
Voegt twee rijen op positie 1 in de tabel in.
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

---
title: Table.ContainsAll
---

# Table.ContainsAll


## Description

Geeft aan of alle opgegeven records als rijen in de tabel worden weergegeven.


## Syntax

```powerquery
Table.ContainsAll(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Geeft aan of alle opgegeven records in de lijst met records <code>rows</code> als rijen in de <code>table</code> worden weergegeven.    Er kan een optionele parameter <code>equationCriteria</code> worden opgegeven voor het aansturen van de vergelijking tussen de rijen van de tabel.


## Examples

### Example #1 
Bepalen of de tabel alle rijen bevat waarbij alleen de kolom [CustomerID] wordt vergeleken.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    },
    "CustomerID"
)
```

Result: 
```powerquery
true
```


### Example #2 
Bepalen of de tabel alle rijen bevat.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    }
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership

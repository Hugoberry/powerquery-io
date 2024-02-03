---
title: Table.Split
---

# Table.Split


## Description

Hiermee wordt de opgegeven tabel gesplitst in een lijst met tabellen met het opgegeven paginaformaat.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

Hiermee wordt <code>table</code> gesplitst in een lijst met tabellen, waarbij het eerste element van de lijst een tabel is met de eerste <code>pageSize</code> rijen uit    de brontabel, het volgende element van de lijst is een tabel met de volgende <code>pageSize</code> rijen uit de brontabel, enzovoort.


## Examples

### Example #1 
Hiermee wordt een tabel met vijf records gesplitst in tabellen die elk twee records bevatten.
```powerquery
let
    Customers = Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"],
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
in
    Table.Split(Customers, 2)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    Table.FromRecords({
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"]
    }),
    Table.FromRecords({
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
}
```




## Category
Table.Transformation

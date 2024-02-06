---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


Returnerer en tabel med kun de rækker fra inputtabellen, der indeholder en fejl i mindst en af cellerne. Hvis der er angivet en kolonneliste, er det kun cellerne i de angivne kolonner, der undersøges for fejl.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

Returnerer en tabel med kun de rækker fra inputtabellen, der indeholder en fejl i mindst en af cellerne. Hvis der er angivet en kolonneliste, er det kun cellerne i de angivne kolonner, der undersøges for fejl.


## Examples

### Example #1 
Vælg navne på kunder, hvor der er fejl i deres rækker.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations

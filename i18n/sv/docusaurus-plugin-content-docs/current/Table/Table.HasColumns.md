---
title: Table.HasColumns
---

# Table.HasColumns


## Description

Anger om tabellen innehåller den eller de angivna kolumnerna.


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Details

Anger om <code>table</code> innehåller den eller de angivna kolumnerna, <code>columns</code>. Returnerar <code>true</code> om tabellen innehåller kolumnen eller kolumnerna. Annars returneras <code>false</code>.


## Examples

### Example #1 
Kontrollera om tabellen innehåller kolumnen [Name].
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
true
```


### Example #2 
Kontrollera om tabellen innehåller kolumnerna [Name] och [PhoneNumber].
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"Name", "PhoneNumber"}
)
```

Result: 
```powerquery
false
```




## Category
Table.Column operations

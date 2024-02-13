---
title: Table.HasColumns
---

# Table.HasColumns


Angiver, om tabellen indeholder den eller de angivne kolonner.


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Remarks

Angiver, om tabellen <code>table</code> indeholder den eller de angivne kolonne(r), <code>columns</code>. Returnerer <code>true</code>, hvis tabellen indeholder den eller de angivne kolonne(r). Ellers returneres <code>false</code>.


## Examples

### Example #1 
Find ud af, om tabellen indeholder kolonnen [Name].
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
Find ud af, om tabellen indeholder kolonnerne [Name] og [PhoneNumber].
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

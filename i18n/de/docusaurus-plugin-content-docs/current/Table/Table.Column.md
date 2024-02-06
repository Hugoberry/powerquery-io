---
title: Table.Column
---

# Table.Column


Gibt eine angegebene Spalte mit Daten aus der Tabelle als Liste zurück.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Remarks

Gibt die durch "<code>column</code>" angegebene Spalte mit Daten aus der Tabelle "<code>table</code>" als Liste zurück.


## Examples

### Example #1 
Gibt die Werte aus der Spalte &#34;[Name]&#34; in der Tabelle zurück.
```powerquery
Table.Column(
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
{"Bob", "Jim", "Paul", "Ringo"}
```




## Category
Table.Column operations

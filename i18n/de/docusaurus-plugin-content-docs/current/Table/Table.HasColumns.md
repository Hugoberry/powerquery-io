---
title: Table.HasColumns
---

# Table.HasColumns


## Description

Gibt an, ob die Tabelle die angegebene(n) Spalte(n) enthält.


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Details

Gibt an, ob die <code>table</code> die angegebene(n) Spalte(n) <code>columns</code> enthält. Gibt <code>true</code> zurück, falls die Tabelle die Spalte(n) enthält. Andernfalls wird <code>false</code> zurückgegeben.


## Examples

### Example #1 
Ermittelt, ob die Tabelle die Spalte &#34;[Name]&#34; enthält.
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
Ermittelt, ob die Tabelle die Spalten &#34;[Name]&#34; und &#34;[PhoneNumber]&#34; enthält.
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

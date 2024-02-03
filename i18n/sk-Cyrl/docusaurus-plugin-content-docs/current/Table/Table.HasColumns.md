---
title: Table.HasColumns
---

# Table.HasColumns


## Description

Udáva, či tabuľka obsahuje zadané stĺpce.


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Details

Udáva, či tabuľka <code>table</code> obsahuje zadané stĺpce <code>columns</code>. Vráti hodnotu <code>true</code>, ak tabuľka obsahuje stĺpce, inak vráti hodnotu <code>false</code>.


## Examples

### Example #1 
Určte, či tabuľka obsahuje stĺpec [Name].
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
Zistite, či tabuľka obsahuje stĺpce [Name] a [PhoneNumber].
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

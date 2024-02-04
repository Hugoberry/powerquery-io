---
title: Table.ToRecords
---

# Table.ToRecords


## Description

Konvertiert eine Tabelle in eine Liste mit Datensätzen.


## Syntax

```powerquery
Table.ToRecords(
    table as table
) as list
```


## Details

Konvertiert eine Tabelle (<code>table</code>) in eine Liste mit Datensätzen.


## Examples

### Example #1 
Konvertiert die Tabelle in eine Liste mit Datensätzen.
```powerquery
Table.ToRecords(
    Table.FromRows(
        {
            {1, "Bob", "123-4567"},
            {2, "Jim", "987-6543"},
            {3, "Paul", "543-7890"}
        },
        {"CustomerID", "Name", "Phone"}
    )
)
```

Result: 
```powerquery
{
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
}
```




## Category
Table.Conversions

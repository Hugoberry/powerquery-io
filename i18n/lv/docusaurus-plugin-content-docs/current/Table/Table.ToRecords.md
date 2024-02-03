---
title: Table.ToRecords
---

# Table.ToRecords


## Description

Tabula tiek pārvērsta ierakstu sarakstā.


## Syntax

```powerquery
Table.ToRecords(
    table as table
) as list
```


## Details

Tabula <code>table</code> tiek pārvērsta ierakstu sarakstā.


## Examples

### Example #1 
Tabulu pārvērtiet ierakstu sarakstā.
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

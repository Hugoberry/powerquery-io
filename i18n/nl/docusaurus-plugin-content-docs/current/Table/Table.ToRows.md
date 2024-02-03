---
title: Table.ToRows
---

# Table.ToRows


## Description

Maakt een lijst met geneste lijsten met rijwaarden uit een tabel.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Maakt een lijst met geneste lijsten van de tabel, <code>table</code>.  Elk lijstitem is een interne lijst met de rijwaarden.


## Examples

### Example #1 
Een lijst met de rijwaarden uit de tabel maken.
```powerquery
Table.ToRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
}
```




## Category
Table.Conversions

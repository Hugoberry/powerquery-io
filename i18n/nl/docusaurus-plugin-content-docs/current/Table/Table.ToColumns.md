---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Maakt een lijst met geneste lijsten met kolomwaarden uit een tabel.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Maakt een lijst met geneste lijsten van de tabel, <code>table</code>.  Elk lijstitem is een interne lijst met de kolomwaarden.


## Examples

### Example #1 
Een lijst met de kolomwaarden uit de tabel maken.
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions

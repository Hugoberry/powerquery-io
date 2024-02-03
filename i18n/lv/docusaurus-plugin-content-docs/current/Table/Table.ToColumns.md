---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Tiek izveidots saraksts ar kolonnu vērtību ligzdotajiem sarakstiem no tabulas.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Tiek izveidots saraksts ar ligzdotajiem sarakstiem no tabulas <code>table</code>.  Katrs saraksta vienums ir iekšējs saraksts, kas ietver kolonnu vērtības.


## Examples

### Example #1 
Tiek izveidots kolonnu vērtību saraksts no tabulas.
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

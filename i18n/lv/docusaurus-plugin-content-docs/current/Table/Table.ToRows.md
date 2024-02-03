---
title: Table.ToRows
---

# Table.ToRows


## Description

Tiek izveidots saraksts ar rindu vērtību ligzdotajiem sarakstiem no tabulas.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Tiek izveidots saraksts ar ligzdotajiem sarakstiem no tabulas <code>table</code>.  Katrs saraksta vienums ir iekšējs saraksts, kas ietver rindu vērtības.


## Examples

### Example #1 
Izveidojiet rindu vērtību sarakstu no tabulas.
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

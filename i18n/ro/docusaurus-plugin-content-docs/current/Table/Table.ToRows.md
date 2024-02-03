---
title: Table.ToRows
---

# Table.ToRows


## Description

Creează o listă de liste imbricate ale valorilor pentru rând dintr-un tabel.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Creează o listă de liste imbricate din tabel, <code>table</code>.  Fiecare element de listă este o listă interioară ce conţine valorile pentru rând.


## Examples

### Example #1 
Creați o listă de valori pentru rând din tabel.
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

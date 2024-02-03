---
title: Table.ToRows
---

# Table.ToRows


## Description

Opretter en liste over indlejrede lister over rækkeværdier fra en tabel.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Opretter en liste over indlejrede lister ud fra tabellen <code>table</code>.  De enkelte listeelementer er en indre liste, der indeholder rækkeværdierne.


## Examples

### Example #1 
Opret en liste over rækkeværdier ud fra tabellen.
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

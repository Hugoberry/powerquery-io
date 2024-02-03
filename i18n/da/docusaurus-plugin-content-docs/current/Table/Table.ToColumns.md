---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Opretter en liste over indlejrede lister over kolonneværdier fra en tabel.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Opretter en liste over indlejrede lister ud fra tabellen <code>table</code>.  De enkelte listeelementer er en indre liste, der indeholder kolonneværdierne.


## Examples

### Example #1 
Opret en liste over kolonneværdier ud fra tabellen.
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

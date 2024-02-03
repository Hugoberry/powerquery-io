---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Creează o listă de liste imbricate ale valorilor pentru coloană dintr-un tabel.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Creează o listă de liste imbricate din tabel, <code>table</code>.  Fiecare element de listă este o listă interioară ce conţine valorile pentru coloană.


## Examples

### Example #1 
Creați o listă de valori pentru coloană din tabel.
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

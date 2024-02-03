---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Kreira listu koja se sastoji od ugnežđenih lista vrednosti kolona iz tabele.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Kreira listu koja se sastoji od ugnežđenih lista iz tabele, <code>table</code>.  Svaka stavka sa liste je unutrašnja lista koja sadrži vrednosti kolona.


## Examples

### Example #1 
Kreiranje liste sa vrednostima kolona od tabele.
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

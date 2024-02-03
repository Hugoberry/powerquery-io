---
title: Table.ToRows
---

# Table.ToRows


## Description

Kreira listu koja se sastoji od ugnežđenih lista vrednosti redova iz tabele.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Kreira listu koja se sastoji od ugnežđenih lista iz tabele, <code>table</code>.  Svaka stavka sa liste je unutrašnja lista koja sadrži vrednosti redova.


## Examples

### Example #1 
Kreiranje liste sa vrednostima redova od tabele.
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

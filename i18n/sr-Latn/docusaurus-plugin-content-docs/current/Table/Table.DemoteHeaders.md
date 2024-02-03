---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


## Description

Spušta nivo zaglavlja kolona na prvi red vrednosti.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Details

Spušta nivo zaglavlja kolona (tj. imena kolona) na prvi red vrednosti. Podrazumevana imena kolona su „Kolona 1“, „Kolona 2“ i tako dalje.


## Examples

### Example #1 
Spuštanje nivoa prvog reda vrednosti u tabeli.
```powerquery
Table.DemoteHeaders(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "CustomerID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Table.Column operations

---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


## Description

Abbassa di livello le intestazioni di colonna nella prima riga di valori.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Details

Abbassa di livello le intestazioni di colonna, ad esempio i nomi di colonna, nella prima riga di valori. I nomi di colonna predefiniti sono "Column1", "Column2" e così via.


## Examples

### Example #1 
Abbassare di livello la prima riga di valori nella tabella.
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

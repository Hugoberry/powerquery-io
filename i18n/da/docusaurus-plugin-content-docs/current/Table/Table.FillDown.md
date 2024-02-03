---
title: Table.FillDown
---

# Table.FillDown


## Description

Overfører værdien af en tidligere celle til cellerne med null-værdier nedenfor i kolonnen.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Details

Returnerer en tabel fra den angivne <code>table</code>, hvor værdien af en tidligere celle overføres til cellerne med null-værdier nedenfor i den angivne <code>columns</code>.


## Examples

### Example #1 
Returner en tabel med null-værdier i kolonnen [Place] udfyldt med værdien oven over dem fra tabellen.
```powerquery
Table.FillDown(
    Table.FromRecords({
        [Place = 1, Name = "Bob"],
        [Place = null, Name = "John"],
        [Place = 2, Name = "Brad"],
        [Place = 3, Name = "Mark"],
        [Place = null, Name = "Tom"],
        [Place = null, Name = "Adam"]
    }),
    {"Place"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Place = 1, Name = "Bob"],
    [Place = 1, Name = "John"],
    [Place = 2, Name = "Brad"],
    [Place = 3, Name = "Mark"],
    [Place = 3, Name = "Tom"],
    [Place = 3, Name = "Adam"]
})
```




## Category
Table.Transformation

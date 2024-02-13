---
title: Table.FillUp
---

# Table.FillUp


Overfører værdien i en celle til cellerne med null-værdier ovenfor i kolonnen.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Remarks

Returnerer en tabel fra den angivne <code>table</code>, hvor værdien af den næste celle overføres til cellerne med null-værdier ovenfor i den angivne <code>columns</code>.


## Examples

### Example #1 
Returner en tabel med null-værdier i kolonnen [Column2] udfyldt med værdien under dem fra tabellen.
```powerquery
Table.FillUp(
    Table.FromRecords({
        [Column1 = 1, Column2 = 2],
        [Column1 = 3, Column2 = null],
        [Column1 = 5, Column2 = 3]
    }),
    {"Column2"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2],
    [Column1 = 3, Column2 = 3],
    [Column1 = 5, Column2 = 3]
})
```




## Category
Table.Transformation

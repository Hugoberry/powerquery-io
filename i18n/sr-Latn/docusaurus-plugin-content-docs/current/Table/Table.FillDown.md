---
title: Table.FillDown
---

# Table.FillDown


## Description

Prenosi vrednost prethodne ćelije na ćelije bez vrednosti koje se nalaze ispod nje u koloni.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Details

Vraća tabelu iz navedenog <code>table</code>, pri čemu se vrednost prethodne ćelije prenosi na ćelije bez vrednosti koje se nalaze ispod nje u navedenom <code>columns</code>.


## Examples

### Example #1 
Vraćanje tabele bez vrednosti u koloni [Mesto] popunjenoj vrednošću iz tabele koja se nalazi iznad njih.
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

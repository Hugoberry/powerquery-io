---
title: Table.FillDown
---

# Table.FillDown


## Description

Önceki hücrenin değerini bir sütunda alttaki null değerli hücrelere yayar.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Details

Belirtilen <code>table</code> öğesinden önceki hücrenin belirtilen <code>columns</code> içinde aşağıdaki null değerli hücrelere yayıldığı bir tablo döndürür.


## Examples

### Example #1 
Tablodan, [Place] sütunundaki null değerler ve üstündeki değerler ile doldurulan bir tablo döndürür.
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

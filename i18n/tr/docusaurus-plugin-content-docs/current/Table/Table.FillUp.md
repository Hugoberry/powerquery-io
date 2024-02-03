---
title: Table.FillUp
---

# Table.FillUp


## Description

Bir hücrenin değerini bir sütunda yukarıdaki null değerli hücrelere yayar.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Details

Belirtilen <code>table</code> öğesinden sonraki hücrenin belirtilen <code>columns</code> içinde yukarıdaki null değerli hücrelere yayıldığı bir tablo döndürür.


## Examples

### Example #1 
Tablodan, [Column2] sütunundaki null değerler ve altındaki değerler ile doldurulan bir tablo döndürür.
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

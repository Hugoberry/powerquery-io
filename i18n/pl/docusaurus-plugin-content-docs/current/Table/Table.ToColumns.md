---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Tworzy listę zagnieżdżonych list wartości kolumn na podstawie tabeli.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Tworzy listę zagnieżdżonych list na podstawie tabeli <code>table</code>.  Każdy element tej listy to lista wewnętrzna zawierająca wartości kolumny.


## Examples

### Example #1 
Utwórz listę wartości kolumn na podstawie tabeli.
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

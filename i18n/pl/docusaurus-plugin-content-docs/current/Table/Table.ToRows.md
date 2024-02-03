---
title: Table.ToRows
---

# Table.ToRows


## Description

Tworzy listę zagnieżdżonych list wartości wierszy na podstawie tabeli.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Tworzy listę zagnieżdżonych list na podstawie tabeli <code>table</code>.  Każdy element tej listy to lista wewnętrzna zawierająca wartości wiersza.


## Examples

### Example #1 
Utwórz listę wartości wierszy na podstawie tabeli.
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

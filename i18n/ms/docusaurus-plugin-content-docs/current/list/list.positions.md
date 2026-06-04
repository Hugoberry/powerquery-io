---
title: List.Positions
---

# List.Positions


Mengembalikan senarai ofset untuk input.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Mengembalikan senarai ofset untuk senarai input khusus.

-   `list`: Senarai input.

Apabila menggunakan `List.Transform` untuk menukar senarai, senarai kedudukan boleh digunakan untuk memberikan capaian transformasi kepada kedudukan.


## Examples

### Example #1
Cari ofset nilai dalam senarai \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Cipta jadual yang menetapkan ID kepada setiap pelanggan berdasarkan kedudukan pelanggan dalam senarai.
```powerquery
let
    customers = {"Alice", "Bob", "Charlie", "Diana"},
    resultTable =
        Table.FromRecords(
            List.Transform(
                List.Positions(customers),
                each [
                    IDNumber = _ + 1,   // Make it 1-based
                    CustomerName = customers{_}
                ]
            ),
            type table [IDNumber = Int64.Type, CustomerName = text]
        )
in
    resultTable
```

Result: 
```powerquery
#table (type table[IDNumber = Int64.Type, CustomerName = text],
{
    {1, "Alice"},
    {2, "Bob"},
    {3, "Charlie"},
    {4, "Diana"}
})
```




## Category
List.Selection

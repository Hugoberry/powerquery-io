---
title: List.Positions
---

# List.Positions


Menghasilkan daftar offset untuk input.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Menghasilkan daftar offset untuk daftar input yang ditentukan.

-   `list`: Daftar input.

Saat menggunakan `List.Transform` untuk mengubah daftar, daftar posisi dapat digunakan agar transformasi dapat mengakses posisi tersebut.


## Examples

### Example #1
Mencari offset nilai dalam daftar \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Buat tabel yang menetapkan ID untuk setiap pelanggan berdasarkan posisi pelanggan dalam daftar.
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

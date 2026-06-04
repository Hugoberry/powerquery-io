---
title: List.Distinct
---

# List.Distinct


Mengembalikan senarai nilai dengan pendua dialih keluar.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Mengembalikan senarai yang mengandungi semua nilai dalam senarai yang ditentukan dengan pendua yang dialih keluar. Jika senarai yang ditentukan adalah kosong, hasilnya ialah senarai kosong.

-   `list`: Senarai iaitu nilai yang berbeza diekstrak.
-   `equationCriteria`: (Pilihan) Menentukan cara persamaan ditentukan apabila membandingkan nilai. Parameter ini boleh menjadi fungsi pemilih kunci, fungsi pembanding, atau senarai yang mengandungi kedua-dua pemilih kunci dan pembanding.


## Examples

### Example #1
Alih keluar pendua daripada senarai \{1, 1, 2, 3, 3, 3\}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Bermula di hujung senarai, pilih buah yang mempunyai panjang teks yang unik.
```powerquery
let
    Source = {"Apple", "Banana", "Cherry", "Date", "Fig"},
    Result = List.Distinct(List.Reverse(Source), each Text.Length(_))
in
    Result
```

Result: 
```powerquery
{"Fig", "Date", "Cherry", "Apple"}
```


### Example #3
Bermula pada permulaan senarai, pilih buah yang unik sambil mengabaikan huruf besar dan kecil.
```powerquery
let
    Source = {"apple", "Pear", "aPPle", "banana", "ORANGE", "pear", "Banana", "Cherry"},
    Result = List.Distinct(Source, Comparer.OrdinalIgnoreCase)
in
    Result
```

Result: 
```powerquery
{"apple", "Pear", "banana", "ORANGE", "Cherry"}
```


### Example #4
Ekstrak daripada senarai bagi senarai yang pertama dengan nama negara yang unik sambil mengabaikan huruf besar dan kecil. Letakkan senarai yang diekstrak dalam baris jadual baharu.
```powerquery
let
    Source = {
        {"USA", #date(2023, 8, 1), 567},
        {"canada", #date(2023, 8, 1), 254},
        {"Usa", #date(2023, 7, 1), 450},
        {"CANADA", #date(2023, 6, 1), 357},
        {"Panama", #date(2023, 6, 2), 20},
        {"panama", #date(2023, 7, 1), 40}
    },
    DistinctByCountry = List.Distinct(
        Source,
        {each _{0}, Comparer.OrdinalIgnoreCase}
    ),
    ToTable = Table.FromRows(DistinctByCountry, {"Country", "Date", "Value"}),
    ChangeTypes = Table.TransformColumnTypes(
        ToTable, {{"Country", type text}, {"Date", type date}, {"Value", Int64.Type}}
    )
in
    ChangeTypes
```

Result: 
```powerquery
#table(type table[Country = text, Date = date, Value = Int64.Type],
{
    {"USA", #date(2023, 8, 1), 567},
    {"canada", #date(2023, 8, 1), 254},
    {"Panama", #date(2023, 6, 2), 20}
})
```




## Category
List.Selection

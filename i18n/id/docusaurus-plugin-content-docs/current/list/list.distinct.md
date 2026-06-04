---
title: List.Distinct
---

# List.Distinct


Menghasilkan daftar nilai dengan duplikat dihapus.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Menghasilkan daftar yang berisi semua nilai dalam daftar yang ditentukan dengan duplikat yang dihapus. Jika daftar yang ditentukan kosong, hasilnya adalah daftar kosong.

-   `list`: Daftar yang nilainya berbeda diekstrak.
-   `equationCriteria`: (Opsional) Menentukan bagaimana kesetaraan ditentukan saat membandingkan nilai. Parameter ini dapat berupa fungsi pemilih kunci, fungsi pembanding, atau daftar yang berisi pemilih kunci dan pembanding.


## Examples

### Example #1
Menghapus duplikat dari daftar \{1, 1, 2, 3, 3, 3\}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Mulai dari akhir daftar, pilih buah yang memiliki panjang teks unik.
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
Mulai dari awal daftar, pilih buah unik tanpa memperhatikan huruf besar/kecil.
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
Ekstrak dari daftar dari daftar pertama yang berisi nama negara unik tanpa memperhatikan huruf besar/kecil. Letakkan daftar yang diekstrak dalam baris tabel baru.
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

---
title: Text.From
---

# Text.From


Mencipta nilai teks daripada nilai yang ditentukan.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Mengembalikan perwakilan teks bagi nilai yang ditentukan.

-   `value`: Nilai untuk ditukarkan kepada teks. Nilai boleh jadi `nombor`, `tarikh`, `masa`, `tarikhmasa`, `datetimezone`, `logik`, `tempoh`, atau nilai `binari`. Jika nilai yang diberikan ialah `nol`, fungsi ini mengembalikan `nol`.
-   `culture`: (Pilihan) Budaya untuk digunakan apabila menukar nilai kepada teks (sebagai contoh, "en-US").


## Examples

### Example #1
Cipta nilai teks daripada nombor 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Dapatkan persamaan teks bagi tarikh dan masa yang ditentukan.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Dapatkan persamaan teks Jerman bagi tarikh dan masa yang ditentukan.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Dapatkan nilai perduaan daripada teks yang dikodkan sebagai perenambelasan dan ubah nilai kembali kepada teks.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Dapatkan baris dalam jadual yang mengandungi data untuk Perancis dan tukar tarikh kepada teks menggunakan budaya Perancis.
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Convert Dates" = Table.TransformColumns(
        Table.SelectRows(Source, each [Country] = "France"),
        {"Date", each Text.From(_, "fr-FR")}
    )
in
    #"Convert Dates"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"LT-331", "France", "05/10/2024"},
    {"LS-005", "France", "31/12/2023"}
})
```




## Category
Text.Conversions from and to text

---
title: Text.From
---

# Text.From


Membuat nilai teks dari nilai tertentu.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Menghasilkan representasi teks dari nilai yang ditentukan.

-   `value`: Nilai yang akan dikonversi ke teks. Nilai dapat berupa nilai `number`, `date`, `time`, `datetime`, `datetimezone`, `logical`, `duration`, atau `binary`. Jika nilai yang diberikan adalah `null`, fungsi ini akan mengembalikan `null`.
-   `culture`: (Opsional) Kultur yang akan digunakan saat mengonversi nilai menjadi teks (misalnya, "en-US").


## Examples

### Example #1
Membuat nilai teks dari angka 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Dapatkan teks yang setara dengan tanggal dan waktu yang ditentukan.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Dapatkan teks Jerman yang setara dengan tanggal dan waktu yang ditentukan.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Dapatkan nilai biner dari teks yang dikodekan sebagai heksadesimal dan ubah nilai kembali ke teks.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Dapatkan baris dalam tabel yang berisi data untuk Prancis dan konversi tanggal menjadi teks menggunakan kultur Prancis.
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

---
title: List.Max
---

# List.Max


Mengembalikan nilai maksimum atau nilai lalai untuk senarai kosong.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Mengembalikan item maksimum dalam senarai atau nilai lalai pilihan jika senarai kosong.

-   `list`: Senarai nilai.
-   `default`: (Pilihan) Nilai yang dikembalikan jika senarai kosong.
-   `comparisonCriteria`: (Pilihan) Fungsi yang digunakan untuk mengubah nilai sebelum ia dibandingkan. Jika parameter ini ialah `nol`, kemudian nilai dibandingkan tanpa sebarang transformasi.
-   `includeNulls`: (Pilihan) Menunjukkan sama ada nilai `nol` dalam senarai harus disertakan dalam menentukan item maksimum. Nilai lalai ialah `benar`.


## Examples

### Example #1
Cari nilai maksimum dalam senarai yang ditentukan.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Cari nilai maksimum dalam senarai yang ditentukan atau kembalikan -1 jika ia kosong.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Cari item dalam senarai nilai teks yang terakhir mengikut abjad. Jika senarai kosong, kembalikan "tiada".
```powerquery
let
    Source = {"boy", "dog", "girl", "zebra", "cat", "mouse", "rabbit"},
    MaxText = List.Max(Source, "none")
in
    MaxText
```

Result: 
```powerquery
"zebra"
```


### Example #4
Cari tarikh terkini daripada senarai tarikh Jerman. Jika senarai kosong, kembalikan 1 Januari 2000.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.Max(Source, #date(2000, 1, 1), each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
"15.05.2025"
```




## Category
List.Ordering

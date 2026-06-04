---
title: List.Max
---

# List.Max


Menghasilkan nilai maksimum atau nilai default untuk daftar kosong.


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

Menghasilkan item maksimum dalam daftar atau nilai default opsional jika daftar kosong.

-   `list`: Daftar nilai.
-   `default`: (Opsional) Nilai yang akan dikembalikan jika daftar kosong.
-   `comparisonCriteria`: (Opsional) Fungsi yang digunakan untuk mengubah nilai sebelum dibandingkan. Jika parameter ini `null`, maka nilai dibandingkan tanpa transformasi apa pun.
-   `includeNulls`: (Opsional) Menunjukkan apakah nilai `null` dalam daftar harus disertakan dalam menentukan item maksimum. Nilai defaultnya adalah `true`.


## Examples

### Example #1
Temukan nilai maksimum dalam daftar yang ditentukan.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Temukan nilai maksimum dalam daftar yang ditentukan atau berikan -1 jika kosong.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Temukan item dalam daftar nilai teks yang paling akhir secara alfabet. Jika daftar kosong, berikan "none".
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
Temukan tanggal paling baru dari daftar tanggal Jerman. Jika daftar kosong, berikan 1 Januari 2000.
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

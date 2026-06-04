---
title: List.MaxN
---

# List.MaxN


Menghasilkan nilai maksimum dalam daftar. Jumlah nilai yang akan dihasilkan atau kondisi filter harus ditetapkan.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Menghasilkan nilai maksimum dalam daftar yang ditentukan. Setelah baris diurutkan, parameter opsional dapat ditentukan untuk memfilter hasil lebih lanjut.

-   `list`: Daftar nilai.
-   `countOrCondition`: Menentukan jumlah nilai yang akan dihasilkan atau kondisi filter. Jika angka ditentukan, daftar berisi hingga `countOrCondition` item dalam urutan menurun akan dihasilkan. Jika kondisi ditentukan, daftar yang dihasilkan menyertakan semua item yang memenuhi syarat.
-   `comparisonCriteria`: (Opsional) Fungsi yang digunakan untuk mengubah nilai sebelum dibandingkan. Jika parameter ini `null`, maka nilai dibandingkan tanpa transformasi apa pun.
-   `includeNulls`: (Opsional) Menunjukkan apakah nilai `null` dalam daftar harus disertakan dalam menentukan item maksimum. Nilai defaultnya adalah `true`.


## Examples

### Example #1
Temukan 5 nilai teratas dalam daftar yang ditentukan.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Temukan kata-kata dengan lebih dari 3 karakter.
```powerquery
List.MaxN(
    {"boy", "dog", "pony", "cat", "rabbit", "bat"},
    each Text.Length(_) > 3
)
```

Result: 
```powerquery
{"rabbit", "pony"}
```


### Example #3
Temukan tiga tanggal paling baru dari daftar tanggal Jerman.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.MaxN(Source, 3, each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
{
    "15.05.2025",
    "16.01.2025",
    "12.02.2024"
}
```




## Category
List.Ordering

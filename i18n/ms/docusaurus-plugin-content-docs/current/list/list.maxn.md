---
title: List.MaxN
---

# List.MaxN


Mengembalikan nilai maksimum dalam senarai. Bilangan nilai untuk dikembalikan atau syarat penapisan mesti ditentukan.


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

Mengembalikan nilai maksimum dalam senarai yang ditentukan. Selepas baris diisih, parameter pilihan boleh ditentukan untuk menapis hasil dengan lebih lanjut.

-   `list`: Senarai nilai.
-   `countOrCondition`: Menentukan bilangan nilai yang dikembalikan atau syarat penapis. Jika nombor ditentukan, senarai sehingga `countOrCondition` item dalam urutan menurun dikembalikan. Jika syarat ditentukan, senarai yang dikembalikan merangkumi semua item yang memenuhi syarat tersebut.
-   `comparisonCriteria`: (Pilihan) Fungsi yang digunakan untuk mengubah nilai sebelum ia dibandingkan. Jika parameter ini ialah `nol`, kemudian nilai dibandingkan tanpa sebarang transformasi.
-   `includeNulls`: (Pilihan) Menunjukkan sama ada nilai `nol` dalam senarai harus disertakan dalam menentukan item maksimum. Nilai lalai ialah `benar`.


## Examples

### Example #1
Cari 5 nilai teratas dalam senarai yang ditentukan.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Cari perkataan yang mempunyai lebih daripada 3 aksara.
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
Cari tiga tarikh terkini daripada senarai tarikh Jerman.
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

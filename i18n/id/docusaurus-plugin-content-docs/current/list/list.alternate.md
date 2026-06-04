---
title: List.Alternate
---

# List.Alternate


Menghasilkan daftar yang terdiri atas semua elemen offset dengan bilangan ganjil dalam daftar.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Remarks

Menghasilkan daftar yang terdiri atas semua elemen offset dengan bilangan ganjil dalam daftar. Beralih antara mengambil dan melewatkan nilai dari daftar `list`, tergantung pada parameter.

-   `count`: Menetapkan jumlah nilai yang dilewatkan setiap kali.
-   `repeatInterval`: Interval pengulangan opsional untuk menunjukkan jumlah nilai yang ditambahkan di antara nilai yang dilewatkan.
-   `offset`: Parameter offset opsional untuk mulai melewatkan nilai pada offset awal.


## Examples

### Example #1
Membuat daftar dari \{1..10\} yang melewatkan bilangan pertama.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2
Buat daftar dari \{1..10\} yang melewatkan setiap bilangan lainnya.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3
Membuat daftar dari \{1..10\} yang dimulai pada angka 1 dan melewatkan setiap bilangan lainnya.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4
Buat daftar dari \{1..10\} yang dimulai dari 1, melewatkan satu nilai, mempertahankan dua nilai, dan sebagainya.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection

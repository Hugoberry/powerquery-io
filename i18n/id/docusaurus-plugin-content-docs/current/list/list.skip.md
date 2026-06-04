---
title: List.Skip
---

# List.Skip


Menghasilkan daftar yang melewatkan jumlah elemen yang ditetapkan di awal daftar.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Mengembalikan daftar yang melewatkan elemen pertama daftar `list`. Jika `list` merupakan daftar kosong, daftar kosong akan dikembalikan. Fungsi ini mengambil parameter opsional, `countOrCondition`, untuk mendukung melewati beberapa nilai seperti yang tercantum di bawah ini.

-   Jika angka ditentukan, item dilewati hingga jumlah tersebut.
-   Jika kondisi ditentukan, item yang cocok berturut-turut di awal `list` akan dilewati.
-   Jika parameter ini null, perilaku default akan dilakukan.


## Examples

### Example #1
Membuat daftar dari \{1, 2, 3, 4, 5\} tanpa 3 bilangan pertama.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Membuat daftar dari \{5, 4, 2, 6, 1\} yang dimulai dengan bilangan kurang dari 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection

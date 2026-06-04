---
title: List.Random
---

# List.Random


Mengembalikan senarai nombor rawak.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Remarks

Mengembalikan senarai nombor rawak antara 0 dan 1, jika bilangan nilai untuk dijana dan nilai benih pilihan diberikan.

-   `count`: Bilangan nilai rawak untuk dijana.
-   `seed`: *(Pilihan)* Nilai angka yang digunakan untuk menyemai penjana nombor rawak. Jika dikecualikan, senarai unik nombor rawak dijana setiap kali anda memanggil fungsi. Jika anda menentukan nilai benih dengan nombor, setiap panggilan kepada fungsi menjana senarai nombor rawak yang sama.


## Examples

### Example #1
Mencipta senarai 3 nombor rawak.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2
Mencipta senarai 3 nombor rawak, menentukan nilai benih.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators

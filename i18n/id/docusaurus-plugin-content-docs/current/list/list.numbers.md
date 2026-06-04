---
title: List.Numbers
---

# List.Numbers


Menghasilkan daftar angka dengan nilai awal, jumlah, dan nilai inkremental opsional tertentu.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

Menghasilkan daftar angka dengan nilai awal, jumlah, dan nilai inkremental opsional tertentu. Nilai inkremental default adalah 1.

-   `start`: Nilai awal dalam daftar.
-   `count`: Jumlah nilai yang akan dibuat.
-   `increment`: *(Opsional)* Nilai kenaikan. Jika dihilangkan, nilai akan diinkrementasi sebesar 1.


## Examples

### Example #1
Membuat daftar 10 angka berurutan yang dimulai pada angka 1.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2
Membuat daftar 10 angka yang dimulai pada angka 1, dengan inkremental sebesar 2 untuk setiap angka berikutnya.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators

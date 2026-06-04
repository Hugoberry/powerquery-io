---
title: List.RemoveLastN
---

# List.RemoveLastN


Mengembalikan senarai yang mengalih keluar bilangan elemen yang ditentukan daripada hujung senarai.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Mengembalikan senarai yang mengalih keluar `countOrCondition` elemen terakhir daripada hujung senarai `list`. Jika `list` mempunyai kurang daripada unsur `countOrCondition`, senarai kosong dikembalikan.

-   Jika nombor ditentukan, sehingga sebanyak item itu dialih keluar.
-   Jika syarat ditentukan, apa-apa item sepadan yang berturutan pada penghujung `list` dialih keluar.
-   Jika parameter ini nol, hanya satu item dialih keluar.


## Examples

### Example #1
Cipta senarai daripada \{1, 2, 3, 4, 5\} tanpa 3 nombor terakhir.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Cipta senarai daripada \{5, 4, 2, 6, 4\} yang tamat dengan nombor kurang daripada 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions

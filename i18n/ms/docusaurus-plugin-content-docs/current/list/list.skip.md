---
title: List.Skip
---

# List.Skip


Mengembalikan senarai yang melangkau bilangan elemen yang ditentukan di permulaan senarai.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Mengembalikan senarai yang melangkau elemen pertama pada senarai `list`. Jika `list` senarai kosong senarai kosong dikembalikan. Fungsi ini mengambil parameter pilihan, `countOrCondition`, untuk menyokong langkauan berbilang nilai seperti yang disenaraikan di bawah.

-   Jika nombor ditentukan, sehingga sebanyak item itu dilangkau.
-   Jika syarat ditentukan, apa-apa item sepadan yang berturutan pada permulaan `list` dilangkau.
-   Jika parameter ini nol, kelakuan lalai diperhatikan.


## Examples

### Example #1
Cipta senarai daripada \{1, 2, 3, 4, 5\} tanpa 3 nombor pertama.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Cipta senarai daripada \{5, 4, 2, 6, 1\} yang bermula dengan nombor kurang daripada 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection

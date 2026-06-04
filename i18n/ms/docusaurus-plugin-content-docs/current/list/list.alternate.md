---
title: List.Alternate
---

# List.Alternate


Mengembalikan senarai yang terdiri daripada semua elemen ofset bernombor genap dalam senarai.


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

Mengembalikan senarai yang terdiri daripada semua elemen ofset bernombor genap dalam senarai. Bersaling seli antara mengambil dan melangkau nilai daripada senarai `list` bergantung pada parameter.

-   `count`: Menentukan bilangan nilai yang dilangkau pada setiap masa.
-   `repeatInterval`: Selang perulangan pilihan untuk menunjukkan bilangan nilai ditambah antara nilai yang dilangkau.
-   `offset`: Parameter ofset pilihan untuk mula melangkau nilai pada ofset asal.


## Examples

### Example #1
Cipta senarai daripada \{1..10\} yang melangkau nombor pertama.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2
Cipta senarai daripada \{1..10\} yang melangkau setiap nombor lain.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3
Cipta senarai daripada \{1..10\} yang bermula pada 1 dan melangkau setiap nombor lain.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4
Cipta senarai daripada \{1..10\} yang bermula pada 1, melangkau satu nilai, mengekalkan dua nilai dan seterusnya.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection

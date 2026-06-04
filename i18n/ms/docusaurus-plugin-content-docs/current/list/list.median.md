---
title: List.Median
---

# List.Median


Mengembalikan nilai median dalam senarai.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Mengembalikan item median senarai `list`. Fungsi ini mengembalikan `null` jika senarai tidak mengandungi nilai tidak `null` Jika terdapat bilangan item yang lebih banyak, fungsi ini memilih lebih kecil daripada dua item median melainkan senarai itu terdiri sepenuhnya dari datetimes, durasi, nombor atau masa, di mana ia mengembalikan purata dua item.


## Examples

### Example #1
Cari median bagi senarai `{5, 3, 1, 7, 9}`.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering

---
title: List.Median
---

# List.Median


## Description

Mengembalikan nilai median dalam senarai.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

Mengembalikan item median senarai <code>list</code>. Fungsi ini mengembalikan <code> null</code> jika senarai tidak mengandungi nilai tidak <code> null</code>     Jika terdapat bilangan item yang lebih banyak, fungsi ini memilih lebih kecil daripada dua item median melainkan senarai itu    terdiri sepenuhnya dari datetimes, durasi, nombor atau masa, di mana ia mengembalikan purata dua item.


## Examples

### Example #1 
Cari median bagi senarai &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering

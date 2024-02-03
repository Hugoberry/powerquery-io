---
title: List.Difference
---

# List.Difference


## Description

Menghasilkan perbedaan dari dua daftar tertentu.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Mengembalikan item dalam daftar <code>list1</code> yang tidak muncul dalam daftar <code>list2</code>. Nilai duplikat didukung.    Nilai kriteria persamaan opsional, <code>equationCriteria</code>, dapat ditetapkan untuk mengontrol pengujian kesamaan. 


## Examples

### Example #1 
Mencari item dalam daftar \{1, 2, 3, 4, 5} yang tidak muncul dalam \{4, 5, 3}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Mencari item dalam daftar \{1, 2} yang tidak muncul dalam \{1, 2, 3}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations

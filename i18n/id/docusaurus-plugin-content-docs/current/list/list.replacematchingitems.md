---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


Menerapkan setiap penggantian \{ old, new \}.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Remarks

Menjalankan penggantian tertentu pada daftar `list`. Operasi penggantian `replacements` terdiri atas daftar dua nilai, yakni nilai lama dan baru, yang tersedia dalam daftar. Nilai kriteria persamaan opsional, `equationCriteria`, dapat ditetapkan untuk mengontrol pengujian kesamaan.


## Examples

### Example #1
Membuat daftar dari \{1, 2, 3, 4, 5\} dengan mengganti nilai 5 ke -5 dan nilai 1 ke -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions

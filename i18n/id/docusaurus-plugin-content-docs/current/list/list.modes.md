---
title: List.Modes
---

# List.Modes


Menghasilkan daftar nilai yang paling sering muncul dalam daftar.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Mengembalikan item yang paling sering muncul dalam `list`. Jika daftar kosong, kesalahan akan muncul. Jika beberapa item muncul dengan frekuensi maksimum yang sama, semuanya akan dikembalikan. Nilai kriteria perbandingan opsional, `equationCriteria`, dapat ditentukan untuk mengontrol pengujian kesamaan.


## Examples

### Example #1
Mencari item yang paling sering muncul dalam daftar `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages

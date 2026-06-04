---
title: List.Mode
---

# List.Mode


Menghasilkan nilai yang paling sering muncul dalam daftar.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Menghasilkan item yang paling sering muncul dalam `list`. Jika daftar kosong, kesalahan akan muncul. Jika beberapa item muncul dengan frekuensi maksimum yang sama, item terakhir akan dipilih. Nilai kriteria perbandingan opsional, `equationCriteria`, dapat ditentukan untuk mengontrol pengujian kesamaan.


## Examples

### Example #1
Mencari item yang paling sering muncul dalam daftar `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Mencari item yang paling sering muncul dalam daftar `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages

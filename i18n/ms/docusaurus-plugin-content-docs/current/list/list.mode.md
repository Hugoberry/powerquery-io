---
title: List.Mode
---

# List.Mode


Mengembalikan nilai paling kerap dalam senarai.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Mengembalikan item yang paling kerap kelihatan dalam `list`. Jika senarai kosong, ralat dipaparkan. Jika beberapa item kelihatan dengan kekerapan maksimum yang sama, item terakhir dipilih. Nilai kriteria perbandingan pilihan, `equationCriteria`, boleh ditentukan untuk mengawal ujian kesamaan.


## Examples

### Example #1
Cari item yang muncul paling kerap dalam senarai `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Cari item yang muncul paling kerap dalam senarai `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages

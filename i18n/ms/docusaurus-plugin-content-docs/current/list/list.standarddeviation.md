---
title: List.StandardDeviation
---

# List.StandardDeviation


Mengembalikan sampel berdasarkan anggaran sisihan piawai.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Mengembalikan sampel berdasarkan anggaran sisihan piawai bagi nilai dalam senarai, `numbersList`. Jika `numbersList` ialah senarai nombor, nombor dikembalikan. Pengecualian dikembalikan pada senarai kosong atau senarai item yang bukan daripada jenis `number`.


## Examples

### Example #1
Cari sisihan piawai bagi nombor 1 hingga 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages

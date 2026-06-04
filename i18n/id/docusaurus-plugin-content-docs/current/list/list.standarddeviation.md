---
title: List.StandardDeviation
---

# List.StandardDeviation


Menghasilkan perkiraan deviasi standar berdasarkan sampel.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Mengembalikan sampel berdasarkan perkiraan simpangan baku nilai dalam daftar, `numbersList`. Jika `numbersList` adalah daftar angka, angka akan dihasilkan. Kesalahan akan muncul jika daftar kosong atau daftar item bukan bertipe `number`.


## Examples

### Example #1
Mencari deviasi standar angka 1 hingga 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages

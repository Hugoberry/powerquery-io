---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

Menghasilkan perkiraan deviasi standar berdasarkan sampel.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

Mengembalikan sampel berdasarkan perkiraan simpangan baku nilai dalam daftar, <code>numbersList</code>.    Jika <code>numbersList</code> adalah daftar angka, angka akan dihasilkan.    Pengecualian akan dibuat pada daftar kosong atau daftar item yang bukan termasuk jenis <code>number</code>.


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

---
title: Type.ForFunction
---

# Type.ForFunction


## Description

Menghasilkan tipe yang menunjukkan fungsi dengan parameter spesifik dan konstrain tipe hasil.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Details

Membuat <code>function type</code> dari <code>signature</code>, rekaman <code>ReturnType</code> dan <code>Parameters</code>, dan <code>min</code>, jumlah minumum argumen yang diperlukan untuk meminta fungsi.


## Examples

### Example #1 
Membuat jenis untuk fungsi yang mengambil parameter angka bernama X dan menghasilkan angka.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type

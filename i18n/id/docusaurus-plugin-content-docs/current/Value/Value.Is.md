---
title: Value.Is
---

# Value.Is


## Description

Menentukan apakah nilai kompatibel dengan tipe yang ditentukan.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Menentukan apakah nilai kompatibel dengan tipe yang ditentukan. Nilai ini setara dengan operator "is" dalam M, dengan pengecualian bahwa nilai tersebut dapat menerima referensi tipe pengidentifikasi seperti Number.Type.


## Examples

### Example #1 
Bandingkan dua cara untuk menentukan apakah angka kompatibel dengan tipe angka.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types

---
title: Value.As
---

# Value.As


## Description

Menghasilkan nilai jika kompatibel dengan tipe yang ditentukan.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

Menghasilkan nilai jika kompatibel dengan tipe yang ditentukan. Nilai ini setara dengan operator "as" dalam M, dengan pengecualian bahwa nilai tersebut dapat menerima referensi tipe pengidentifikasi seperti Number.Type.


## Examples

### Example #1 
Transmisikan angka ke angka.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Mencoba mentransmisikan nilai teks ke angka.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types

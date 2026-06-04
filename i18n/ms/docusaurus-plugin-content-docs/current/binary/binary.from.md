---
title: Binary.From
---

# Binary.From


Mencipta perduaan daripada nilai yang ditentukan


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Mengembalikan nilai `binari` daripada `value` yang diberikan. Jika `value` yang diberikan adalah `nol`, `Binary.From` mengembalikan `nol`. Jika `value` yang ditentukan ialah `binari`, `value` dikembalikan. Nilai jenis berikut boleh ditukar kepada nilai `binari`:

-   `teks`: Nilai `binari` daripada perwakilan teks. Rujuk `Binary.FromText` untuk butiran.

Jika `value` adalah daripada apa-apa jenis lain, ralat dikembalikan.


## Examples

### Example #1
Dapatkan `binary` nilai bagi `"1011"`.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary

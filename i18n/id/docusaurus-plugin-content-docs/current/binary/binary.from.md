---
title: Binary.From
---

# Binary.From


Membuat biner dari nilai tertentu


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Menghasilkan nilai `binary` dari `value` tertentu. Jika `value` tertentu adalah `null`, `Binary.From` mengembalikan `null`. Jika `value` tertentu adalah `binary`, `value` akan dihasilkan. Nilai tipe berikut dapat dikonversi ke nilai `binary`:

-   `text`: Nilai `binary` dari representasi teks. Untuk mengetahui detailnya, lihat `Binary.FromText`.

Jika `value` adalah tipe lain, kesalahan akan dihasilkan.


## Examples

### Example #1
Mengambil nilai `binary` dari `"1011"`.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary

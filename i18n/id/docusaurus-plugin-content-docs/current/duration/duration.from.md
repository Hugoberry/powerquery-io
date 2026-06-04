---
title: Duration.From
---

# Duration.From


Membuat durasi dari nilai tertentu.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Menghasilkan nilai durasi dari nilai yang diberikan.

-   `value`: Nilai yang digunakan untuk memperoleh durasi. Jika `value` yang diberikan adalah `null`, fungsi ini akan menghasilkan `null`. Jika `value` yang diberikan adalah `duration`, `value` akan dikembalikan. Nilai dalam tipe berikut dapat dikonversi menjadi nilai `duration`:
    -   `text`: Nilai `duration` dari bentuk waktu berlalu dalam format teks (h.j:m:d). Lihat `Duration.FromText` untuk detailnya.
    -   `number`: `duration` setara dengan jumlah hari bulat dan pecahan yang dinyatakan oleh `value`.

Jika `value` memiliki tipe lain, akan menghasilkan kesalahan.


## Examples

### Example #1
Mengkonversi `2.525` ke nilai `duration`.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Konversi nilai teks `"2.05:55:20.34567"` menjadi nilai `duration`.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration

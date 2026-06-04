---
title: Time.From
---

# Time.From


Membuat waktu dari nilai tertentu.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Menghasilkan nilai `time` dari `value` tertentu. `culture` opsional juga dapat disediakan (misalnya, "en-US"). Jika `value` tertentu adalah `null`, `Time.From` menghasilkan `null`. Jika `value` tertentu adalah `time`, dihasilkan `value`. Nilai tipe berikut dapat dikonversi ke nilai `time`:

-   `text`: Nilai `time` dari representasi tekstual. Lihat `Time.FromText` untuk detailnya.
-   `datetime`: Komponen waktu `value`.
-   `datetimezone`: Komponen tanggalwaktu lokal setara dengan `value`.
-   `number`: `time` setara dengan jumlah hari pecahan yang dinyatakan dengan `value`. Jika `value` negatif atau lebih besar atau setara dengan 1, akan menghasilkan kesalahan.

Jika `value` termasuk dalam tipe lain, akan menghasilkan kesalahan.


## Examples

### Example #1
Mengkonversi `0.7575` ke nilai `time`.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Mengkonversi `#datetime(1899, 12, 30, 06, 45, 12)` ke nilai `time`.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time

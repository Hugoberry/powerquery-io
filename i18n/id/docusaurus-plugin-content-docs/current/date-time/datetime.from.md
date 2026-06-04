---
title: DateTime.From
---

# DateTime.From


Membuat datetime dari nilai tertentu.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Menghasilkan nilai `datetime` dari `value` yang diberikan. `culture` opsional juga dapat diberikan (misalnya, "en-US"). Jika `value` yang diberikan adalah `null`, `DateTime.From` akan menghasilkan `null`. Jika `value` yang diberikan adalah `datetime`, `value` akan dihasilkan. Nilai tipe berikut dapat dikonversi ke nilai `datetime`:

-   `text`: Nilai `datetime` dari representasi tekstual. Lihat `DateTime.FromText` untuk mengetahui detailnya.
-   `date`: `datetime` dengan `value` sebagai komponen tanggal dan `12:00:00` sebagai komponen waktu.
-   `datetimezone`: `datetime` lokal yang setara dengan `value`.
-   `time`: `datetime` dengan tanggal yang setara dengan Tanggal Automasi OLE `0` sebagai komponen tanggal dan `value` sebagai komponen waktu.
-   `number`: `datetime` yang setara dengan Tanggal Automasi OLE yang dinyatakan oleh `value`.

Jika `value` termasuk dalam tipe lain, kesalahan akan dihasilkan.


## Examples

### Example #1
Mengkonversi `#time(06, 45, 12)` ke nilai `datetime`.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Mengkonversi `#date(1975, 4, 4)` ke nilai `datetime`.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime

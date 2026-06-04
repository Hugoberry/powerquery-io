---
title: Number.From
---

# Number.From


Membuat bilangan dari nilai tertentu.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Menghasilkan nilai `number` dari `value` tertentu. `culture` opsional juga dapat disediakan (misalnya, "en-US"). Jika `value` tertentu adalah `null`, `Number.From` menghasilkan `null`. Jika `value` tertentu adalah `number`, dihasilkan `value`. Nilai tipe berikut dapat dikonversi ke nilai `number`:

-   `teks`: Nilai `number` dari representasi tekstual. Format teks umum ditangani ("15", "3,423.10", "5.0E-10"). Lihat `Number.FromText` untuk detailnya.
-   `logical`: 1 untuk `true`, 0 untuk `false`.
-   `datetime`: Bilangan titik mengambang presisi ganda yang berisi tanggal setara tanggal Automasi OLE.
-   `datetimezone`: Bilangan titik mengambang presisi ganda yang berisi tanggal Automasi OLE setara tanggal dan waktu lokal `value`.
-   `tanggal`: Bilangan titik mengambang presisi ganda yang berisi tanggal Automasi OLE yang setara.
-   `date`: Dinyatakan dalam hari fraksional.
-   `duration`: Dinyatakan secara hari keseluruhan dan pecahan.

Jika `value` termasuk dalam tipe lain, akan menghasilkan kesalahan.


## Examples

### Example #1
Mengambil nilai `number` dari `"4"`.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Mengambil nilai `number` dari `#datetime(2020, 3, 20, 6, 0, 0)`.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Dapatkan nilai `angka` dari `"12.3%"`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting

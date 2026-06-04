---
title: Date.From
---

# Date.From


Membuat tanggal dari nilai tertentu.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Menghasilkan nilai tanggal dari nilai yang diberikan.

-   `value`: Nilai yang akan dikonversi ke tanggal. Jika nilai yang diberikan adalah `null`, fungsi ini akan mengembalikan `null`. Jika nilai yang diberikan adalah `date`, `value` akan dikembalikan. Nilai dari tipe berikut dapat dikonversi ke nilai `date`:
    -   `text`: Nilai `date` dari representasi tekstual. Lihat `Date.FromText` untuk detailnya.
    -   `datetime`: Komponen tanggal dari `value`.
    -   `datetimezone`: Komponen tanggal dari tanggal dan waktu setempat yang setara dengan `value`.
    -   `number`: Komponen tanggal dari nilai tanggal dan waktu yang setara dengan bilangan desimal yang komponen integralnya adalah jumlah hari sebelum atau sesudah tengah malam, 30 Desember 1899, dan komponen pecahannya mewakili waktu pada hari itu dibagi 24. Misalnya, tengah malam, 31 Desember 1899 diwakili oleh 1,0; pukul 6 pagi, 1 Januari 1900 diwakili oleh 2,25; tengah malam, 29 Desember 1899 diwakili oleh -1,0; dan pukul 6 pagi, 29 Desember 1899 diwakili oleh -1,25. Nilai dasarnya adalah tengah malam, 30 Desember 1899. Nilai minimumnya adalah tengah malam, 1 Januari 0100. Nilai maksimumnya adalah saat terakhir tanggal 31 Desember 9999.
    -   Jika `value` adalah tipe lain, kesalahan akan dikembalikan.
-   `culture`: Kultur nilai yang diberikan (misalnya, "en-US").


## Examples

### Example #1
Mengonversi tanggal dan waktu yang ditentukan menjadi nilai tanggal.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
Mengonversi angka yang ditentukan menjadi nilai tanggal.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
Konversikan tanggal teks Jerman di kolom Tanggal Diposting ke nilai tanggal.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 Januar 2023", 580},
        {"CA-8843", "18 Juli, 2023", 280},
        {"PA-1274", "12 Januar, 2022", 90},
        {"PA-4323", "14 April 2023", 187},
        {"US-1200", "14 Dezember, 2022", 350},
        {"PTY-507", "4 Juni, 2023", 110}
    }),
    #"Filtered rows" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.From(_, "de-DE"), type date}
    )
in
    #"Filtered rows"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2023, 7, 18), 280},
    {"PA-1274", #date(2022, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2022, 12, 14), 350},
    {"PTY-507", #date(2023, 6, 4), 110}
})
```




## Category
Date

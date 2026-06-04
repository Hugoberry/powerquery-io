---
title: DateTimeZone.From
---

# DateTimeZone.From


Mencipta datetimezone daripada nilai yang ditentukan.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Mencipta `datetimezone` daripada nilai yang diberikan.

-   `value`: Nilai yang digunakan untuk mencipta `datetimezone`.
-   `culture`: (Pilihan) Budaya untuk digunakan apabila mengubah nilai (contohnya, "en-US").

Nilai jenis berikut boleh ditukar kepada `datetimezone` value:

-   `teks`: Mengembalikan nilai `datetimezone` daripada perwakilan teks. Rujuk `DateTimeZone.FromText` untuk butiran.
-   `tarikh`: Mengembalikan `datetimezone` dengan `value` sebagai komponen tarikh, `12:00:00 PG` sebagai komponen masa, dan ofset yang sepadan dengan zon waktu tempatan.
-   `tarikhmasa`: Mengembalikan `datetimezone` dengan `value` sebagai tarikhmasa dan ofset yang sepadan dengan zon waktu tempatan.
-   `datetimezone`: Mengembalikan `value`.
-   `masa`: Mengembalikan `datetimezone` dengan tarikh yang bersamaan dengan OLE Automation Date bagi `0` sebagai komponen tarikh, `value` sebagai komponen masa, dan ofset yang sepadan dengan zon waktu tempatan. OLE Automation Date terdiri daripada nombor titik apung yang komponen kamirannya ialah bilangan hari sebelum atau selepas tengah malam, 30 Disember 1899 dan komponen pecahannya mewakili masa pada hari tersebut dibahagi dengan 24. Sebagai contoh, tengah malam, 31 Disember 1899 diwakili oleh 1.0; 6 P.G., 1 Januari 1900 diwakili oleh 2.25; tengah malam, 29 Disember 1899 diwakili oleh -1.0; dan 6 P.G., 29 Disember 1899 diwakili oleh -1.25. Nilai asas ialah tengah malam, 30 Disember 1899. Nilai minimum ialah tengah malam, 1 Januari 0100. Nilai maksimum ialah saat terakhir 31 Disember 9999.
-   `nombor`: Mengembalikan `datetimezone` dengan persamaan tarikhmasa bagi ungkapan OLE Automation Date yang dinyatakan oleh `value` dan ofset yang sepadan dengan zon waktu tempatan.
-   `nol`: Mengembalikan `nol`.

Jika `value` ialah daripada apa-apa jenis lain, ralat dikembalikan.  
  
Nilai ofset yang sepadan dengan zon waktu tempatan adalah berbeza apabila menjalankan fungsi ini secara setempat berbanding menjalankannya dalam talian. Apabila dijalankan secara setempat, zon waktu tempatan akan dikembalikan. Apabila dijalankan dalam talian, zon waktu UTC (+00:00) akan dikembalikan.


## Examples

### Example #1
Tukar perwakilan teks bagi tarikh, masa, dan zon waktu kepada nilai `datetimezone`.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Tukar perwakilan teks bagi tarikh, masa, dan zon waktu Portugis Brazil kepada nilai `datetimezone`.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Tukar nombor yang mewakili 1 Januari 2025 pada 12 PTG kepada nilai `datetimezone`. Zon waktu dalam hasil bergantung pada sama ada contoh dijalankan secara setempat atau dalam talian.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone

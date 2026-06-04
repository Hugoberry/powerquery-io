---
title: DateTimeZone.From
---

# DateTimeZone.From


Membuat datetimezone dari nilai tertentu.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Membuat `datetimezone` dari nilai yang diberikan.

-   `value`: Nilai yang digunakan untuk membuat `datetimezone`.
-   `culture`: (Opsional) Kultur yang digunakan saat mengubah nilai (misalnya, "en-US").

Nilai tipe berikut dapat dikonversi ke nilai `datetimezone`:

-   `text`: Mengembalikan nilai `datetimezone` dari representasi tekstual. Lihat `DateTimeZone.FromText` untuk detailnya.
-   `date`: Mengembalikan `datetimezone` dengan `value` sebagai komponen tanggal, `12:00:00 AM` sebagai komponen waktu, dan offset yang terkait dengan zona waktu lokal.
-   `datetime`: Mengembalikan `datetimezone` dengan `value` sebagai tanggal/waktu dan offset yang sesuai dengan zona waktu lokal.
-   `datetimezone`: Mengembalikan nilai `value`.
-   `waktu`: Mengembalikan `datetimezone` dengan tanggal yang setara dengan Tanggal OLE Automation `0` sebagai komponen tanggal, `value` sebagai komponen waktu, dan offset yang sesuai dengan zona waktu lokal. Tanggal OLE Automation terdiri dari bilangan titik mengambang, dengan komponen bilangan bulatnya menunjukkan jumlah hari sebelum atau setelah tengah malam, 30 Desember 1899, dan komponen bilangan pecahannya menunjukkan waktu pada hari tersebut dibagi dengan 24. Misalnya, tengah malam 31 Desember 1899 direpresentasikan oleh 1,0; 06.00 1 Januari 1900 direpresentasikan oleh 2,25; tengah malam 29 Desember 1899 direpresentasikan oleh -1,0; dan 06.00 29 Desember 1899 direpresentasikan oleh -1,25. Nilai dasarnya adalah tengah malam 30 Desember 1899. Nilai minimumnya adalah tengah malam 1 Januari 0100. Nilai maksimumnya adalah detik terakhir 31 Desember 9999.
-   `number`: Mengembalikan `datetimezone` dengan padanan tanggal dan waktu dari Tanggal OLE Automation yang dinyatakan oleh `value` dan offset yang sesuai dengan zona waktu lokal.
-   `null`: Mengembalikan `null`.

Jika `value` memiliki tipe lain, akan menghasilkan kesalahan.  
  
Nilai offset yang sesuai dengan zona waktu lokal berbeda saat menjalankan fungsi ini secara lokal dibandingkan saat menjalankannya secara online. Saat dijalankan secara lokal, zona waktu lokal dikembalikan. Ketika dijalankan secara online, zona waktu UTC (+00:00) dikembalikan.


## Examples

### Example #1
Mengonversi representasi tekstual tanggal, waktu, dan zona waktu ke nilai `datetimezone`.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Konversikan representasi tekstual tanggal, waktu, dan zona waktu Portugis Brasil ke nilai `datetimezone`.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Mengonversi angka yang menunjukkan 1 Januari 2025 pukul 12.00 menjadi nilai `datetimezone`. Zona waktu dalam hasil tergantung pada apakah contoh dijalankan secara lokal atau online.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone

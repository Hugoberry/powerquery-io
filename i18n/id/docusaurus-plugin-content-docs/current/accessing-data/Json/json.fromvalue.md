---
title: Json.FromValue
---

# Json.FromValue


Menghasilkan representasi JSON dari nilai yang diberikan.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Menghasilkan perwakilan JSON dari nilai `value` yang diberikan dengan pengodean teks yang ditentukan oleh `encoding`. Jika `encoding` diabaikan, UTF8 digunakan. Nilai ditunjukkan sebagai berikut:

-   Nilai nol, teks, dan logika ditunjukkan sebagai jenis JSON yang berkaitan
-   Bilangan ditunjukkan sebagai angka dalam JSON, kecuali `#infinity`, `-#infinity` dan `#nan` dikonversi ke nol
-   Daftar ditunjukkan sebagai array JSON
-   Rekaman dinyatakan sebagai objek JSON
-   Tabel ditunjukkan sebagai array objek
-   Tanggal, waktu, tanggal waktu, zona tanggal waktu, dan durasi ditunjukkan sebagai teks ISO-8601
-   Nilai biner ditunjukkan sebagai teks dengan pengodean basis-64
-   Jenis dan fungsi menghasilkan kesalahan


## Examples

### Example #1
Mengonversi nilai kompleks ke JSON.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text

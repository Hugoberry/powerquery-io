---
title: Json.FromValue
---

# Json.FromValue


## Description

Menghasilkan representasi JSON dari nilai yang diberikan.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

Menghasilkan perwakilan JSON dari nilai <code>value</code> yang diberikan dengan pengpengodeanan teks yang ditentukan oleh <code>encoding</code>. Jika <code>encoding</code> diabaikan, UTF8 digunakan. Nilai ditunjukkan sebagai berikut:<br /> <ul>        <li>Nilai nol, teks, dan logika ditunjukkan sebagai jenis JSON yang berkaitan</li>        <li>Bilangan ditunjukkan sebagai angka dalam JSON, kecuali <code>#infinity</code>, <code>-#infinity</code> dan <code>#nan</code> dikonversi ke nol</li>        <li>Daftar ditunjukkan sebagai array JSON</li>        <li>Rekaman ditunjukkan sebagai objek JSON</li>        <li>Tabel ditunjukkan sebagai array objek</li>        <li>Tanggal, waktu, tanggal waktu, zona tanggal waktu, dan durasi ditunjukkan sebagai teks ISO-8601</li>        <li>Nilai biner ditunjukkan sebagai teks dengan pengodean basis-64</li>        <li>Jenis dan fungsi menghasilkan kesalahan</li> </ul>    


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

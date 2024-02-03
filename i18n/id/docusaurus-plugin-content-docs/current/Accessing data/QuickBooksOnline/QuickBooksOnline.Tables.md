---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

Impor data dari QuickBooks Online.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

        Mengembalikan tabel berisi daftar tabel yang tersedia di QuickBooks Online. Parameter catatan opsional, <code>options</code>, dapat ditentukan untuk mengontrol opsi berikut ini:          <ul>            <li><code>ConnectionTimeout</code>: Durasi yang mengontrol waktu tunggu sebelum menghentikan upaya penyambungan ke server.</li>            <li><code>CommandTimeout</code>: Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk berjalan sebelum dibatalkan.</li>          </ul>        Parameter catatan ditentukan sebagai [option1 = value1, option2 = value2...].    



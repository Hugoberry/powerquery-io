---
title: Lines.FromBinary
---

# Lines.FromBinary


Menukarkan nilai perduaan kepada senarai nilai teks yang dipisahkan pada garis pemisah. Jika gaya petikan ditentukan, maka garis pemisah mungkin muncul dalam petikan. Jika includeLineSeparators adalah benar, maka aksara garis pemisah disertakan dalam teks.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as any,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Remarks

Menukarkan nilai perduaan kepada senarai nilai teks yang dipisahkan pada garis pemisah.

-   `binary`: Nilai perduaan untuk ditukarkan kepada senarai.
-   `quoteStyle`: Menentukan cara garis pemisah dikendalikan. Nilai `quoteStyle` boleh `nol`. Nilai lalai ialah `QuoteStyle.None`.
-   `includeLineSeparators`: Menentukan sama ada ingin menyertakan aksara garis pemisah dalam teks. Nilai `includeLineSeparators` boleh `nol`. Nilai lalai ialah `palsu`.
-   `encoding`: Menentukan pengekodan teks bagi nilai perduaan. Nilai `encoding` boleh `nol`. Nilai lalai ialah `65001` (UTF-8).

Jika rekod ditentukan untuk `quoteStyle` (dan `includeLineSeparators` dan `encoding` ialah `nol`), medan rekod berikut boleh disediakan:

-   `QuoteStyle`: Menentukan cara garis pemisah yang dipetik dikendalikan.
    -   `QuoteStyle.Csv`: Garis pemisah yang dipetik dianggap sebagai sebahagian daripada data, bukan sebagai penghujung baris semasa.
    -   `QuoteStyle.None`: Semua garis pemisah dianggap sebagai penghujung baris semasa, walaupun apabila ia berlaku dalam nilai yang dipetik. Nilai ini ialah lalai jika pilihan `CsvStyle` tidak ditentukan.
-   `CsvStyle`: Menentukan cara petikan dikendalikan. Tidak boleh digunakan dengan `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: Petikan dalam medan hanya signifikan serta merta berikutan `Pembatas`.
    -   `CsvStyle.QuoteAlways`: Petikan dalam medan sentiasa signifikan, tanpa mengira tempat ia muncul.
-   `Pembatas`: Pembatas aksara tunggal. Harus digunakan hanya dengan `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: Menentukan sama ada ingin menyertakan aksara garis pemisah dalam teks. Nilai lalai ialah `palsu`.
-   `Pengekodan`: Pengekodan teks bagi nilai perduaan. Nilai lalai ialah `65001` (UTF-8).



## Category
Lines

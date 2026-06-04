---
title: Lines.FromText
---

# Lines.FromText


Menukarkan nilai teks kepada senarai nilai teks yang dipisahkan pada pemisah baris. Jika includeLineSeparators adalah benar, maka aksara pemisah garisan disertakan dalam teks.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Menukarkan nilai teks kepada senarai nilai teks yang dipisahkan pada garis pemisah.

-   `text`: Nilai teks untuk ditukarkan kepada senarai nilai teks.
-   `quoteStyle`: Menentukan cara garis pemisah dikendalikan. Nilai `quoteStyle` boleh `nol`. Nilai lalai ialah `QuoteStyle.None`.
-   `includeLineSeparators`: Menentukan sama ada ingin menyertakan aksara garis pemisah dalam teks. Nilai `includeLineSeparators` boleh `nol`. Nilai lalai ialah `palsu`.

Jika rekod ditentukan untuk `quoteStyle` (dan `includeLineSeparators` ialah `nol`), medan rekod berikut mungkin disediakan:

-   `QuoteStyle`: Menentukan cara garis pemisah yang dipetik dikendalikan.
    -   `QuoteStyle.Csv`: Garis pemisah yang dipetik dianggap sebagai sebahagian daripada data, bukan sebagai penghujung baris semasa.
    -   `QuoteStyle.None`: Semua garis pemisah dianggap sebagai penghujung baris semasa, walaupun apabila ia berlaku dalam nilai yang dipetik. Nilai ini ialah lalai jika pilihan `CsvStyle` tidak ditentukan.
-   `CsvStyle`: Menentukan cara petikan dikendalikan. Tidak boleh digunakan dengan `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: Petikan dalam medan hanya signifikan serta merta berikutan `Pembatas`.
    -   `CsvStyle.QuoteAlways`: Petikan dalam medan sentiasa signifikan, tanpa mengira tempat ia muncul.
-   `Pembatas`: Pembatas aksara tunggal. Harus digunakan hanya dengan `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: Menentukan sama ada ingin menyertakan aksara garis pemisah dalam teks. Nilai lalai ialah `palsu`.



## Category
Lines

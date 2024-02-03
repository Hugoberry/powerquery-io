---
title: Lines.FromText
---

# Lines.FromText


## Description

Mengkonversi nilai teks ke daftar nilai teks yang dibagi dengan garis pemisah. Jika includeLineSeparators bernilai true, maka karakter garis pemisah disertakan dalam teks.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

Mengonversi nilai teks ke daftar nilai teks yang dipisahkan dengan baris. Jika includeLineSeparator bernilai true, karakter pemisah baris disertakan dalam teks.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (default) Tidak diperlukan perilaku pengutipan.</li>            <li><code>QuoteStyle.Csv:</code> Pengutipan per Csv. Karakter tanda kutip ganda digunakan untuk membatasi wilayah seperti itu, dan sepasang tanda kutip digunakan untuk menunjukkan karakter kutipan ganda tunggal dalam wilayah seperti itu. </li>          </ul>        </div>    



## Category
Lines

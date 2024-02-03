---
title: Lines.FromText
---

# Lines.FromText


## Description

Menukarkan nilai teks kepada senarai nilai teks yang dipisahkan pada pemisah baris. Jika includeLineSeparators adalah benar, maka aksara pemisah garisan disertakan dalam teks.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

Tukar nilai teks kepada senarai nilai teks yang dipisah pada pemisah garis. Jika includeLineSeparators adalah benar, maka aksara pemisah garis disertakan di dalam teks.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (lalai) Tiada kelakuan memetik diperlukan.</li>            <li><code>QuoteStyle.Csv:</code> Memetik adalah seperti Csv. Aksara petik kembar digunakan untuk menandakan sempadan seperti rantau, dan sepasang aksara petik kembar digunakan untuk menyatakan satu aksara petikan kembar di dalam seperti rantau. </li>          </ul>        </div>    



## Category
Lines

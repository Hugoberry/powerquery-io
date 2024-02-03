---
title: Value.FromText
---

# Value.FromText


## Description

Mencipta nilai ditaip kukuh daripada perwakilan teks.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

Menyahkod nilai daripada perwakilan teks, <code>text</code>, dan mentafsirnya sebagai nilai dengan jenis yang sesuai.    <code>Value.FromText</code> mengambil nilai teks dan mengembalikan nombor, nilai logik, nilai nol, nilai datetime, nilai tempoh atau nilai teks. Nilai teks yang kosong ditafsirkan sebagai nilai nol.    <code>culture</code> pilihan juga mungkin diberikan (contohnya, "en-US").



## Category
Text.Conversions from and to text

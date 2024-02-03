---
title: Value.FromText
---

# Value.FromText


## Description

Membuat nilai bertipe kuat dari representasi tekstual.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

Mendekodekan nilai dari representasi tekstual, <code>text</code>, dan menginterpretasikannya sebagai nilai dengan tipe yang sesuai.    <code>Value.FromText</code> mengambil nilai teks dan menghasilkan angka, nilai logika, nilai null, nilai datetime, nilai durasi, atau nilai teks. Nilai teks kosong akan diinterpretasikan sebagai nilai null.    <code>culture</code> opsional juga dapat disediakan (misalnya, "en-US").



## Category
Text.Conversions from and to text

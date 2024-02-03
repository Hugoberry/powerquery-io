---
title: Text.PositionOf
---

# Text.PositionOf


## Description

Menghasilkan posisi pertama pada nilai (-1 jika tidak ditemukan).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Details

Mengembalikan posisi kemunculan tertentu dari nilai teks <code>substring</code> yang ditemukan dalam <code>text</code>.    Parameter opsional <code>occurrence</code> dapat digunakan untuk menentukan posisi kemunculan yang harus dihasilkan (kemunculan pertama secara default).    Mengembalikan -1 jika <code>substring</code> tidak ditemukan.      <div>        <code>comparer</code> adalah <code>Pembanding</code> yang digunakan untuk mengontrol perbandingan. Pembanding dapat digunakan untuk memberikan perbandingan yang tidak peka huruf besar kecil atau sadar kultur dan lokal.      </div>      <div>        Pembanding bawaan berikut tersedia dalam bahasa rumus:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Digunakan untuk melakukan perbandingan ordinal akurat</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Digunakan untuk melakukan perbandingan ordinal akurat yang tidak peka huruf besar kecil</li>        <li> <code>Comparer.FromCulture</code>: Digunakan untuk melakukan perbandingan sadar kultur</li>      </ul>


## Examples

### Example #1 
Mendapatkan posisi kemunculan pertama &#34;World&#34; pada teks &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
Mendapatkan posisi kemunculan terakhir &#34;World&#34; pada teks &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership

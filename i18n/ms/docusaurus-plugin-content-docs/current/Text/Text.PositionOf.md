---
title: Text.PositionOf
---

# Text.PositionOf


## Description

Mengembalikan kedudukan pertama bagi nilai (-1 jika tidak ditemui).


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

Mengembalikan kedudukan kejadian yang ditentukan bagi nilai teks <code>substring</code> yang ditemui dalam <code>text</code>.    Parameter pilihan <code>occurrence</code> boleh digunakan untuk menentukan kedudukan kejadian yang perlu dikembalikan (secara lalai kejadian pertama).    Mengembalikan -1 jika <code>substring</code> tidak ditemui.      <div>        <code>comparer</code> merupakan <code>Comparer</code> yang digunakan untuk mengawal perbandingan. Pembanding boleh digunakan untuk memberikan perbandingan tidak sensitif huruf atau perbandingan sedar budaya dan tempatan.      </div>      <div>        Pembanding terbina dalam berikut tersedia dalam bahasa formula:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Digunakan untuk melaksanakan perbandingan ordinal yang tepat</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Digunakan untuk melaksanakan perbandingan tidak sensitif huruf ordinal yang tepat</li>        <li> <code>Comparer.FromCulture</code>: Digunakan untuk melaksanakan perbandingan sedar budaya</li>      </ul>


## Examples

### Example #1 
Dapatkan kedudukan pertama kejadian pertama bagi &#34;World&#34; dalam teks &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
Dapatkan kedudukan kejadian terakhir bagi &#34;World&#34; dalam &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership

---
title: Text.Contains
---

# Text.Contains


## Description

Mengembalikan sama ada teks mengandungi subrentetan.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Mengesan sama ada <code>text</code> mengandungi nilai <code>substring</code>. Mengembalikan benar jika nilai ditemukan. Fungsi ini tidak menyokong aksara bebas atau ungkapan biasa.      <br />      <br />      Argumen pilihan <code>comparer</code> boleh digunakan untuk menentukan perbandingan tidak sensitif huruf atau perbandingan sedar budaya dan tempatan.      Pembanding terbina dalam berikut tersedia dalam bahasa formula:      <ul>        <li><code>Comparer.Ordinal</code>: Digunakan untuk melaksanakan perbandingan ordinal sensitif huruf</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Digunakan untuk melaksanakan perbandingan ordinal tidak sensitif huruf</li>        <li> <code>Comparer.FromCulture</code>: Digunakan untuk melaksanakan perbandingan sedar budaya</li>      </ul>


## Examples

### Example #1 
Cari sama ada teks &#34;Hello World&#34; mengandungi &#34;Hello&#34;.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Cari sama ada teks &#34;Hello World&#34; mengandungi &#34;hello&#34;.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Cari sama ada teks &#34;Helo Dunia&#34; mengandungi &#34;hello&#34;, menggunakan pembanding tidak sensitif huruf.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership

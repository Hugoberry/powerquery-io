---
title: Text.Contains
---

# Text.Contains


## Description

Menghasilkan apakah teks berisi substring.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Mendeteksi apakah <code>text</code> berisi nilai <code>substring</code>. Menghasilkan true jika nilai ditemukan. Fungsi ini tidak mendukung wildcard atau regex.      <br />      <br />      Argumen opsional <code>comparer</code> dapat digunakan untuk menentukan perbandingan ketidakpekaan huruf besar/kecil atau kesadaran budaya dan lokal.      Pembanding bawaan berikut tersedia dalam bahasa rumus:      <ul>        <li><code>Comparer.Ordinal</code>: Digunakan untuk melakukan perbandingan ordinal yang peka huruf besar/kecil</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Digunakan untuk melakukan perbandingan ordinal yang tidak peka huruf besar/kecil</li>        <li> <code>Comparer.FromCulture</code>: Digunakan untuk melakukan perbandingan kesadaran kultur</li>      </ul>


## Examples

### Example #1 
Mencari apakah teks &#34;Hello World&#34; berisi &#34;Hello&#34;.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Mencari apakah teks &#34;Hello World&#34; berisi &#34;hello&#34;.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Mencari apakah teks &#34;Hello World&#34; berisi &#34;hello&#34;, menggunakan pembanding yang tidak peka huruf besar/kecil.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership

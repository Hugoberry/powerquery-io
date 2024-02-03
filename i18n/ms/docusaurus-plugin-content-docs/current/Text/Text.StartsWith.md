---
title: Text.StartsWith
---

# Text.StartsWith


## Description

Menunjukkan sama ada teks bermula dengan nilai yang ditentukan.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Mengembalikan benar jika nilai teks <code>text</code> bermula dengan nilai teks <code>substring</code>.      <ul>        <li><code>text</code>: <i></i> Nilai <code>text</code> yang perlu dicari</li>        <li><code>substring</code>: <i></i> Nilai <code>text</code> yang merupakan subrentetan yang perlu dicari dalam <code>substring</code></li>        <li><code>comparer</code>: <i>[Pilihan]</i> <code>Comparer</code> digunakan untuk mengawal perbandingan. Contohnya, <code>Comparer.OrdinalIgnoreCase</code> boleh digunakan untuk melaksanakan carian tidak sensitif huruf</li>      </ul>      <div>        <code>comparer</code> merupakan <code>Comparer</code> yang digunakan untuk mengawal perbandingan. Pembanding boleh digunakan untuk memberikan perbandingan tidak sensitif huruf atau perbandingan sedar budaya dan tempatan.      </div>      <div>        Pembanding terbina dalam berikut tersedia dalam bahasa formula:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Digunakan untuk melaksanakan perbandingan ordinal yang tepat</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Digunakan untuk melaksanakan perbandingan tidak sensitif huruf ordinal yang tepat</li>        <li> <code>Comparer.FromCulture</code>: Digunakan untuk melaksanakan perbandingan sedar budaya</li>      </ul>


## Examples

### Example #1 
Semak sama ada teks &#34;Hello, World&#34; bermula dengan teks &#34;hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Semak sama ada teks &#34;Hello, World&#34; bermula dengan teks &#34;Hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership

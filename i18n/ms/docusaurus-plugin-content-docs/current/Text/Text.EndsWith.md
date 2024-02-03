---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Menunjukkan sama ada teks berakhir dalam nilai yang ditentukan.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Menunjukkan sama ada teks yang ditentukan, <code>text</code>, diakhiri dengan nilai yang ditentukan, <code>substring</code>. Penunjuk adalah sensitif huruf.      <div>        <code>comparer</code> merupakan <code>Comparer</code> yang digunakan untuk mengawal perbandingan. Pembanding boleh digunakan untuk memberikan perbandingan tidak sensitif huruf atau perbandingan sedar budaya dan tempatan.      </div>      <div>        Pembanding terbina dalam berikut tersedia dalam bahasa formula:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Digunakan untuk melaksanakan perbandingan ordinal yang tepat</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Digunakan untuk melaksanakan perbandingan tidak sensitif huruf ordinal yang tepat</li>        <li> <code>Comparer.FromCulture</code>: Digunakan untuk melaksanakan perbandingan sedar budaya</li>      </ul>


## Examples

### Example #1 
Semak sama ada &#34;Hello, World&#34; berakhir dengan &#34;world&#34;.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Semak sama ada &#34;Hello, World&#34; berakhir dengan &#34;World&#34;.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership

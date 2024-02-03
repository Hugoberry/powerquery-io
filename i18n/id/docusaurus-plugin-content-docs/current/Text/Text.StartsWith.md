---
title: Text.StartsWith
---

# Text.StartsWith


## Description

Menunjukkan apakah teks diawali nilai yang ditetapkan.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Mengembalikan true jika nilai teks <code>text</code> dimulai dengan nilai teks <code>substring</code>.      <ul>        <li><code>text</code>: <i></i> Nilai <code>text</code> yang perlu dicari</li>        <li><code>substring</code>: <i></i> Nilai <code>text</code> yang merupakan substring untuk dicari di <code>substring</code></li>        <li><code>comparer</code>: <i>[Opsional]</i> <code>Pembanding</code> digunakan untuk mengontrol perbandingan. Misalnya, <code>Comparer.OrdinalIgnoreCase</code> dapat digunakan untuk melakukan pencarian yang tidak peka huruf besar kecil</li>      </ul>      <div>        <code>comparer</code> adalah <code>Pembanding</code> yang digunakan untuk mengontrol perbandingan. Pembanding dapat digunakan untuk memberikan perbandingan sadar lokal dan kultur atau yang tidak peka huruf besar kecil.      </div>      <div>        Pembanding internal berikut tersedia dalam bahasa rumus:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Digunakan untuk melakukan perbandingan ordinal akurat</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Digunakan untuk melakukan perbandingan ordinal yang peka huruf besar kecil yang akurat</li>        <li> <code>Comparer.FromCulture</code>: Digunakan untuk melakukan perbandingan sadar kultur</li>      </ul>


## Examples

### Example #1 
Memastikan teks &#34;Hello, World&#34; diawali dengan teks &#34;hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Memastikan teks &#34;Hello, World&#34; diawali dengan teks &#34;Hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership

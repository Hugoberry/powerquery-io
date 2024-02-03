---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Menunjukkan apakah teks berakhir dalam nilai yang ditetapkan.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Menunjukkan apakah teks yang diberikan, <code>text</code>, diakhiri dengan nilai yang ditentukan, <code>substring</code>. Indikasinya adalah peka huruf besar kecil.      <div>        <code>comparer</code> adalah <code>Pembanding</code> yang digunakan untuk mengontrol perbandingan. Pembanding dapat digunakan untuk menyediakan perbandingan sadar lokal dan kultur atau yang tidak peka huruf besar kecil.      </div>      <div>        Pembanding internal berikut tersedia dalam bahasa rumus:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Digunakan untuk melakukan perbandingan ordinal akurat</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Digunakan untuk melakukan perbandingan ordinal yang tidak peka huruf besar kecil yang akurat</li>        <li> <code>Comparer.FromCulture</code>: Digunakan untuk melakukan perbandingan sadar kultur</li>      </ul>


## Examples

### Example #1 
Memastikan &#34;Hello, World&#34; berakhir dengan &#34;world&#34;.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Memastikan &#34;Hello, World&#34; berakhir dengan &#34;World&#34;.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership

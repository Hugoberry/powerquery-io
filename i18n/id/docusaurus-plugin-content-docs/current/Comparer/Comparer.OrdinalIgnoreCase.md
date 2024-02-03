---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Menghasilkan fungsi pembanding yang tidak peka huruf besar kecil yang menggunakan aturan Ordinal untuk membandingan nilai.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Mengembalikan fungsi pembanding tidak peka huruf besar/kecil yang menggunakan aturan Ordinal untuk membandingkan nilai yang diberikan <code>x</code> dan <code>y</code>.<br />        <br />         Fungsi pembanding menerima dua argumen dan mengembalikan -1, 0, atau 1 berdasarkan apakah nilai pertama kurang dari, sama dengan, atau lebih besar dari yang kedua.    


## Examples

### Example #1 
Dengan aturan Ordinal yang tidak peka huruf besar kecil, membandingkan &#34;Abc&#34; dengan &#34;abc&#34;. Perhatikan bahwa &#34;Abc&#34; kurang dari &#34;abc&#34; menggunakan &lt;code&gt;Comparer.Ordinal&lt;/code&gt;. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer

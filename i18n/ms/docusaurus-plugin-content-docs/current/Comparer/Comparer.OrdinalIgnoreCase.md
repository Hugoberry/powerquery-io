---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Kembalikan fungsi pembanding tidak sensitif huruf besar atau kecil yang menggunakan peraturan Ordinal untuk membanding nilai.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Mengembalikan fungsi pembanding tidak sensitif huruf besar atau kecil yang menggunakan peraturan Ordinal untuk membandingkan nilai yang diberikan <code>x</code> dan <code>y</code>.<br />        <br />        Fungsi pembanding menerima dua argumen dan mengembalikan -1, 0 atau 1 berdasarkan sama ada nilai pertama adalah kurang daripada, sama dengan atau lebih besar daripada yang kedua.    


## Examples

### Example #1 
Menggunakan peraturan Ordinal tidak sensitif huruf besar atau kecil, bandingkan &#34;Abc&#34; dengan &#34;abc&#34;. Perhatikan &#34;Abc&#34; adalah kurang daripada &#34;abc&#34; dengan menggunakan &lt;code&gt;Comparer.Ordinal&lt;/code&gt;. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer

---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

Kembalikan fungsi pembanding yang menggunakan peraturan Ordinal untuk membandingkan nilai.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

Mengembalikan fungsi pembanding yang menggunakan peraturan Ordinal untuk membandingkan nilai yang diberikan <code>x</code> dan <code>y</code>.<br />      <br />      Fungsi pembanding menerima dua argumen dan mengembalikan -1, 0 atau 1 berdasarkan sama ada nilai pertama kurang daripada, sama dengan atau lebih besar daripada yang kedua.    


## Examples

### Example #1 
Menggunakan peraturan Ordinal, bandingkan jika &#34;encyclopædia&#34; dan &#34;encyclopaedia&#34; adalah sama. Perhatikan bahawa ini adalah sama dengan menggunakan &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt;. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer

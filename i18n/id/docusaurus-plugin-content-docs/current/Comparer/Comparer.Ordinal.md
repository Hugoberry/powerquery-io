---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

Menghasilkan fungsi pembanding yang menggunakan peraturan Ordinal untuk membandingkan nilai.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

Menghasilkan fungsi pembanding yang menggunakan aturan Ordinal untuk membandingkan nilai yang diberikan <code>x</code> dan <code>y</code>.<br />      <br /> Fungsi pembanding menerima dua argumen dan mengembalikan -1, 0, atau 1 berdasarkan apakah nilai pertama kurang dari, sama dengan, atau lebih besar dari yang kedua.    


## Examples

### Example #1 
Dengan menggunakan aturan Ordinal, membandingkan apakah &#34;encyclopædia&#34; dan &#34;encyclopaedia&#34; sama. Perlu dicatat keduanya sama menggunakan &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt;.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer

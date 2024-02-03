---
title: Comparer.Equals
---

# Comparer.Equals


## Description

Menghasilkan nilai logika berdasarkan pemeriksaan persamaan atas dua nilai yang diberikan.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

Menghasilkan nilai <code>logis</code> berdasarkan pemeriksaan kesetaraan atas dua nilai yang diberikan, <code>x</code> dan <code>y</code>, menggunakan <code>comparer</code>. yang disediakan
      <div>        <code>comparer</code>adalah <code>Pembanding</code> yang digunakan untuk mengontrol perbandingan.         Pembanding adalah fungsi yang menerima dua argumen dan mengembalikan -1, 0, atau 1 berdasarkan apakah nilai pertama lebih kecil, sama dengan, atau lebih besar dari yang kedua.         Pembanding dapat digunakan untuk memberikan perbandingan peka huruf besar kecil atau budaya dan paham bahasa lokal.      </div>      <div>         Pembanding bawaan berikut tersedia dalam bahasa rumus:      </div>      <ul>         <li><code>Comparer.Ordinal</code>: Digunakan untuk melakukan perbandingan ordinal yang tepat</li>         <li><code>Comparer.OrdinalIgnoreCase</code>: Digunakan untuk melakukan perbandingan peka huruf besar-kecil ordinal yang tepat</li>         <li> <code>Comparer.FromCulture</code>: Digunakan untuk melakukan perbandingan berdasarkan budaya</li>       </ul>


## Examples

### Example #1 
Bandingkan &#34;1&#34; dan &#34;A&#34; menggunakan lokal &#34;en-US&#34; untuk menentukan apakah nilai setara atau tidak.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer

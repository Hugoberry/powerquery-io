---
title: Comparer.Equals
---

# Comparer.Equals


## Description

Kembalikan nilai logik berdasarkan semakan kesamaan untuk dua nilai yang diberi.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

Mengembalikan nilai <code>logical</code> berdasarkan semakan persamaan ke atas dua nilai, <code>x</code> dan <code>y</code>yang diberikan , menggunakan <code>comparer</code>.      <div>        <code>comparer</code> ialah kod <code>Comparer</code> yang digunakan untuk mengawal perbandingan.        Pembanding A ialah fungsi yang menerima dua argumen dan mengembalikan -1, 0 atau 1 berdasarkan sama ada nilai pertama adalah kurang daripada, sama dengan,  atau lebih besar daripada yang kedua.        Pembanding boleh digunakan untuk menyediakan perbandingan kes tidak sensitif atau budaya dan sedar-tempatan.      </div>      <div>      Pembanding terbina dalam berikut tersedia dalam bahasa formula:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Digunakan untuk melaksanakan perbandingan ordinal yang tepat</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Digunakan untuk melaksanakan huruf besar tidak sensitif huruf yang tepat perbandingan</li>        <li> <code>Comparer.FromCulture</code>: Digunakan untuk melaksanakan perbandingan sedar-budaya</li>      </ul>


## Examples

### Example #1 
Bandingkan &#34;1&#34; dan &#34;A&#34; dengan menggunakan tempatan &#34;en-US&#34; untuk menentukan jika nilai-nilai ini adalah sama.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer

---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

Mengembalikan fungsi pembanding berdasarkan budaya yang ditentukan dan sensitiviti huruf.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

Mengembalikan fungsi pembanding yang menggunakan <code>culture</code> dan sensitiviti huruf yang ditentukan oleh <code>ignoreCase</code> untuk melaksanakan fungsi perbandingan.<br />      <br />      Fungsi pembanding menerima dua argumen dan mengembalikan -1, 0, atau 1 berdasarkan sama ada nilai pertama adalah kurang daripada, sama dengan atau lebih besar daripada yang kedua.<br />      <br />      Nilai lalai untuk <code>ignoreCase</code> adalah palsu. Nama <code>culture</code> mestilah salah satu tempat yang disokong oleh kerangka .NET (contohnya, "en-US").    


## Examples

### Example #1 
Bandingkan &#34;a&#34; dan &#34;A&#34; dengan menggunakan tempatan &#34;en-US&#34; untuk menentukan jika nilai-nilai ini adalah sama.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Bandingkan &#34;a&#34; dan &#34;A&#34; dengan menggunakan tempat &#34;en-US&#34; mengabaikan huruf untuk menentukan jika nilai-nilai ini adalah sama.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer

---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

Menghasilkan fungsi pembanding berdasarkan kultur dan sensitivitas kasus yang ditentukan.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

Menghasilkan fungsi pembanding yang menggunakan <code>culture</code> dan sensitivitas kasus yang ditentukan oleh <code>ignoreCase</code> untuk melakukan perbandingan.<br />      <br />      Fungsi pembanding menerima dua argumen dan menghasilkan -1, 0, atau 1 berdasarkan apakah nilai pertama kurang dari, sama dengan, atau lebih besar dari yang kedua.<br />      <br />      Nilai default untuk <code>ignoreCase</code> adalah false. <code>culture</code> harus merupakan salah satu bahasa lokal yang didukung oleh .NET framework (misalnya, "en-US").    


## Examples

### Example #1 
Bandingkan &#34;a&#34; dan &#34;A&#34; menggunakan lokal &#34;en-US&#34; untuk menentukan apakah nilai setara atau tidak.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Bandingkan &#34;a&#34; dan &#34;A&#34; menggunakan lokal &#34;en-US&#34; dengan mengabaikan kasus untuk menentukan apakah nilai setara atau tidak.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer

---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Menghasilkan posisi pertama pada nilai teks karakter tercantum (-1 jika tidak ditemukan).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

Menghasilkan posisi pertama dari karakter apa saja dalam daftar <code>characters</code> yang ditemukan di <code>text</code>.
    Parameter opsional <code>occurrence</code> dapat digunakan untuk menentukan posisi kemunculan yang akan dihasilkan.


## Examples

### Example #1 
Temukan posisi pertama &#34;W&#34; atau &#34;H&#34; dalam teks &#34;Halo, Dunia!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Temukan semua posisi &#34;W&#34; atau &#34;H&#34; dalam teks &#34;Halo, Dunia!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership

---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Menghasilkan posisi pertama pada nilai teks karakter tercantum (-1 jika tidak ditemukan).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

Menghasilkan posisi pertama dari karakter apa saja dalam daftar `characters` yang ditemukan di `text`. Parameter opsional `occurrence` dapat digunakan untuk menentukan posisi kemunculan yang akan dihasilkan.


## Examples

### Example #1
Temukan posisi pertama "W" atau "H" dalam teks "Halo, Dunia!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Temukan semua posisi "W" atau "H" dalam teks "Halo, Dunia!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership

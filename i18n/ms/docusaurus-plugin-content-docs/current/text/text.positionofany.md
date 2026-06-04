---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Mengembalikan kedudukan pertama dalam nilai teks bagi sebarang aksara yang disenaraikan (-1 jika tidak ditemui).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

Mengembalikan kedudukan pertama bagi apa-apa aksara dalam senarai `characters` yang ditemui dalam `text`. Parameter pilihan `occurrence` boleh digunakan untuk menentukan kedudukan kejadian yang perlu dikembalikan.


## Examples

### Example #1
Cari kedudukan pertama bagi "W" atau "H" dalam teks "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Cari semua kedudukan "W" atau "H" dalam teks "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership

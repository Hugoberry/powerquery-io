---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Mengembalikan kedudukan pertama dalam nilai teks bagi sebarang aksara yang disenaraikan (-1 jika tidak ditemui).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

Mengembalikan kedudukan pertama bagi apa-apa aksara dalam senarai <code>characters</code> yang ditemui dalam <code>text</code>. 
    Parameter pilihan <code>occurrence</code> boleh digunakan untuk menentukan kedudukan kejadian yang perlu dikembalikan.


## Examples

### Example #1 
Cari kedudukan pertama bagi &#34;W&#34; atau &#34;H&#34; dalam teks &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Cari semua kedudukan &#34;W&#34; atau &#34;H&#34; dalam teks &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership

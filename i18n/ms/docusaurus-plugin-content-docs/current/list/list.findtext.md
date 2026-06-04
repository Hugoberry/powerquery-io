---
title: List.FindText
---

# List.FindText


Mengembalikan senarai nilai (termasuk medan rekod) yang mengandungi teks yang ditentukan.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Mengembalikan senarai nilai daripada senarai `list`, yang mengandungi nilai tersebut `text`.


## Examples

### Example #1
Cari nilai teks dalam senarai \{"a", "b", "ab"\} yang sepadan dengan "a".
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection

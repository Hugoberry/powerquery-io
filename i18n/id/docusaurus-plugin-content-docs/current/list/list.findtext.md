---
title: List.FindText
---

# List.FindText


Menghasilkan daftar nilai (termasuk bidang data) berisi teks yang ditetapkan.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Menghasilkan daftar nilai dari daftar `list` yang berisi nilai `text`.


## Examples

### Example #1
Mencari nilai teks dalam daftar \{"a", "b", "ab"\} yang sesuai dengan "a".
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection

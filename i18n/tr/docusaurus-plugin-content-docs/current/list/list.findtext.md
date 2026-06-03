---
title: List.FindText
---

# List.FindText


Belirtilen metni içeren bir değer listesi (kayıt alanları dahil) döndürür.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

`list` listesinden `text` değerini içeren değerlerin listesini döndürür.


## Examples

### Example #1
\{"a", "b", "ab"\} listesinde "a" ile eşleşen metin değerlerini bulur.
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection

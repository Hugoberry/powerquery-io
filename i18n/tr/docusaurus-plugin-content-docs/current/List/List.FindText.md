---
title: List.FindText
---

# List.FindText


## Description

Belirtilen metni içeren bir değer listesi (kayıt alanları dahil) döndürür.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

<code>list</code> listesinden <code>text</code> değerini içeren değerlerin listesini döndürür.


## Examples

### Example #1 
\{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} listesinde &#34;a&#34; ile eşleşen metin değerlerini bulur. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection

---
title: List.FindText
---

# List.FindText


## Description

Mengembalikan senarai nilai (termasuk medan rekod) yang mengandungi teks yang ditentukan.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

Mengembalikan senarai nilai daripada senarai <code>list</code>, yang mengandungi nilai tersebut <code>text</code>.


## Examples

### Example #1 
Cari nilai teks dalam senarai \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} yang sepadan dengan &#34;a&#34;. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection

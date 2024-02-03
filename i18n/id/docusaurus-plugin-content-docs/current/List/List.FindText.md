---
title: List.FindText
---

# List.FindText


## Description

Menghasilkan daftar nilai (termasuk bidang data) berisi teks yang ditetapkan.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

Menghasilkan daftar nilai dari daftar <code>list</code> yang berisi nilai <code>text</code>.


## Examples

### Example #1 
Mencari nilai teks dalam daftar \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} yang sesuai dengan &#34;a&#34;. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection

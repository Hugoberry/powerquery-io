---
title: List.FindText
---

# List.FindText


## Description

Returnerer en liste over værdier (herunder postfelter), der indeholder den angivne tekst.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

Returnerer en liste over værdierne fra listen <code>list</code>, som indeholdt værdien <code>text</code>.


## Examples

### Example #1 
Find de tekstværdier på listen \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;}, der stemmer overens med &#34;a&#34;. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection

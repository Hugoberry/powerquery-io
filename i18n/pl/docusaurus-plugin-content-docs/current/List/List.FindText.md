---
title: List.FindText
---

# List.FindText


## Description

Zwraca listę wartości (w tym pola rekordu) zawierających określony tekst.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

Zwraca listę wartości z listy <code>list</code>, które zawierają wartość <code>text</code>.


## Examples

### Example #1 
Znajdź na liście \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} wartości tekstowe zawierające wartość „a”. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection

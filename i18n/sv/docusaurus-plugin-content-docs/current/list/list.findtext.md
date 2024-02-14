---
title: List.FindText
---

# List.FindText


Returnerar en lista med värden (inklusive postfält) som innehåller den angivna texten.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Returnerar en lista med värden från listan <code>list</code> som innehöll värdet <code>text</code>.


## Examples

### Example #1 
Hitta de textvärden i listan \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} som matchar &#34;a&#34;. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection

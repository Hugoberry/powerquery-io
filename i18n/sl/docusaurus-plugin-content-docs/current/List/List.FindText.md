---
title: List.FindText
---

# List.FindText


## Description

Vrne seznam vrednosti (vključno s polji zapisov), ki vsebujejo navedeno besedilo.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

Vrne seznam vrednosti iz seznama <code>list</code>, ki je vseboval vrednost <code>text</code>.


## Examples

### Example #1 
Poiščite besedilne vrednosti na seznamu \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;}, ki se ujemajo z &#34;a&#34;. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection

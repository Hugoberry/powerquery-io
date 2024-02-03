---
title: List.FindText
---

# List.FindText


## Description

Vrátí seznam hodnot (včetně polí záznamů), které obsahují zadaný text.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

Vrátí seznam hodnot seznamu <code>list</code>, které obsahují hodnotu <code>text</code>.


## Examples

### Example #1 
Vyhledá v seznamu \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} textové hodnoty, které odpovídají textu a. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection

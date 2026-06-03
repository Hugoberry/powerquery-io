---
title: List.FindText
---

# List.FindText


Returnerer en liste over værdier (herunder postfelter), der indeholder den angivne tekst.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Returnerer en liste over værdierne fra listen `list`, som indeholdt værdien `text`.


## Examples

### Example #1
Find de tekstværdier på listen \{"a", "b", "ab"\}, der stemmer overens med "a".
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection

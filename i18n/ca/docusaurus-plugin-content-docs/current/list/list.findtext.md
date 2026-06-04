---
title: List.FindText
---

# List.FindText


Retorna una llista de valors (inclosos els camps de registres) que conté el text especificat.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Retorna una llista de valors de la llista `list` que contenia el valor `text`.


## Examples

### Example #1
Troba els valors de text de la llista \{"a", "b", "ab"\} que coincideixen amb "a".
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection

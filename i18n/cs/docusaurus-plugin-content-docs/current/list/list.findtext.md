---
title: List.FindText
---

# List.FindText


Vrátí seznam hodnot (včetně polí záznamů), které obsahují zadaný text.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Vrátí seznam hodnot seznamu `list`, které obsahují hodnotu `text`.


## Examples

### Example #1
Vyhledá v seznamu \{"a", "b", "ab"\} textové hodnoty, které odpovídají textu a.
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection

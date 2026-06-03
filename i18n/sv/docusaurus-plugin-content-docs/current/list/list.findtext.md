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

Returnerar en lista med värden från listan `list` som innehöll värdet `text`.


## Examples

### Example #1
Hitta de textvärden i listan \{"a", "b", "ab"\} som matchar "a".
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection

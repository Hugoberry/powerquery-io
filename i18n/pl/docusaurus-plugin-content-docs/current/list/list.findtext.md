---
title: List.FindText
---

# List.FindText


Zwraca listę wartości (w tym pola rekordu) zawierających określony tekst.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Zwraca listę wartości z listy `list`, które zawierają wartość `text`.


## Examples

### Example #1
Znajdź na liście \{"a", "b", "ab"\} wartości tekstowe zawierające wartość „a”.
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection

---
title: List.FindText
---

# List.FindText


Vrne seznam vrednosti (vključno s polji zapisov), ki vsebujejo navedeno besedilo.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Vrne seznam vrednosti iz seznama `list`, ki je vseboval vrednost `text`.


## Examples

### Example #1
Poiščite besedilne vrednosti na seznamu \{"a", "b", "ab"\}, ki se ujemajo z "a".
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection

---
title: List.FindText
---

# List.FindText


Retourneert een lijst met waarden (inclusief recordvelden) die de opgegeven tekst bevatten.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Retourneert een lijst met de waarden uit de lijst `list` die de waarde `text` bevatten.


## Examples

### Example #1
De tekstwaarden zoeken in de lijst \{"a", "b", "ab"\} die overeenkomen met "a".
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
